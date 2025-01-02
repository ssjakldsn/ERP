<template>
	<Dialog :title="dialogTitle" v-model="dialogVisible" width="1080">
		<el-row :gutter="20">
			<el-col :span="8">
				<el-form-item label="订单单号">
					{{ formData.id }}
				</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="下单时间">
					{{ formatPast(formData.createdAt) }}
				</el-form-item>
			</el-col>
			<el-col :span="8">
				<el-form-item label="买家邮箱">
					{{ formData.email }}
				</el-form-item>
			</el-col>
		</el-row>
		<!-- 子表的表单 -->
		<ContentWrap>
			<el-tabs v-model="subTabsName" class="-mt-15px -mb-10px">
				<el-tab-pane label="商品清单" name="item">
					<PurchaseOrderItemForm ref="itemFormRef" :items="formData.orderItems" />
				</el-tab-pane>
			</el-tabs>
		</ContentWrap>
		<el-row :gutter="20">
			<el-col :span="24">
				收货地址：{{ formData.shippingAddress.address1 }}
			</el-col>
		</el-row>
		<template #footer>
			<el-button type="primary" @click="checkListHandle" v-if="formData.status === 0">
				审核
			</el-button>
			<el-button @click="dialogVisible = false">取 消</el-button>
		</template>
	</Dialog>
</template>
<script setup lang="ts">
import { formatPast } from '@/utils/formatTime'
import PurchaseOrderItemForm from './components/PurchaseOrderItemForm.vue'

/** ERP 订单详情 */
defineOptions({ name: 'PurchaseOrderForm' })
const { t } = useI18n() // 国际化

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formType = ref('') // 表单的类型：create - 新增；update - 修改；detail - 详情
const formData = ref({
	id: undefined,
	createdAt: '',
	updatedAt: undefined,
	createTime: undefined,
	updateTime: undefined,
	creator: undefined,
	deleted: Boolean,
	orderNumber: Number,
	email: '',
	totalPrice: Number,
	subtotalPrice: Number,
	totalTax: Number,
	totalDiscounts: Number,
	currency: '',
	financialStatus: '',
	fulfillmentStatus: undefined,
	customerId: '',
	billingAddressId: Number,
	shippingAddressId: Number,
	status: 0,
	orderItems: [],
	shippingAddress: { address1: '' },
	billingAddress: {},
	customer: {},
	image_src: '',
})

/** 子表的表单 */
const subTabsName = ref('item')
const itemFormRef = ref()

/** 打开弹窗 */
const open = async (type: string, info: any) => {
	dialogVisible.value = true
	dialogTitle.value = t('action.' + type)
	formType.value = type
	if (info) {
		formData.value = info
	}
}

defineExpose({ open }) // 提供 open 方法，用于打开弹窗

const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const checkListHandle = async() => {
	dialogVisible.value = false
	emit('success', formData.value.id)
}
</script>
