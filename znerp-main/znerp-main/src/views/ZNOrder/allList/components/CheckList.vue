<template>
	<Dialog :title="dialogTitle" v-model="dialogVisible" width="480">
		<el-form class="-mb-15px" ref="formRef" :model="orderData" :rules="formRules" label-width="100px">
			<el-form-item label="订单单号">
				<el-input v-model="orderData.id" placeholder="请输入订单单号" clearable disabled class="!w-160px" />
			</el-form-item>
			<el-form-item label="订单状态">
				<el-select v-model="orderData.status" placeholder="请选择状态" clearable class="!w-240px">
					<el-option
v-for="dict in getIntDictOptions(DICT_TYPE.ZN_ORDER_STATUS)" :key="dict.value" :label="dict.label"
						:value="dict.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="类型">
				<el-select v-model="orderData.type" clearable filterable placeholder="请选择类型" class="!w-240px">
					<el-option v-for="item in typeList" :key="item.id" :label="item.name" :value="item.id" />
				</el-select>
			</el-form-item>
			<!-- <el-form-item label="工作分配">
				<el-select v-model="orderData.employees" clearable filterable placeholder="请选择工作人员" class="!w-240px">
					<el-option v-for="item in userList" :key="item.id" :label="item.name" :value="item.id" />
				</el-select>
			</el-form-item> -->
		</el-form>
		<template #footer>
			<el-button type="primary">
				确定
			</el-button>
			<el-button @click="dialogVisible = false">取 消</el-button>
		</template>
	</Dialog>
</template>

<script setup lang="ts">
import { getIntDictOptions, DICT_TYPE } from '@/utils/dict'
/** znERP 订单审核 */
defineOptions({ name: 'CheckList' })

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('订单审核') // 弹窗的标题
const orderData = ref({
	id: undefined,
	type: undefined,
	status: undefined,
	employees: '',
}) // 订单信息

const typeList = ref([
	{
		id: 1,
		name: '线条'
	},
	{
		id: 2,
		name: '彩绣'
	},
])

const userList = ref([
	{
		id: 1,
		name: '张三'
	},
	{
		id: 2,
		name: '李四'
	},
])

const formRules = reactive({
	supplierId: [{ required: true, message: '供应商不能为空', trigger: 'blur' }],
	orderTime: [{ required: true, message: '订单时间不能为空', trigger: 'blur' }]
})

/** 打开弹窗 */
const open = async (info: any) => {
	dialogVisible.value = true
	if (info) {
		orderData.value = info
	}
}

defineExpose({ open }) // 提供 open 方法，用于打开弹窗



</script>