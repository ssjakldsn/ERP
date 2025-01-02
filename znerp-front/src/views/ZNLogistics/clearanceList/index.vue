<template>
	<ContentWrap>
		<!-- 搜索工作栏 -->
		<el-form ref="queryFormRef" :inline="true" :model="queryParams" class="-mb-15px" label-width="88px">
			<el-form-item label="报关名" prop="name">
				<el-input v-model="queryParams.name" placeholder="请输入报关名" clearable class="!w-240px" />
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
				<el-button type="primary" plain @click="openForm('create')">
					<Icon icon="ep:plus" class="mr-5px" /> 新增报关模板
				</el-button>
			</el-form-item>
		</el-form>
	</ContentWrap>

	<!-- 列表 -->
	<ContentWrap>
		<el-table v-loading="loading" :data="list" :stripe="true">
			<el-table-column align="center" label="自定义名称" prop="name" />
			<el-table-column align="center" label="中文报关名" prop="zhName" />
			<el-table-column align="left" label="英文报关名" prop="enName" />
			<el-table-column label="申报金额/USD" min-width="160" align="center" prop="taxAmount" />
			<el-table-column align="center" label="申报重量/g" prop="grossWeight" />
			<el-table-column align="center" label="材质" prop="material" />
			<el-table-column align="center" label="用途" prop="used" />
			<el-table-column align="center" label="海关编码" prop="customsCode" />
			<el-table-column align="center" label="产品属性">
				<template #default="scope">
					{{ getAttributes(scope.row.attributes) }}
				</template>
			</el-table-column>
			<el-table-column :width="160" align="center" label="操作">
				<template #default="scope">
					<el-button link type="primary" @click="openForm('update', scope.row)">
						编辑
					</el-button>
					<el-button link type="danger" @click="handleDelete(scope.row.id)">
						删除
					</el-button>
				</template>
			</el-table-column>
		</el-table>
		<!-- 分页 -->
		<Pagination v-model:limit="queryParams.pageSize" v-model:page="queryParams.pageNo" :total="total" @pagination="getList" />
	</ContentWrap>

	<ClearancelForm ref="formRef" @success="getList" />
</template>

<script lang="ts" setup>
import { ZnerpApi } from '@/api/znerp'
import ClearancelForm from './ClearancelForm.vue'

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化
const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
	pageNo: 1,
	pageSize: 10,
	name: '',
})

/** 查询角色列表 */
const getList = async () => {
	loading.value = true
	try {
		const data = await ZnerpApi.logisticsCustomsPage(queryParams)
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
const queryFormRef = ref() // 搜索的表单
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
		await ZnerpApi.deleteLogisticsCustoms(id)
		message.success(t('common.delSuccess'))
		// 刷新列表
		await getList()
	} catch { }
}

const attributesList = [{1: '含电'}, {2: '含非液体化妆品'}, {3: '特货 (敏感货)'}];
const getAttributes = ( attributesCode:String) => {
	if(attributesCode) {
		let list = attributesCode.split(',').map(Number)
		
		const resString = attributesList
		.filter(obj => list.includes(Number(Object.keys(obj)[0])))
		.map(obj => Object.values(obj)[0])
		.join(',');
		return resString
	}
}

/** 初始化 **/
onMounted(() => {
	getList()
})
</script>