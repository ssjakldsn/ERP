<template>
	<Dialog :title="dialogTitle" v-model="dialogVisible" width="1080">
		<el-row :gutter="20">
			<el-col :span="8">
				<el-form-item label="订单单号">
					#{{ formData.orderNumber }}
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

		<!-- 订单状态 -->
		<div class="pb-6">
			<el-steps :active="activeStep" simple>
				<el-step :title="formData.status === 0 ? '待审核' : '已审核'">
					<template #icon>
						<Icon icon="tdesign:fact-check" />
					</template>
				</el-step>
				<el-step
					:title="formData.status === 11 || formData.status === 21 || formData.status === 22 || formData.status === 32 || formData.status === 31 ? '已画图' : '待画图'">
					<template #icon>
						<Icon icon="fluent:draw-image-24-regular" />
					</template>
				</el-step>
				<el-step :title="formData.status === 21 || formData.status === 32 || formData.status === 31 ? '已制版' : '待制版'">
					<template #icon>
						<Icon icon="fluent:binder-triangle-16-regular" />
					</template>
				</el-step>
				<el-step :title="formData.status === 31 ? '已生产' : '待生产'">
					<template #icon>
						<Icon icon="fluent:box-checkmark-20-regular" />
					</template>
				</el-step>
			</el-steps>
		</div>

		<ContentWrap>
			<el-tabs v-model="subTabsName" class="-mt-15px -mb-10px">
				<el-tab-pane label="商品清单" name="goodsInfo">
					<PurchaseOrderItemForm ref="itemFormRef" :items="formData.orderItems" :type="formData.type" />
				</el-tab-pane>
				<el-tab-pane label="画图信息" name="drawInfo" v-if="formData.orderItems[0]?.draftsmans[0]?.imgUrl && formData.status !== 0">
					<template v-if="formData.type == 1">
						<el-row :gutter="20">
							<el-col :span="8">
								<el-form-item label="画图员">
									{{ formData.orderItems[0].draftsmans[0].nickName }}
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="20">
							<el-col :lg="8" :sm="12" :xs="24" v-for="(item, index) in imgList" :key="'img' + index">
								<el-image :src="item" :preview-src-list="imgList" preview-teleported fit="cover" />
							</el-col>
						</el-row>
					</template>
					<template v-if="formData.type == 2 && formData.orderItems.length > 0">
						<div v-for="(drawItem, itemIndex) in formData.orderItems" :key="'draftsmans_' + itemIndex">
							<template v-if="drawItem.draftsmans?.[0]?.imgUrl">
								<el-row :gutter="20">
									<el-col :span="8">
										<el-form-item label="画图员">
											{{ drawItem.draftsmans?.[0]?.nickName }}
										</el-form-item>
									</el-col>
									<el-col :span="16">
										<el-form-item label="产品名称">
											{{ drawItem?.zhProductName }}
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :lg="8" :sm="12" :xs="24"
										v-for="(imgItem, index) in getArrayImgs(drawItem.draftsmans?.[0]?.imgUrl)" :key="'img' + index">
										<el-image :src="imgItem" :preview-src-list="getArrayImgs(drawItem.draftsmans?.[0]?.imgUrl)"
											preview-teleported fit="cover" />
									</el-col>
								</el-row>
								<el-divider />
							</template>
						</div>
					</template>
				</el-tab-pane>
				<el-tab-pane
					v-if="formData.status == 22 || formData.status == 21 || formData.status == 31 || formData.status == 32"
					label="制版信息" name="plateInfo">
					<template v-if="formData.type == 1">
						<el-row :gutter="20">
							<el-col :span="8">
								<el-form-item label="制版员">
									{{ formData.orderItems[0].printers[0].nickName }}
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="20">
							<el-col :lg="8" :sm="12" :xs="24" v-for="(item, index) in imgListPrinters" :key="'printerImg' + index">
								<el-image :src="item" :preview-src-list="imgListPrinters" preview-teleported fit="cover" />
							</el-col>
						</el-row>
					</template>
					<template v-if="formData.type == 2 && formData.orderItems.length > 0">
						<div v-for="(drawItem, itemIndex) in formData.orderItems" :key="'printers_' + itemIndex">
							<template v-if="drawItem.printers?.[0]?.imgUrl">
								<el-row :gutter="20">
									<el-col :span="8">
										<el-form-item label="制版员">
											{{ drawItem.printers?.[0]?.nickName }}
										</el-form-item>
									</el-col>
									<el-col :span="16">
										<el-form-item label="产品名称">
											{{ drawItem?.zhProductName }}
										</el-form-item>
									</el-col>
								</el-row>
								<el-row :gutter="20">
									<el-col :lg="8" :sm="12" :xs="24"
										v-for="(imgItem, index) in getArrayImgs(drawItem.printers?.[0]?.imgUrl)" :key="'img' + index">
										<el-image :src="imgItem" :preview-src-list="getArrayImgs(drawItem.printers?.[0]?.imgUrl)"
											preview-teleported fit="cover" />
									</el-col>
								</el-row>
								<el-divider />
							</template>
						</div>
					</template>
				</el-tab-pane>
				<el-tab-pane v-if="formData.status == 31 || formData.status == 32" label="生产信息" name="productionInfo">
					<template v-if="formData.type == 1">
						<el-row :gutter="20">
							<el-col :span="8">
								<el-form-item label="生产员">
									{{ formData.orderItems[0].producers[0].nickName }}
								</el-form-item>
							</el-col>
						</el-row>
						<!-- <el-row :gutter="20">
								<el-col :lg="8" :sm="12" :xs="24" v-for="(item, index) in imgList" :key="'img' + index">
									<el-image :src="item" :preview-src-list="imgList" preview-teleported fit="cover" />
								</el-col>
							</el-row> -->
					</template>
					<template v-if="formData.type == 2 && formData.orderItems.length > 0">
						<div v-for="(drawItem, itemIndex) in formData.orderItems" :key="'producers_' + itemIndex">

							<el-row :gutter="20">
								<el-col :span="8">
									<el-form-item label="生产员">
										{{ drawItem.producers?.[0]?.nickName }}
									</el-form-item>
								</el-col>
								<el-col :span="16">
									<el-form-item label="产品名称">
										{{ drawItem?.zhProductName }}
									</el-form-item>
								</el-col>
							</el-row>
							<!-- <el-row :gutter="20">
									<el-col :lg="8" :sm="12" :xs="24" v-for="(imgItem, index) in getArrayImgs(drawItem.printers?.[0]?.imgUrl)" :key="'img' + index">
										<el-image :src="imgItem" :preview-src-list="getArrayImgs(drawItem.printers?.[0]?.imgUrl)" preview-teleported fit="cover" />
									</el-col>
								</el-row>	 -->
							<el-divider />

						</div>
					</template>
					<!-- <el-col :span="8">
								<el-form-item label="开工时间">
									{{ formatPast(formData.createdAt) }}
								</el-form-item>
							</el-col>
							<el-col :span="8">
								<el-form-item label="完工时间">
									{{ formatPast(formData.createdAt) }}
								</el-form-item>
							</el-col>
						</el-row>
						<el-row :gutter="20">
							<el-col :lg="8" :sm="12" :xs="24" v-for="(item, index) in imgList" :key="'img' + index">
								<el-image :src="item" :preview-src-list="imgList" preview-teleported fit="cover" />
							</el-col> -->
				</el-tab-pane>
				<el-tab-pane label="物流信息" name="shippingInfo">
					<el-descriptions title="收货信息">
						<el-descriptions-item label="收货人">{{ formData.shippingAddress.name }}</el-descriptions-item>
						<el-descriptions-item label="电  话">{{ formData.shippingAddress.phone }}</el-descriptions-item>
						<el-descriptions-item label="国家/地区">{{ formData.shippingAddress.country }}</el-descriptions-item>
						<el-descriptions-item label="省 / 州">
							{{ formData.shippingAddress.province }}
						</el-descriptions-item>
						<el-descriptions-item label="城市">
							{{ formData.shippingAddress.city }}
						</el-descriptions-item>
						<el-descriptions-item label="邮  编">
							{{ formData.shippingAddress.zip }}
						</el-descriptions-item>
						<el-descriptions-item label="地址">
							{{ formData.shippingAddress.address1 }}
						</el-descriptions-item>
					</el-descriptions>

					<div class="flex mb-4 mt-6 items-center">
						<p class="text-base font-bold flex-1">发件人信息</p>
						<div class="flex gap-4">
							<el-select v-model="sender" clearable filterable placeholder="请选择地址" class="!w-240px">
								<el-option v-for="item in senderList" :key="item.id" :value="item.id" :label="item.senderState + item.senderCity + item.senderStreet">
									{{ item.senderState }}{{ item.senderCity }}{{ item.senderStreet }}
								</el-option>
							</el-select>
							<el-button type="primary" plain @click="$router.push('logistics-setting')">
								<Icon icon="ep:plus" /> 新增地址模版
							</el-button>
						</div>
					</div>
					
					<el-form ref="senderFormRef" :inline="true" v-loading="senderFormLoading" :model="senderFormData"
						:rules="senderormRules" label-width="110px">
						<el-form-item label="姓名" prop="senderFirstName">
							<el-input style="width: 70px; margin-right: 10px" v-model="senderFormData.senderFirstName" placeholder="姓" />
							<el-input style="width: 100px" v-model="senderFormData.senderLastName" placeholder="名" />
						</el-form-item>
						<el-form-item label="电话">
							<el-input  style="width: 180px"  v-model="senderFormData.senderPhone" placeholder="请输入电话" />
						</el-form-item> 
						<el-form-item label="公司名称">
							<el-input  style="width: 180px"  v-model="senderFormData.senderCompany" placeholder="请输入公司名称" />
						</el-form-item> 
						<el-form-item label="邮编">
							<el-input style="width: 180px" v-model="senderFormData.senderZip" placeholder="请输入英文名称" />
						</el-form-item>
						<!-- <el-form-item label="国家编码" prop="zhName">
							<country-select className="py-1.5 px-1 border-gray-300 w-180px" v-model="clearancelFormData.country" :country="clearancelFormData.country" topCountry="CN" />
						</el-form-item> -->
						<el-form-item label="省/州">
							<el-input style="width: 180px"  v-model="senderFormData.senderState" placeholder="请输入省/州" />
						</el-form-item>
						<el-form-item label="所在城市">
							<el-input style="width: 180px"  v-model="senderFormData.senderCity" placeholder="请输入城市" />
						</el-form-item>
						<el-form-item label="详细地址">
							<el-input style="width: 500px" v-model="senderFormData.senderStreet" placeholder="请输入详细地址" />
						</el-form-item>
					</el-form>
					<el-divider />
					<template v-if="shippingList.length > 0">
						<div class="flex mb-2 mt-6 items-center">
							<p class="text-base font-bold flex-1">物流渠道</p>
							<div class="flex gap-4">
								<el-select v-model="shipping" clearable filterable placeholder="请选择物流渠道" class="!w-240px">
									<el-option v-for="item in shippingList" :key="item.id" :label="item.name" :value="item.id" />
								</el-select>
							</div>
						</div>

						<!-- <div class="mb-2 flex gap-4">
							<el-select v-model="shipping" clearable filterable placeholder="请选择物流方式" class="!w-240px">
								<el-option v-for="item in shippingList" :key="item.id" :label="item.name" :value="item.id" />
							</el-select>
							<el-button type="primary" :disabled="shippingLoading" @click="updateShopping">
								确定
							</el-button>
						</div> -->
					</template>
					<el-divider />

					<div class="flex mb-4 mt-6 items-center">
						<p class="text-base font-bold flex-1">报关信息</p>
						<div class="flex gap-4">
							<el-select v-model="clearance" clearable filterable placeholder="请选择报关模板" class="!w-240px">
							<el-option v-for="item in clearanceList" :key="item.id" :label="item.name" :value="item.id" />
						</el-select>
						<el-button type="primary" plain @click="$router.push('clearance-list')">
							<Icon icon="ep:plus" /> 新增模版
						</el-button>
						</div>
					</div>
					<el-form ref="formRef" :inline="true" v-loading="clearancelFormLoading" :model="clearancelFormData"
						:rules="clearancelFormRules" label-width="110px">
						<el-form-item label="自定义名称" prop="name">
							<el-input v-model="clearancelFormData.name" placeholder="请输入自定义名称" />
						</el-form-item>
						<el-form-item label="中文名称" prop="zhName">
							<el-input v-model="clearancelFormData.zhName" placeholder="请输入中文名称" />
						</el-form-item>
						<el-form-item label="英文名称" prop="enName">
							<el-input v-model="clearancelFormData.enName" placeholder="请输入英文名称" />
						</el-form-item>
						<el-form-item label="材质">
							<el-input v-model="clearancelFormData.material" placeholder="请输入材质" />
						</el-form-item>
						<el-form-item label="用途">
							<el-input v-model="clearancelFormData.used" placeholder="请输入用途" />
						</el-form-item>
						<el-form-item label="海关编码">
							<el-input v-model="clearancelFormData.customsCode" placeholder="请输入海关编码" />
						</el-form-item>
						<el-form-item label="申报金额" prop="totalPrice">
							<el-input v-model="clearancelFormData.taxAmount" placeholder="请输入申报金额">
								<template #append>USD</template>
							</el-input>
						</el-form-item>
						<el-form-item label="申报重量" prop="weight">
							<el-input v-model="clearancelFormData.grossWeight" placeholder="请输入申报重量">
								<template #append>kg</template>
							</el-input>
						</el-form-item>
						<el-form-item label="报关属性">
							<el-checkbox-group v-model="clearancelFormData.attributes">
								<el-checkbox label="含电" value="1" />
								<el-checkbox label="含非液体化妆品" value="2" />
								<el-checkbox label="特货 (敏感货) " value="3" />
							</el-checkbox-group>
						</el-form-item>
					</el-form>

					<div class="flex mb-2 mt-6 items-center gap-4">
						<p class="text-base font-bold">包裹数量</p>
						<el-input  style="width: 180px"  v-model.number="packageCount" placeholder="请输入包裹数量">
							<template #append>件</template>
						</el-input>
					</div>
				</el-tab-pane>
			</el-tabs>
		</ContentWrap>
		<template #footer>
			<!-- <el-button type="primary" @click="checkListHandle" v-if="formData.status === 0">
				审核
			</el-button> -->
			<el-button type="primary" v-if="subTabsName === 'shippingInfo'" @click="submitForm">
				确定
			</el-button>
			<el-button @click="dialogVisible = false">取 消</el-button>
		</template>
	</Dialog>
</template>
<script setup lang="ts">
const message = useMessage() // 消息弹窗
import { ZnerpApi } from '@/api/znerp'
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
	orderItems: [{ draftsmans: [{ nickName: '', imgUrl: '' }], printers: [{ nickName: '', imgUrl: '' }], producers: [{ nickName: '', imgUrl: '' }], zhProductName: '', }],
	shippingAddress: {
		name: '', // 收货人
		phone: '', // 电  话
		country: '', // 国家/地区
		province: '', //省 / 州
		city: '', // 城市
		zip: '', // 邮  编
		company: '', //公  司
		address1: '',
		address2: '',
	},
	billingAddress: {},
	customer: {},
	image_src: '',
	type: undefined, // 订单状态：一单一件，一单多件

	// 报关信息
	weight: Number, //申报重量
	totalPrice: Number,//申报金额

})

const activeStep = ref(0)
const packageCount = ref(1); // 包裹数量
const imgList = ref<string[]>([]);
const imgListPrinters = ref<string[]>([]);

interface selOpt {
	id: number;
	name: string;
}

interface senderOpt {
	id: number;
	senderFirstName: string;
	senderState: string;
	senderCity: string;
	senderStreet: string
}

const clearancelFormData = ref({
	name: '', // 自定义名称
	zhName: '', // 中文名称
	enName: '', // 英文名称
	taxAmount: '', // 申报金额
	grossWeight: '', // 申报重量
	material: '', // 材质
	used: '', // 用途
	customsCode: '', // 海关编码
	attributes: [], // 报关属性
})

const clearancelFormLoading = ref(false)
const clearancelFormRules = reactive({
	enName: [{ required: true, message: '英文名称不能为空', trigger: 'blur' }],
})

const senderFormData = ref({
	// 寄件人信息
  senderCountryCode: 'CN',
	senderFirstName: '', // 发件人姓
	senderLastName: '', // 发件人名
	senderPhone: '', // 发件人电话
	senderState: '', // 发件人省/州
	senderCity: '', // 发件人所在城市
	senderStreet: '', // 发件人详细地址 FBA 必填
	senderCompany: '', //发件人公司名称
	senderZip: '', // 发件人邮编
	// status: true, // 状态 0=禁用；1=启用
})

const senderFormLoading = ref(false)
const senderormRules = reactive({
	senderFirstName: [{ required: true, message: '发件人姓不能为空', trigger: 'blur' }],
})

const shipping = ref(undefined)
const shippingList = ref<selOpt[]>([])
const shippingLoading = ref(false) // 物流的加载中

const clearance = ref(undefined)
const clearanceList = ref<any>([])

const sender = ref(undefined)
const senderList = ref<senderOpt[]>([])

const getArrayImgs = (imgs: any) => {
	let list = imgs.length > 0 ? imgs.split(',') : []
	return list
}

/** 子表的表单 */
const subTabsName = ref('goodsInfo')
const itemFormRef = ref()

/** 打开弹窗 */
const open = async (type: string, info: any, tab: any) => {
	
	dialogVisible.value = true
	dialogTitle.value = t('action.' + type)
	formType.value = type

	if(tab === 'wl') {
		subTabsName.value = 'shippingInfo'
	} else  {
		subTabsName.value = 'goodsInfo'
	}

	let params = {
		pageNo: 1,
		pageSize: 10,
	}
	// 获取报关信息列表
	const clearanceData = await ZnerpApi.logisticsCustomsPage(params)
	clearanceList.value = clearanceData.list

	// 获取物流方式列表
	const data = await ZnerpApi.logisticsPage(params)
	shippingList.value = data.list

	// 获取发件人列表
	const sendData = await ZnerpApi.senderAddrPage(params)
	senderList.value = sendData.list

	if (info) {
		formData.value = info
		if (formData.value.status === 11 || formData.value.status === 12) { // 画图
			activeStep.value = 1
		} else if (formData.value.status === 21 || formData.value.status === 22) { // 制版
			activeStep.value = 2
		}
		else if (formData.value.status === 31 || formData.value.status === 32) { // 生产
			activeStep.value = 3
		}
		else {
			activeStep.value = formData.value.status
		}

		// 物流方式
		shipping.value = info.channelId

		// 发件人信息
		senderFormData.value = {
			// 寄件人信息
			senderCountryCode: info.senderCountryCode,
			senderFirstName: info.senderFirstName, // 发件人姓
			senderLastName: info.senderLastName, // 发件人名
			senderPhone: info.senderPhone, // 发件人电话
			senderState: info.senderState, // 发件人省/州
			senderCity: info.senderCity, // 发件人所在城市
			senderStreet: info.senderStreet, // 发件人详细地址 FBA 必填
			senderCompany: info.senderCompany, //发件人公司名称
			senderZip: info.senderZip, // 发件人邮编
		}

		//报关信息
		clearancelFormData.value = {
			name: '', // 自定义名称
			zhName: info.zhName, // 中文名称
			enName: info.enName, // 英文名称
			taxAmount: info.taxAmount, // 申报金额
			grossWeight: info.grossWeight, // 申报重量
			material: info.material, // 材质
			used: info.used, // 用途
			customsCode: info.customsCode ? info.customsCode : '', // 海关编码
			attributes: info.attributes ? info.attributes.split(',') : '', // 报关属性
		}

		// 画图列表
		if (formData.value.orderItems[0].draftsmans.length > 0 && formData.value.orderItems[0].draftsmans[0].imgUrl && formData.value.type == 1) {
			imgList.value = formData.value.orderItems[0].draftsmans[0].imgUrl.split(',')
		}
		// 制版列表
		if (formData.value.orderItems[0].printers.length > 0 && formData.value.orderItems[0].printers[0].imgUrl && formData.value.type == 1) {
			imgListPrinters.value = formData.value.orderItems[0].printers[0].imgUrl.split(',')
		}

		// if(formData.value.type == 2 && formData.value.orderItems[0] > 1) {
		// 	let orderNew = []
		// 	let orders = formData.value.orderItems

		// }
	}
}

defineExpose({ open }) // 提供 open 方法，用于打开弹窗

// 定义 success 事件，用于操作成功后的回调

// const checkListHandle = async () => {
// 	dialogVisible.value = false
// 	emit('success', formData.value.id)
// }

// 更新物流状态
const updateShopping = async () => {
	let paramsShipping: { id?: string; channelId?: any } = {};

	shippingLoading.value = true
	if (formData.value.id) {
		paramsShipping = {
			id: formData.value.id,
			channelId: shipping.value
		}
	}
	if (paramsShipping.id) {
		try {
			await ZnerpApi.updateOrderStatus(paramsShipping)
			shippingLoading.value = false
		} catch { }
	}
}

watch(
  () => [clearance.value, sender.value],
  async () => {
		if(clearance.value) {
			clearanceList.value.forEach((item:any) => {
				if(item.id === clearance.value) {
					clearancelFormData.value = {
						...item,
						attributes: item.attributes.split(','),
					}
				}
			})
		}
		if(sender.value) {
			senderList.value.forEach((item:any) => {
				if(item.id === sender.value) {
					senderFormData.value = {
						...item,
					}
				}
			})
		}
  },
  {
    immediate: true,
    deep: true
  }
)

/** 提交表单 */
const formRef = ref()
const senderFormRef = ref()
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
	// 校验表单
	if (!formRef) return
	if (!senderFormRef) return
	const valid = await formRef.value.validate()
	const senderValid = await senderFormRef.value.validate()
	if (!valid) return
	if (!senderValid) return

	if(!shipping.value) {
		message.warning(`请选择物流渠道！`)
		return
	}

	if(packageCount.value <= 0) {
		message.warning(`包裹数量必须大于0！`)
		return
	}
	// 提交请求
	clearancelFormLoading.value = true
	try {
		let params = {
			channelId: shipping.value,
			...clearancelFormData.value,
			...senderFormData.value,
			id: formData.value.id,
			attributes: clearancelFormData.value.attributes.join(','),
			packageCount: packageCount.value,
		}

    await ZnerpApi.logisticsOrderCreate(params)
		message.success('运单号申请成功！')
		
		dialogVisible.value = false
		// 发送操作成功的事件
		emit('success')
	} finally {
		clearancelFormLoading.value = false
	}
}

</script>
