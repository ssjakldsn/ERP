<template>
	<ContentWrap>
		<!-- 搜索工作栏 -->
		<el-form class="-mb-15px" :model="queryParams" ref="queryFormRef" :inline="true" label-width="88px">
			<el-form-item label="店铺名称" prop="name">
				<el-input
v-model="queryParams.name" placeholder="请输入店铺名称" clearable @keyup.enter="handleQuery"
					class="!w-240px" />
			</el-form-item>
			<el-form-item>
				<el-button @click="handleQuery">
					<Icon icon="ep:search" class="mr-5px" /> 搜索
				</el-button>
				<el-button @click="resetQuery">
					<Icon icon="ep:refresh" class="mr-5px" /> 重置
				</el-button>
				<el-button type="primary" plain @click="openForm('create')">
					<Icon icon="ep:plus" class="mr-5px" /> 新增店铺
				</el-button>
			</el-form-item>
		</el-form>		
	</ContentWrap>	

	<!-- 列表 -->
	<ContentWrap>
		<el-table v-loading="loading" :data="list" :stripe="true">
			<el-table-column align="center" label="店铺中文名" min-width="100" prop="name" />
			<el-table-column align="center" label="店铺英文名" prop="enName" />
			<el-table-column align="center" label="店长" prop="username" />
			<el-table-column align="center" label="联系电话" prop="phone" />
			<el-table-column align="left" label="状态">
				<template #default="scope">
					<el-tag :type="scope.row.status == 0 ? 'info': 'success'">{{ scope.row.status == 0 ? '禁用' : '启用' }}</el-tag>
				</template>
			</el-table-column>
			<el-table-column align="center" :width="160" :formatter="dateFormatter" label="创建时间" prop="createTime" />
			<el-table-column :width="160" align="center" label="操作">
				<template #default="scope">
					<el-button link type="primary" @click="openForm('update', scope.row)">
						编辑
					</el-button>
					<!-- <el-button link type="danger" v-if="scope.row.status" @click="handleActive('active', scope.row.id)">
						禁用
					</el-button>
					<el-button link type="success" v-else @click="handleActive('inactive', scope.row.id)">
						启用
					</el-button> -->
					<el-button link type="danger" @click="handleDelete(scope.row.id)">
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<Pagination v-model:limit="queryParams.pageSize" v-model:page="queryParams.pageNo" :total="total" @pagination="getList" />
	</ContentWrap>
	<ShopForm ref="formRef"  @success="getList" />
</template>

<script setup lang="ts">
import { ZnerpApi } from '@/api/znerp'
import { dateFormatter } from '@/utils/formatTime'
import { PurchaseOrderVO } from '@/api/erp/purchase/order'
import ShopForm from './ShopForm.vue'

/** ERP  店铺管理 */
defineOptions({ name: 'ZnErpShop' })

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化
const loading = ref(true) // 列表的加载中
const list = ref<PurchaseOrderVO[]>([]) // 列表的数据
const total = ref(0) // 列表的总页数
const queryFormRef = ref() // 搜索的表单
const queryParams = reactive({
	pageNo: 1,
	pageSize: 10,
	name: undefined,
})

/** 查询列表 */
const getList = async () => {
	loading.value = true

	let params = {
		pageNo: queryParams.pageNo,
		pageSize: queryParams.pageSize,
		name: queryParams.name,
	}

	try {
		const data = await ZnerpApi.shopPage(params)
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

/** 删除按钮操作 */
const handleDelete = async (id: number) => {
  try {
    // 删除的二次确认
    await message.delConfirm()
    // 发起删除
    await ZnerpApi.deleteShop(id)
    message.success(t('common.delSuccess'))
    // 刷新列表
    await getList()
  } catch {}
}

const handleActive = async (type: string, id: number) => {
  try {
		let params = { 
			id: id,
			status: type === 'active' ? 1 : 0
		}
    await ZnerpApi.shopUpdate(params)
    message.success(type === 'active' ? '启用成功！' : '已禁用！')
    // 刷新列表
    await getList()
  } catch {}
}

/** 初始化 **/
onMounted(async () => {
	await getList()
})
</script>