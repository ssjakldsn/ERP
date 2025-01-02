<template>
	<Dialog :title="dialogTitle" v-model="dialogVisible" width="540">
		<el-form class="-mb-15px" ref="formRef" :model="orderData" :rules="formRules" label-width="100px">
			<el-form-item label="订单号">
				<el-input v-model="orderData.orderId" placeholder="请输入订单单号" clearable disabled class="!w-160px" />
			</el-form-item>
			<el-form-item label="上传图片" prop="fileUrl">
				<UploadImgs v-model="orderData.fileUrl" :limit="9">
					<template #tip>不能超过9张</template>
				</UploadImgs>
			</el-form-item>
		</el-form>
		<template #footer>
			<el-button type="primary" @click="submitForm" :disabled="formLoading">
				确定
			</el-button>
			<el-button @click="dialogVisible = false">取 消</el-button>
		</template>
	</Dialog>
</template>

<script setup lang="ts">
import { ZnerpApi } from '@/api/znerp'

/** znERP 画图 */
defineOptions({ name: 'CheckList' })
const formLoading = ref(false) // 表单的加载中
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('上传设计图') // 弹窗的标题
const orderData = ref({
	id: undefined,
	fileUrl: [],
	orderId: undefined,
	productId: undefined,
	itemId: undefined,
	// type: 0,
}) // 订单信息

const message = useMessage() // 消息弹窗
const formRules = reactive({
	fileUrl: [{ required: true, message: '请上传设计图', trigger: 'blur' }]
})

const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, info: any) => {
	dialogVisible.value = true
	dialogTitle.value = type === 'draw' ? '设计图上传' : '制版图上传'
	if (info) {
		let draftsmanInfo = type === 'draw' ? info.draftsmans[0] : info.printers[0]

		orderData.value = {
			fileUrl: draftsmanInfo.imgUrl ? draftsmanInfo.imgUrl.split(',') : [],
			id: draftsmanInfo.id,
			orderId: draftsmanInfo.orderId,
			productId: draftsmanInfo.productId,
			itemId: draftsmanInfo.itemId,
			// type: type === 'draw' ? 1 : 2
		}
	}
}

defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
	// 校验表单
	if (!formRef) return
	const valid = await formRef.value.validate()
	if (!valid) return
	// 提交请求
	formLoading.value = true
	try {
		let params = JSON.stringify({
		  id: orderData.value.id,
			orderId: orderData.value.orderId,
		  productId: orderData.value.productId,
			itemId: orderData.value.itemId,	
			imgUrl: orderData.value.fileUrl.join(','),
			// type: orderData.value.type,
		})

		await ZnerpApi.draftsmanUpdate(params)

		message.success(`${dialogTitle.value}成功！`)
		dialogVisible.value = false
		// 发送操作成功的事件
		emit('success')
	} finally {
		formLoading.value = false
	}
}

/** 重置表单 */
// const resetForm = () => {
// 	formRef.value?.resetFields()
// 	orderData.value = {
// 		id: undefined,
// 		type: undefined,
// 		status: undefined,
// 		fileUrl: []
// 	}
// }
</script>