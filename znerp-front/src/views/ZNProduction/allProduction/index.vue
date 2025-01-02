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
						<div class="flex-1 text-blue-500 ml-4">#{{ scope.row.orderNumber }}</div>

						<div class="pl-4">
							<el-button link @click="openForm('detail', scope.row)">
								查看详情
							</el-button>
							<el-divider direction="vertical" />
							<el-button link @click="rollbackHandler(scope.row)">
								任务回退
							</el-button>

							<template v-if="scope.row.type == 1 && scope.row.orderItems[0].producers.length === 0" >
								<el-divider direction="vertical" />
								<el-button link @click="handleUpdateStatus(scope.row.orderItems[0])">
									领取任务
								</el-button>
							</template>
							<template v-if="scope.row.type == 1 && scope.row.orderItems[0].producers.length > 0">
								<el-divider direction="vertical" />
								<el-button link @click="handlProdoctDone(scope.row.orderItems[0])">
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
v-if="scopeChild.row.properties && JSON.parse(scopeChild.row.properties).length > 0"
style="width: 64px; height: 64px"
								:preview-src-list="scopeChild.row.uploadImg ? [scopeChild.row.uploadImg] : [noPic]" preview-teleported
								:src="scopeChild.row.uploadImg ? scopeChild.row.uploadImg : noPic" fit="cover" />
				<el-image
v-else
style="width: 64px; height: 64px" :src="scopeChild.row.upload_img ? scopeChild.row.upload_img : noPic"
					:preview-src-list="scopeChild.row.upload_img ? [scopeChild.row.upload_img] : [noPic]" preview-teleported fit="cover" />
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
										<p class="text-gray-400">歌曲名称：{{ scopeChild.row.songName ? scopeChild.row.songName : '暂无' }}</p>
										<p class="text-gray-400">歌手名称：{{ scopeChild.row.singer ? scopeChild.row.singer : '暂无' }}</p>
									</div>
								</div>
							</template>
						</el-table-column>
						<el-table-column width="200">
							<template #default="scopeChild">{{ scopeChild.row.zhEmbroideryStyle }}</template>
						</el-table-column>
						<el-table-column width="100">
							<template #default="scopeChild">{{ scopeChild.row.zhEmbroideryPosition }}</template>
						</el-table-column>
						<el-table-column>
							<template #default="scopeChild">{{ scopeChild.row.zhEmbroideryThreadColor }}</template>
						</el-table-column>
						<el-table-column v-if="scope.row.type == 2">
							<template #default="scopeChild">
								<div class="flex flex-row-reverse">
								<el-button v-if="scopeChild.row.producers.length == 0" type="primary" link @click="handleUpdateStatus(scopeChild.row)">
									领取任务
								</el-button>
								<template v-else>
									<el-tag v-if="scopeChild.row.productStatus === 1"  type="success">审核完成</el-tag>
									<el-button v-else link type="primary" @click="handlProdoctDone(scopeChild.row)">
										审核
									</el-button>
								</template>
							</div>
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

	<!-- 表单弹窗：回退 -->
	<RollBack ref="rollbackRef" @success="getList" />

</template>

<script lang="ts" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import DetailView from '@/views/ZNOrder/allList/PurchaseOrderForm.vue'
import UploadImage from '@/views/ZNDraw/allDraw/UploadImage.vue'
import CheckForm from '@/views/ZNDraw/allDraw/CheckForm.vue'
import RollBack from '@/views/ZNOrder/allList/components/RollBack.vue'
import { ZnerpApi } from '@/api/znerp'
import noPic from "@/assets/imgs/noPic.png"

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
	pageNo: 1,
	pageSize: 10,
	orderNumber: '',
	status: '21,32', // 状态
	shopName: undefined,
})

const queryFormRef = ref() // 搜索的表单
const shopList = ref<any[]>([]) // 店铺列表

const headerData = ref([
	{
		info: '商品信息',
		price: '刺绣类型',
		num: '刺绣位置',
		requiresShipping: '刺绣颜色',
		option: ''
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
const openForm = (type: string, id?: number) => {
	detailRef.value.open(type, id)
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

const getShopList = async () => {
	let params = {
		pageNo: 1,
		pageSize: 10,
	}
	const data = await ZnerpApi.shopPage(params)
	shopList.value = data.list?.map(item => ({ label: item.name, value: item.enName }))
}

const rollbackRef = ref()
const rollbackHandler = (info: any) => {
	// 回退的二次确认
	message.confirm(`确定回退该订单吗？`).then(() => {
		rollbackRef.value.open(3, info)
		// 回退任务
		// let params = {
		// 	id: info.id,			
		// 	status: 21, // 待生产
		// }		
		// ZnerpApi.rollbackOrderItems(params).then(() => {
		// 	message.success(`回退成功！`)
		// 	// 刷新列表
		// 	getList()
		// })
	}
	)	
}

/** 初始化 **/
onMounted(async() => {
	await getList()
	await getShopList()
})
</script>