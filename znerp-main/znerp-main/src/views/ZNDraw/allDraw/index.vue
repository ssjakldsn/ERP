<template>
	<ContentWrap>
		<!-- 搜索工作栏 -->
		<el-form ref="queryFormRef" :inline="true" :model="queryParams" class="-mb-15px" label-width="88px">
			<el-form-item label="产品SKU" prop="name">
				<el-input
v-model="queryParams.name" class="!w-240px" clearable placeholder="请输入产品SKU"
					@keyup.enter="handleQuery" />
			</el-form-item>
			<el-form-item label="状态" prop="status">
				<el-select v-model="queryParams.status" class="!w-240px" clearable placeholder="请选择状态">
					<el-option
v-for="dict in getIntDictOptions(DICT_TYPE.COMMON_STATUS)" :key="dict.value" :label="dict.label"
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
		<el-tabs v-model="activeName" @tab-click="handleTabClick">
			<el-tab-pane label="全部" name="1" />
			<el-tab-pane label="待出图" name="2" />
			<el-tab-pane label="待审核" name="3" />
			<el-tab-pane label="已完成" name="4" />
		</el-tabs>

		<el-table v-loading="loading" :data="list" :stripe="true" @selection-change="handleSelectionChange" :show-overflow-tooltip="true">
			<el-table-column width="30" label="选择" type="selection" />
			<el-table-column align="center" label="图片">
				<template #default="scope">
					<el-image style="width: 64px; height: 64px" :src="scope.row.img" fit="cover" />
				</template>
			</el-table-column>
			<el-table-column align="center" min-width="200"  label="品名/SKU" prop="sku" />
			<el-table-column align="left" min-width="200" label="商品信息" prop="info" />
			<el-table-column align="center" label="画图员" prop="operator" />
			<el-table-column label="计划开工时间" min-width="180" :formatter="dateFormatter" align="center" prop="createTime" />
			<el-table-column label="计划完工时间" min-width="180" :formatter="dateFormatter" align="center" prop="createTime" />
			<el-table-column label="分配时间"  min-width="180" :formatter="dateFormatter" align="center" prop="createTime" />
			<el-table-column label="状态" align="center" prop="status" />
			<el-table-column :width="160" align="center" label="操作" fixed="right">
				<template #default="scope">
					<el-button v-hasPermi="['system:role:update']" link type="primary" @click="openForm('update', scope.row.id)">
						上传图片
					</el-button>
					<el-button v-hasPermi="['system:role:delete']" link type="danger" @click="handleDelete(scope.row.id)">
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<Pagination
v-model:limit="queryParams.pageSize" v-model:page="queryParams.pageNo" :total="total"
			@pagination="getList" />
	</ContentWrap>

	<!-- 表单弹窗：添加/修改 -->
	<UploadForm ref="formRef" @success="getList" />
</template>

<script lang="ts" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import download from '@/utils/download'
import { dateFormatter } from '@/utils/formatTime'
import * as RoleApi from '@/api/system/role'
import UploadForm from './UploadForm.vue'
import { PurchaseOrderApi, PurchaseOrderVO } from '@/api/erp/purchase/order'

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化

const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
	pageNo: 1,
	pageSize: 10,
	name: '', // 规则名称
	status: undefined, // 状态
})

const queryFormRef = ref() // 搜索的表单
const exportLoading = ref(false) // 导出的加载中

const activeName = ref('1') // 列表 tab
/** tab 切换 */
const handleTabClick = (tab: TabsPaneContext) => {
	handleQuery()
}

/** 查询角色列表 */
const getList = async () => {
	loading.value = true
	try {
		// const data = await RoleApi.getRolePage(queryParams)
		// list.value = data.list
		// total.value = data.total
		list.value = [
			{
				"id": 101,
				"img": "https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg",
				"sku": "MusicT-shirt-White",
				"info": "Variants：T-shirt / White / Photo+Music Player",
				"orderId": "XMRXBE214592",
				"operator": "张三",
				"status": 0,
				"createTime": 1609837428000
			}
			// {
			// 	"id": 154,
			// 	"name": "ERP管理员",
			// 	"code": "ZNERP",
			// 	"sort": 1,
			// 	"status": 0,
			// 	"type": 2,
			// 	"remark": "",
			// 	"dataScope": 1,
			// 	"dataScopeDeptIds": null,
			// 	"createTime": 1726649745000
			// },
		]
		total.value = 2
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

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
	try {
		// 删除的二次确认
		await message.delConfirm()
		// 发起删除
		// await RoleApi.deleteRole(id)
		// message.success(t('common.delSuccess'))
		// // 刷新列表
		// await getList()
	} catch { }
}

/** 选中操作 */
const selectionList = ref<PurchaseOrderVO[]>([])
const handleSelectionChange = (rows: PurchaseOrderVO[]) => {
	selectionList.value = rows
}

/** 添加/修改操作 */
const formRef = ref()
const openForm = (type: string, id?: number) => {
	formRef.value.open(type, id)
}

/** 初始化 **/
onMounted(() => {
	getList()
})
</script>