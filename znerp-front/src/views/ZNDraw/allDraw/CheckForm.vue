<template>
	<Dialog :title="dialogTitle" v-model="dialogVisible" width="540">
		<el-form class="-mb-15px" ref="formRef" :model="orderData" :rules="formRules" label-width="100px">
			<el-form-item label="订单号">
				<el-input v-model="orderData.id" placeholder="请输入订单单号" clearable disabled class="!w-160px" />
			</el-form-item>
			<el-form-item label="图片">
				<el-row :gutter="20" class="w-full">
					<el-col :lg="8" :sm="12" :xs="24" v-for="(item, index) in imgList" :key="'img' + index">
						<el-image class="h-80px w-100px" lazy :src="item" :preview-src-list="imgList" preview-teleported
							fit="cover" />
					</el-col>
				</el-row>
			</el-form-item>
			<el-form-item label="是否通过">
				<el-radio-group v-model="orderData.status" :disabled="orderStatus === 1">
					<el-radio :value="1">通过</el-radio>
					<el-radio :value="2">不通过</el-radio>
				</el-radio-group>
			</el-form-item>
			<el-form-item label="原因" prop="reasion">
				<el-input type="textarea" :disabled="orderStatus === 1" v-model="orderData.reasion" :rows="5" placeholder="请输入原因" />
			</el-form-item>
		</el-form>
		<template #footer v-if="orderStatus !== 1">
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
	status: 0,
	reasion: '',
	draftsmans_id: undefined
}) // 订单信息

const orderStatus = ref(0)

const imgList = ref([])

const message = useMessage() // 消息弹窗
const formRules = reactive({
	fileUrl: [{ required: true, message: '请上传设计图', trigger: 'blur' }]
})

const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, info: any) => {
	dialogVisible.value = true
	dialogTitle.value = type === 'draw' ? '审核设计图' : type === 'plate' ? '审核制版图' : ''
	if (info) {
		const hasReasons = 'reasons' in info;
		
		if (type === 'draw') {
			orderData.value.status = info.draStatus ? info.draStatus : 0
			orderStatus.value = info.draStatus ? info.draStatus : 0
			orderData.value.id = info.imgUrl ? info.itemId : info.draftsmans[0].itemId
			orderData.value.draftsmans_id = info.imgUrl ? info.id : info.draftsmans[0].id
			orderData.value.reasion = hasReasons ? info.reasons : info.draftsmans[0].reasons
		} else if (type === 'plate') {
			orderData.value.status = info.printStatus ? info.printStatus : 0
			orderStatus.value = info.printStatus ? info.printStatus : 0
			orderData.value.id = info.imgUrl ? info.itemId : info.printers[0].itemId
			orderData.value.draftsmans_id = info.imgUrl ? info.id : info.printers[0].id
			orderData.value.reasion = hasReasons ? info.reasons : info.printers[0].reasons
		}

		if (info.imgUrl) {
			// 一单一件
			imgList.value = info.imgUrl.split(',')
		} else {
			// 一单多件
			imgList.value = type === 'draw' ? info.draftsmans[0].imgUrl.split(',') : info.printers[0].imgUrl.split(',')
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
		let params = {}
		const commonParams = {
			id: orderData.value.id,
			reasion: orderData.value.reasion,
			draftsmans_id: orderData.value.draftsmans_id,
		};
		if (dialogTitle.value == '审核设计图') {
			params = {
				...commonParams,
				draStatus: orderData.value.status
			}
		} else if (dialogTitle.value == '审核制版图') {
			params = {
				...commonParams,
				printStatus: orderData.value.status
			}
		}


		await ZnerpApi.orderItemUpdate(params)
		message.success(`${dialogTitle.value}成功！`)
		dialogVisible.value = false
		// 发送操作成功的事件
		emit('success')
	} finally {
		formLoading.value = false
	}
}

</script>