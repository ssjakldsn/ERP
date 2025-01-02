<template>
	<ContentWrap>
		<!-- 搜索工作栏 -->
		<el-form ref="queryFormRef" :inline="true" :model="queryParams" class="-mb-15px" label-width="88px">
			<el-form-item label="发件人" prop="senderFirstName">
				<el-input v-model="queryParams.senderFirstName" placeholder="请输入发件人" clearable class="!w-240px" />
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
					<Icon icon="ep:plus" class="mr-5px" /> 新增发件人
				</el-button>
			</el-form-item>
		</el-form>
	</ContentWrap>

	<!-- 列表 -->
	<ContentWrap>
		<el-table v-loading="loading" :data="list" :stripe="true">
			<el-table-column align="center" label="姓名">
				<template #default="scope">
					{{ scope.row.senderFirstName }}{{ scope.row.senderLastName }}
				</template>
			</el-table-column>
			<el-table-column align="center" label="电话" prop="senderPhone" />
			<el-table-column label="省/州" align="center" prop="senderState" />
			<el-table-column align="center" label="城市" prop="senderCity" />
			<el-table-column align="center" min-width="200" label="详细地址" prop="senderStreet" />
			<el-table-column align="center" label="邮编" prop="senderZip" />
			<el-table-column align="left" label="状态">
				<template #default="scope">
					<el-tag :type="scope.row.status == 0 ? 'info': 'success'">{{ scope.row.status == 0 ? '禁用' : '启用' }}</el-tag>
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

	<SenderForm ref="formRef" @success="getList" />
</template>

<script lang="ts" setup>
import { ZnerpApi } from '@/api/znerp'
import SenderForm from './SenderForm.vue'

const message = useMessage() // 消息弹窗
const { t } = useI18n() // 国际化
const loading = ref(true) // 列表的加载中
const total = ref(0) // 列表的总页数
const list = ref([]) // 列表的数据
const queryParams = reactive({
	pageNo: 1,
	pageSize: 10,
	senderFirstName: '',
})

/** 查询发件人列表 */
const getList = async () => {
	loading.value = true
	try {
		const data = await ZnerpApi.senderAddrPage(queryParams)
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
		await ZnerpApi.deleteSenderAddr(id)
		message.success(t('common.delSuccess'))
		// 刷新列表
		await getList()
	} catch { }
}

/** 初始化 **/
onMounted(() => {
	getList()
})
</script>