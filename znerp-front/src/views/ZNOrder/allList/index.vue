<template>
	<ContentWrap>
		<!-- 搜索工作栏 -->
		<el-form class="-mb-15px" :model="queryParams" ref="queryFormRef" :inline="true" label-width="88px">
			<el-form-item label="订单号" prop="orderNumber">
				<el-input
v-model.number="queryParams.orderNumber" placeholder="请输入订单号" clearable @keyup.enter="handleQuery"
					class="!w-240px" />
			</el-form-item>
			<el-form-item label="买家邮箱">
				<el-input
v-model="queryParams.email" placeholder="请输入买家邮箱" clearable @keyup.enter="handleQuery"
					class="!w-240px" />
			</el-form-item>
			<el-form-item label="订单时间" prop="orderTime">
				<el-date-picker
v-model="queryParams.orderTime" value-format="YYYY-MM-DD HH:mm:ss" type="daterange"
					start-placeholder="开始日期" end-placeholder="结束日期"
					:default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]" class="!w-240px" />
			</el-form-item>
			<el-form-item label="店铺" prop="shopName">
				<el-select v-model="queryParams.shopName" placeholder="请选择店铺" clearable class="!w-240px">
					<el-option
v-for="dict in shopList" :key="dict.value" :label="dict.label"
						:value="dict.value" />
				</el-select>
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-select multiple v-model="queryParams.status" placeholder="请选择状态" clearable class="!w-240px">
					<el-option
v-for="dict in getIntDictOptions(DICT_TYPE.ZN_ORDER_STATUS)" :key="dict.value" :label="dict.label"
						:value="dict.value" />
				</el-select>
			</el-form-item>
			<el-form-item>
				<el-button @click="handleQuery">
					<Icon icon="ep:search" class="mr-5px" /> 搜索
				</el-button>
				<el-button @click="resetQuery">
					<Icon icon="ep:refresh" class="mr-5px" /> 重置
				</el-button>
				<!-- <el-button
type="success" plain @click="handleExport" :loading="exportLoading"
					v-hasPermi="['erp:purchase-order:export']">
					<Icon icon="ep:download" class="mr-5px" /> 导出
				</el-button> -->
			</el-form-item>
		</el-form>
	</ContentWrap>

	<!-- 列表 -->
	<ContentWrap>
		<el-table :data="list" v-loading="loading">
			<el-table-column>
				<template #header>
					<el-table :data="headerData" :show-header="false">
						<el-table-column prop="info" width="500" />
						<el-table-column prop="price" width="200" />
						<el-table-column prop="num" width="100" />
						<el-table-column prop="requiresShipping" />
						<el-table-column prop="options" align="right"  width="200"/>
					</el-table>
				</template>

				<template #default="scope">
					<div class="flex bg-blue-50 py-1 px-3 dark:bg-blue-900">
						<dict-tag :type="DICT_TYPE.ZN_ORDER_STATUS" :value="scope.row.status" />
						<div class="flex-1 text-blue-500 ml-4 dark:text-blue-50">订单号：#{{ scope.row.orderNumber }}</div>

						<div class="flex-1 text-blue-500 ml-4 dark:text-blue-50">创建时间：{{ formatPast(scope.row.createdAt) }}</div>

						<div class="pl-4">
							<el-button v-hasPermi="['znerp:alllist:query']" link @click="openForm('detail', scope.row)">
								查看详情
							</el-button>
							<template v-if="scope.row.status === 0">
								<el-divider direction="vertical" />
								<el-button
v-if="scope.row.status === 0" link @click="openCheckForm(scope.row)"
									v-hasPermi="['znerp:alllist:check']">
									审核
								</el-button>
							</template>
						</div>
					</div>

					<el-table :data="scope.row.orderItems" v-loading="loading" :show-header="false">
						<el-table-column width="500">
							<template #default="scopeChild">
								<div class="flex gap-5">
									<el-image
style="width: 64px; height: 64px"
										:src="scopeChild.row.src ? scopeChild.row.src : noPic" fit="cover" />
									<div class="flex-1">
										<h4>{{ scopeChild.row.title }}</h4>
										<template v-if="JSON.parse(scopeChild.row.properties).length > 0">
											<p v-for="(propItem, propIndex) in JSON.parse(scopeChild.row.properties)" :key="'prop_' + propIndex">
									<template v-if="!propItem.value.includes('https://')">
										{{ propItem.name }}: {{ propItem.value }}
									</template>
								</p>
										</template>
										<template v-else>
											<span class="bg-gray-100 text-gray-600 px-2  dark:bg-blue-100">Variants: {{ scopeChild.row.variantTitle ?
												scopeChild.row.variantTitle : '暂无' }}</span>
										</template>
										<p class="text-gray-400">SKU：{{ scopeChild.row.zhProductSku ? scopeChild.row.zhProductSku : '暂无' }}
										</p>
									</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column width="200">
							<template #default="scopeChild">{{ scopeChild.row.price }}</template>
						</el-table-column>
						<el-table-column width="100">
							<template #default="scopeChild">{{ scopeChild.row.quantity }}</template>
						</el-table-column>
						<el-table-column>
							<template #default="scopeChild">{{ scopeChild.row.requiresShipping == 1 ? '运输' : '无需发货' }}</template>
						</el-table-column>

						<el-table-column v-if="scope.row.type == 2" width="200">
							<template #default="scopeChild">
								<div class="flex flex-row-reverse">
									<!-- <el-button
												:type="scopeChild.row.draStatus == 1 ? 'success' : scopeChild.row.draStatus == 2 ? 'danger' : 'primary'"
												@click="checkHandle('child', scopeChild.row)" link>
												审核{{ scopeChild.row.draStatus == 1 ? '通过' : scopeChild.row.draStatus == 2 ? '不通过' : '' }}
											</el-button> -->
									
									审核状态：{{ scopeChild.row.orderStatus  }}
								</div>
							</template>
						</el-table-column>

						<!-- <el-table-column v-if="scope.row.type == 2" width="200">
							<template #default="scopeChild">
								<div class="flex flex-row-reverse">{{ scopeChild.row.draStatus }}</div>
							</template>
						</el-table-column> -->
					</el-table>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<Pagination
:total="total" v-model:page="queryParams.pageNo" v-model:limit="queryParams.pageSize"
			@pagination="getList" />
	</ContentWrap>

	<!-- 表单弹窗：查看详情/审核 -->
	<PurchaseOrderForm ref="formRef" />

	<CheckList ref="checkRef" @success="getList" />
</template>

<script setup lang="ts">
import { formatPast } from '@/utils/formatTime'
import { getIntDictOptions, DICT_TYPE } from '@/utils/dict'
import { PurchaseOrderVO } from '@/api/erp/purchase/order'

import PurchaseOrderForm from './PurchaseOrderForm.vue'
import CheckList from './components/CheckList.vue'

import { ZnerpApi } from '@/api/znerp'
import noPic from "@/assets/imgs/noPic.png"

/** ERP 销售订单列表 */
defineOptions({ name: 'ErpPurchaseOrder' })

const loading = ref(true) // 列表的加载中
const list = ref<PurchaseOrderVO[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
	pageNo: 1,
	pageSize: 10,
	orderNumber: undefined,
	status: undefined,
	orderTime: '',
	email: '',
	shopName: undefined,
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中
const shopList = ref<any[]>([]) // 店铺列表

const headerData = ref([
	{
		info: '商品信息',
		price: '单价（USD）',
		num: '数量',
		// orderId: '订单号',
		requiresShipping: '配送方式',
		options: '',
	}
])

/** 查询列表 */
const getList = async () => {
	loading.value = true

	let params = {
		pageNo: queryParams.pageNo,
		pageSize: queryParams.pageSize,
		orderNumber: queryParams.orderNumber,
		status: queryParams.status,
		email: queryParams.email,
		shopName: queryParams.shopName,
		startDate: queryParams.orderTime && queryParams.orderTime.length === 2 ? queryParams.orderTime[0] : '',
		endDate: queryParams.orderTime && queryParams.orderTime.length === 2 ? queryParams.orderTime[1] : '',
	}

	try {
		const data = await ZnerpApi.getOrderPage(params)
		if (data) {
			list.value = data.list ? data.list : []
			total.value = data.total
		} else {
			list.value = []
			total.value = 0
		}
	} finally {
		loading.value = false
	}
}

/** 搜索按钮操作 */
const handleQuery = () => {
	queryParams.pageNo = 1
	getList()
}

/** 重置按钮操作 */
const resetQuery = () => {
	queryFormRef.value.resetFields()
	handleQuery()
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, info?: any) => {
	formRef.value.open(type, info)
}

/** 审批操作 */
// const handleUpdateStatus = async (id: number) => {
// 	try {
// 		// 审批的二次确认
// 		await message.confirm(`确定审核该订单吗？`)
// 		// 发起审批
// 		// await ZnerpApi.updateOrderStatus(id, 1, type)

// 		// message.success(`审核成功！`)

// 		console.log('id', id);

// 		// 刷新列表
// 		await getList()
// 	} catch { }
// }
const checkRef = ref()
const openCheckForm = (info?: object) => {
	checkRef.value.open(info)
}

const getShopList = async () => {
	let params = {
		pageNo: 1,
		pageSize: 10,
	}
	const data = await ZnerpApi.shopPage(params)
	shopList.value = data.list?.map(item => ({ label: item.name, value: item.enName }))
}


/** 初始化 **/
onMounted(async () => {
	await getList()
	await getShopList()
})
</script>
