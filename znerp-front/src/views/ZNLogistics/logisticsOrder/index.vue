<template>
	<ContentWrap>
		<!-- 搜索工作栏 -->
		<el-form ref="queryFormRef" :inline="true" :model="queryParams" class="-mb-15px" label-width="88px">
			<el-form-item label="订单号" prop="orderNumber">
				<el-input
v-model="queryParams.orderNumber" placeholder="请输入订单号" clearable @keyup.enter="handleQuery"
					class="!w-240px" />
			</el-form-item>
			<el-form-item label="店铺" prop="shopName">
				<el-select v-model="queryParams.shopName" placeholder="请选择店铺" clearable class="!w-240px">
					<el-option
v-for="dict in shopList" :key="dict.value" :label="dict.label"
						:value="dict.value" />
				</el-select>
			</el-form-item>			
			<el-form-item>
				<el-button @click="handleQuery">
					<Icon class="mr-5px" icon="ep:search" />
					搜索
				</el-button>
				<el-button @click="resetQuery">
					<Icon class="mr-5px" icon="ep:refresh" />
					重置
				</el-button>
				<!-- <el-button type="primary" plain @click="openListForm('create')">
					<Icon icon="ep:plus" class="mr-5px" /> 新增物流订单
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
						<el-table-column prop="requiresShipping" width="200" />
						<el-table-column prop="option" align="right" />
					</el-table>
				</template>

				<template #default="scope">
					<div class="flex bg-blue-50 py-1 px-3 dark:bg-blue-900">
						<dict-tag :type="DICT_TYPE.ZN_ORDER_STATUS" :value="scope.row.status" />
						<div class="flex-1 text-blue-500 ml-4">{{ scope.row.id }}</div>

						<div class="pl-4">
							<el-button link @click="openForm('detail', scope.row)">
								查看详情
							</el-button>
								<tempate v-if="scope.row.channelId">
									<el-divider direction="vertical" />
									<el-button v-if="!scope.row.wayBillNumber" link @click="getWayBillNumber(scope.row)">
										申请运单号
									</el-button>
									<el-link type="primary" v-if="scope.row.wayBillNumber && scope.row.tagUrl" :href="scope.row.tagUrl" target="_blank"  @click="printHandle(scope.row.id)">打印面单</el-link>
								</tempate>
								<tempate v-else>
								<el-divider direction="vertical" />
									<el-button link @click="openForm('detail', scope.row, 'wl')">
										请选择物流方式
									</el-button>
								</tempate>
						</div>
					</div>

					<el-table :data="scope.row.orderItems" v-loading="loading" :show-header="false">
						<el-table-column width="500">
							<template #default="scopeChild">
								<div class="flex gap-5">
									<el-image
style="width: 64px; height: 64px" :src="scopeChild.row.src ? scopeChild.row.src : noPic"
										fit="cover" />
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
											<span class="bg-gray-100 text-gray-600 px-2 dark:bg-blue-100">Variants: {{ scopeChild.row.variantTitle ?
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
						<el-table-column prop="requiresShipping">
							<template #default="scopeChild">
								<template v-if="scopeChild.row.requiresShipping == 1">
									<!-- <template v-if="scopeChild.row.channelId">
										{{  }}
									</template> -->
									运输
								</template>
								<template v-else>无需发货</template>
								<!-- {{ scopeChild.row.requiresShipping == 1 ? '运输' : '无需发货' }} -->
							</template>
						</el-table-column>
					</el-table>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<Pagination
v-model:limit="queryParams.pageSize" v-model:page="queryParams.pageNo" :total="total"
			@pagination="getList" />
	</ContentWrap>

	<!-- 表单弹窗：查看详情 -->
	<DetailView ref="detailRef" @success="getList" />

	<!-- 表单弹窗：上传图片 -->
	 <UploadImage ref="uploadImgRef" @success="getList" />

	 	<!-- 表单弹窗：审核 -->
	 <CheckForm ref="checkRef" @success="getList" />

	 <!-- 表单弹窗：创建物流订单 -->
	<LogisticsOrderForm ref="orderForm" @success="getList" />

	<!-- 表单弹窗：打印提醒 -->	
	<el-dialog
    v-model="printDialogVisible"
    title="打印信息"
    width="500"
    :before-close="handleClose"
  >
    <span>面单打印状态确认</span>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="printDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="printDialogVisible = false">
          打印完成
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script lang="ts" setup>
import { DICT_TYPE } from '@/utils/dict'
import DetailView from '@/views/ZNOrder/allList/PurchaseOrderForm.vue'
import UploadImage from '@/views/ZNDraw/allDraw/UploadImage.vue'
import CheckForm from '@/views/ZNDraw/allDraw/CheckForm.vue'
import { ZnerpApi } from '@/api/znerp'
import noPic from "@/assets/imgs/noPic.png"
import LogisticsOrderForm from "./LogisticsOrderForm.vue"
import { get } from 'http'

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const printDialogVisible = ref(false)

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
	pageNo: 1,
	pageSize: 10,
	orderNumber: '',
	status: '31', // 状态
	shopName: undefined,
})

const queryFormRef = ref() // 搜索的表单
const shopList = ref<any[]>([]) // 店铺列表

const headerData = ref([
	{
		info: '商品信息',
		price: '单价（USD）',
		num: '数量',
		requiresShipping: '配送方式',
	}
])

/** 查询角色列表 */
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
const detailRef = ref()
const openForm = (type: string, id?: number, tab?: string) => {
	detailRef.value.open(type, id, tab)
}

/** 添加/修改物流订单操作 */
const orderForm = ref()
const openListForm = (type: string, info?:object) => {
	orderForm.value.open(type, info)
}

/** 领取任务操作 */
const handleUpdateStatus = async (info: any) => {
	try {
		// 领取任务二次确认
		await message.confirm(`确定领取生产任务吗？`)
		// 领取任务
		let params = {
			orderId: info.orderId,
			itemId: info.id,
			productId: info.productId,
			type: 3, // 生产
		}

		await ZnerpApi.updateDraftsPage(params)
		message.success(`领取成功！`)
		// 刷新列表
		await getList()
	} catch { }
}

/** 审批操作 */
const handlProdoctDone = async (info: any)  => {
	try {
		// 审批的二次确认
		await message.confirm(`该订单是否已完成生产？`)

		// 完成任务
		let params = {
			id: info.id,
			productStatus: 1,
		}
		await ZnerpApi.orderItemUpdate(params)

		message.success(`审核通过！`)

		// 刷新列表
		await getList()
	} catch { }
}

const printHandle = async(id: number) => {
	try {
		console.log('id url111', id);
		printDialogVisible.value = true
	} catch {}
}

const handleClose = async () => {

}

const getWayBillNumber = async (info: any) => {
	try {
		// 申请运单号的二次确认
		await message.confirm(`确定申请运单号吗？`)

		await ZnerpApi.logisticsOrderSend([info.id])

		message.success(`申请成功！`)

		// 刷新列表
		await getList()
	} catch { }	
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
onMounted(async() => {
	await getList()
	await getShopList()
})
</script>