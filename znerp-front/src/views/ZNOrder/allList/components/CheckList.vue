<template>
	<Dialog :title="dialogTitle" v-model="dialogVisible" width="480">
		<el-form class="-mb-15px" ref="formRef" :model="orderData" :rules="formRules" label-width="100px">
			<el-form-item label="订单号">
				<el-input v-model="orderData.id" placeholder="请输入订单单号" clearable disabled class="!w-160px" />
			</el-form-item>
			<el-form-item label="类型" prop="type">
				<el-select v-model="orderData.type" clearable filterable placeholder="请选择类型" class="!w-240px">
					<el-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item.id" />
				</el-select>
			</el-form-item>
			
			<template v-if="orderData.type === 1">
				<el-form-item label="标签">
					<el-select v-model="orderData.tag" clearable filterable placeholder="请选择类型" class="!w-240px">
						<el-option v-for="item in labelList" :key="item.id" :label="item.name" :value="item.id" />
					</el-select>
				</el-form-item>
				<el-form-item label="刺绣类型" v-if="orderData.tag === 2">
					<el-select v-model="orderData.custom" clearable filterable placeholder="请选择类型" class="!w-240px">
						<el-option v-for="item in customTypeList" :key="item.id" :label="item.name" :value="item.id" />
					</el-select>
				</el-form-item>
			</template>
		</el-form>
		<template #footer>
			<el-button type="primary" @click="submitForm">
				确定
			</el-button>
			<el-button @click="dialogVisible = false">取 消</el-button>
		</template>
	</Dialog>
</template>

<script setup lang="ts">
import { ZnerpApi } from '@/api/znerp'
/** znERP 订单审核 */
defineOptions({ name: 'CheckList' })
const formLoading = ref(false) // 表单的加载中
const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('订单审核') // 弹窗的标题
const orderData = ref({
	id: undefined,
	type: undefined,
	tag: undefined,
	custom: undefined,
	status: 1,
}) // 订单信息

const typeList = ref([
	{
		id: 1,
		name: '一单一件'
	},
	{
		id: 2,
		name: '一单多件'
	},
])

const labelList = ref([
	{
		id: 1,
		name: '普货'
	},
	{
		id: 2,
		name: '定制'
	},
	{
		id: 3,
		name: '油画'
	},
])

const customTypeList = ref([
	{
		id: 1,
		name: '线条'
	},
	{
		id: 2,
		name: '彩绣'
	}
])

const message = useMessage() // 消息弹窗
const formRules = reactive({
	type: [{ required: true, message: '请选择订单类型', trigger: 'change' }]
})

/** 打开弹窗 */
const open = async (info: any) => {
	dialogVisible.value = true
	if (info) {
		orderData.value = info
		orderData.value.type = undefined
	}
}

defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const formRef = ref() // 表单 Ref
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
	// 校验表单
	if (!formRef) return
	const valid = await formRef.value.validate()
	if (!valid) return
	// 提交请求
	formLoading.value = true
	try {
		let params = {
			id: orderData.value.id,
			status: 1,
			type: orderData.value.type
		}
		await ZnerpApi.updateOrderStatus(params)
		message.success(`${dialogTitle.value}成功！`)
		dialogVisible.value = false
		// 发送操作成功的事件
		emit('success')
	} finally {
		formLoading.value = false
	}
}
</script>