<template>
	<ContentWrap>
		<!-- 搜索工作栏 -->
		<el-form ref="queryFormRef" :inline="true" :model="queryParams" class="-mb-15px" label-width="68px">
			<el-form-item label="规则名称" prop="name">
				<el-input
v-model="queryParams.name" class="!w-240px" clearable placeholder="请输入规则名称"
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
				<el-button v-hasPermi="['system:role:create']" plain type="primary" @click="openForm('create')">
					<Icon class="mr-5px" icon="ep:plus" />
					新增
				</el-button>
				<el-button plain type="danger">
					<Icon class="mr-5px" icon="ep:delete" />
					删除
				</el-button>
			</el-form-item>
		</el-form>
	</ContentWrap>

	<!-- 列表 -->
	<ContentWrap>
		<el-table
v-loading="loading" :data="list" :stripe="true"
			@selection-change="handleSelectionChange">
			<el-table-column width="30" label="选择" type="selection" />
			<el-table-column align="center" label="优先级" prop="sort" />
			<el-table-column align="center" label="规则名称" prop="name" />
			<el-table-column align="left" label="规则内容"  min-width="200" prop="detail" />
			<el-table-column label="执行动作" align="center" prop="action">
				<template #default="scope">
					<dict-tag :type="DICT_TYPE.ACTION_STATUS" :value="scope.row.action" />
				</template>
			</el-table-column>
			<el-table-column align="center" label="状态" prop="status">
				<template #default="scope">
					<dict-tag :type="DICT_TYPE.COMMON_STATUS" :value="scope.row.status" />
				</template>
			</el-table-column>
			<el-table-column align="center" label="操作人" prop="operator" />
			<el-table-column :formatter="dateFormatter" align="center" label="创建时间" prop="createTime" width="180" />
			<el-table-column :width="160" align="center" label="操作">
				<template #default="scope">
					<el-button v-hasPermi="['system:role:update']" link type="primary" @click="openForm('update', scope.row.id)">
						编辑
					</el-button>
					<el-button v-hasPermi="['system:role:delete']" link type="danger" @click="handleDelete(scope.row.id)">
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<Pagination v-model:limit="queryParams.pageSize" v-model:page="queryParams.pageNo" :total="total" @pagination="getList" />
	</ContentWrap>

  <!-- 表单弹窗：添加/修改 -->
  <RoleForm ref="formRef" @success="getList" />
</template>

<script lang="ts" setup>
import { DICT_TYPE, getIntDictOptions } from '@/utils/dict'
import download from '@/utils/download'
import { dateFormatter } from '@/utils/formatTime'
import * as RoleApi from '@/api/system/role'
import RoleForm from './RoleForm.vue'
const message = useMessage() // 消息弹窗

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
				"name": "刺绣卫衣",
				"detail": "订单商品为 指定商品SKU （Hoodie-Beige-S,Hoodie-White-S,Hoodie-Black-S,Hoodie-Gray-S,Hoodie-Mocha-S,Hoodie-Beige-M,Hoodie-White-M,Hoodie-Black-M,Hoodie-Gray-M",
				"sort": 0,
				"status": 0,
				"action": 1,
				"operator": "张三",
				"createTime": 1609837428000
			},
			{
				"id": 1,
				"name": "刺绣卫衣",
				"detail": "订单商品为 指定商品SKU （Hoodie-Beige-S,Hoodie-White-S,Hoodie-Black-S,Hoodie-Gray-S,Hoodie-Mocha-S,Hoodie-Beige-M,Hoodie-White-M,Hoodie-Black-M,Hoodie-Gray-M",
				"sort": 1,
				"status": 1,
				"action": 2,
				"operator": "张三",
				"createTime": 1609837428000
			},
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