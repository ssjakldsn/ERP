<template>
	<ContentWrap>
		<!-- 搜索工作栏 -->
		<el-form class="-mb-15px" :model="queryParams" ref="queryFormRef" :inline="true" label-width="88px">
			<el-form-item label="订单单号" prop="orderNumber">
				<el-input
v-model="queryParams.orderNumber" placeholder="请输入订单单号" clearable @keyup.enter="handleQuery"
					class="!w-240px" />
			</el-form-item>
			<!-- <el-form-item label="产品SKU" prop="sku">
				<el-input
v-model="queryParams.sku" placeholder="请输入产品SKU" clearable @keyup.enter="handleQuery"
					class="!w-240px" />
			</el-form-item>
			<el-form-item label="订单时间" prop="orderTime">
				<el-date-picker
v-model="queryParams.orderTime" value-format="YYYY-MM-DD HH:mm:ss" type="daterange"
					start-placeholder="开始日期" end-placeholder="结束日期"
					:default-time="[new Date('1 00:00:00'), new Date('1 23:59:59')]" class="!w-240px" />
			</el-form-item> -->
			<el-form-item label="状态" prop="status">
				<el-select v-model="queryParams.status" placeholder="请选择状态" clearable class="!w-240px">
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
          type="primary"
          plain
          @click="openForm('create')"
          v-hasPermi="['erp:purchase-order:create']"
        >
          <Icon icon="ep:plus" class="mr-5px" /> 新增
        </el-button> -->
				<el-button
type="success" plain @click="handleExport" :loading="exportLoading"
					v-hasPermi="['erp:purchase-order:export']">
					<Icon icon="ep:download" class="mr-5px" /> 导出
				</el-button>
			</el-form-item>
		</el-form>
	</ContentWrap>

	<!-- 列表 -->
	<ContentWrap>
		<el-table :data="list" v-loading="loading" @selection-change="handleSelectionChange">
			<!-- <el-table-column width="30" label="选择" type="selection" /> -->
			<el-table-column>
				<template #header>
					<ul class="flex gap-10 list-none">
						<li class="w-39%">商品信息</li>
						<li class="w-11%">单价（USD）</li>
						<li class="w-10%">数量</li>
						<li class="w-15%">订单号</li>
						<li>时间</li>
					</ul>
				</template>

				<template #default="scope">
					<div class="flex bg-blue-100 py-1 px-3">
						<dict-tag :type="DICT_TYPE.ZN_ORDER_STATUS" :value="scope.row.status" />
						<div class="flex-1 text-blue-500 ml-4">{{ scope.row.id }}</div>

						<div class="pl-4">
							<el-button link @click="openForm('detail', scope.row)" v-hasPermi="['erp:purchase-order:query']">
								查看详情
							</el-button>

							<el-button
v-if="scope.row.status === 0" link @click="handleUpdateStatus(scope.row.id)"
								v-hasPermi="['erp:purchase-order:query']">
								审核
							</el-button>
						</div>
					</div>

					<el-table :data="scope.row.orderItems" v-loading="loading" :show-header="false">
						<el-table-column min-width="200">
							<template #default="scopeChild">
								<div class="flex gap-5">
									<el-image
style="width: 64px; height: 64px"
										:src="scopeChild.row.uploadImg ? scopeChild.row.uploadImg : noPic" fit="cover" />
									<div class="flex-1">
										<h4>{{ scopeChild.row.title }}</h4>
										<p class="text-gray-400">SKU：{{ scopeChild.row.sku ? scopeChild.row.sku : '暂无' }}</p>
									</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column min-width="70">
							<template #default="scopeChild">{{ scopeChild.row.price }}</template>
						</el-table-column>
						<el-table-column min-width="50">
							<template #default="scopeChild">{{ scopeChild.row.quantity }}</template>
						</el-table-column>
						<el-table-column prop="orderId" />
						<el-table-column :formatter="dateFormatter" prop="createTime" />
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
	<PurchaseOrderForm ref="formRef" @success="handleUpdateStatus" />
</template>

<script setup lang="ts">
import type { TableColumnCtx } from 'element-plus'
import { getIntDictOptions, DICT_TYPE } from '@/utils/dict'
import { dateFormatter } from '@/utils/formatTime'
import download from '@/utils/download'
import { PurchaseOrderApi, PurchaseOrderVO } from '@/api/erp/purchase/order'
import PurchaseOrderForm from './PurchaseOrderForm.vue'
import { ProductApi, ProductVO } from '@/api/erp/product/product'
import { UserVO } from '@/api/system/user'
import * as UserApi from '@/api/system/user'
import { SupplierApi, SupplierVO } from '@/api/erp/purchase/supplier'
import { ZnerpApi } from '@/api/znerp'

import noPic from "@/assets/imgs/noPic.png"

/** ERP 销售订单列表 */
defineOptions({ name: 'ErpPurchaseOrder' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const list = ref<PurchaseOrderVO[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryParams = reactive({
	pageNo: 1,
	pageSize: 10,
	orderNumber: undefined,
	status: undefined,
})
const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中
const productList = ref<ProductVO[]>([]) // 产品列表
const supplierList = ref<SupplierVO[]>([]) // 供应商列表
const userList = ref<UserVO[]>([]) // 用户列表

/** 查询列表 */
const getList = async () => {
	loading.value = true
	try {
		const data = await ZnerpApi.getOrderPage(queryParams)
		list.value = data.list
		total.value = data.total

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
const openForm = (type: string, info?: object) => {
	formRef.value.open(type, info)
}

/** 审批操作 */
const handleUpdateStatus = async (id: number) => {
	try {
		// 审批的二次确认
		await message.confirm(`确定审核该订单吗？`)
		// 发起审批
		await ZnerpApi.updateOrderStatus(id, 1)
		message.success(`审核成功！`)
		// 刷新列表
		await getList()
	} catch { }
}

/** 导出按钮操作 */
const handleExport = async () => {
	try {
		// 导出的二次确认
		await message.exportConfirm()
		// 发起导出
		exportLoading.value = true
		const data = await PurchaseOrderApi.exportPurchaseOrder(queryParams)
		download.excel(data, '销售订单.xls')
	} catch {
	} finally {
		exportLoading.value = false
	}
}


/** 选中操作 */
const selectionList = ref<PurchaseOrderVO[]>([])
const handleSelectionChange = (rows: PurchaseOrderVO[]) => {
	selectionList.value = rows
}

/** 初始化 **/
onMounted(async () => {
	await getList()
})
</script>
