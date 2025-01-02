<template>
	<Dialog v-model="dialogVisible" :title="dialogTitle">
		<el-form ref="formRef" v-loading="formLoading" :model="formData" :rules="formRules" label-width="120px">
			<el-form-item label="店铺中文名" prop="name">
				<el-input v-model="formData.name" placeholder="请输入店铺名称" />
			</el-form-item>
			<el-form-item label="店铺英文名" prop="enName">
				<el-input v-model="formData.enName" placeholder="请输入店铺英文名" />
			</el-form-item>
			<el-form-item label="Token" prop="token">
				<el-input v-model="formData.token" placeholder="请输入Token" />
			</el-form-item>
			<el-form-item label="店长姓名" prop="username">
				<el-input v-model="formData.username" placeholder="请输入店长姓名" />
			</el-form-item>
			<el-form-item label="联系电话" prop="phone">
				<el-input v-model="formData.phone" placeholder="请输入联系电话" />
			</el-form-item>
			<el-form-item label="状态">
				<el-switch v-model="formData.status" inline-prompt active-text="启用" inactive-text="禁用" />
			</el-form-item>
		</el-form>
		<template #footer>
			<el-button :disabled="formLoading" type="primary" @click="submitForm">确 定</el-button>
			<el-button @click="dialogVisible = false">取 消</el-button>
		</template>
	</Dialog>
</template>
<script lang="ts" setup>
import { ZnerpApi } from '@/api/znerp'
import { log } from 'console';
defineOptions({ name: 'ShopForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
	id: undefined,
	name: '', // 店铺名称,
	enName: '', // 店铺英文名称
	username: '', // 店长名称
	token: '', // token
	phone: '', // 联系电话
	status: true, // 状态 0=禁用；1=启用
})

const formRules = reactive({
	name: [{ required: true, message: '店铺名称', trigger: 'blur' }],
	token: [{ required: true, message: '授权token不能为空', trigger: 'blur' }],
	username: [{ required: true, message: '店长名称不能为空', trigger: 'blur' }],
	phone: [{ required: true, message: '联系电话不能为空', trigger: 'blur' }],
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, info: any) => {
	dialogVisible.value = true
	dialogTitle.value = t('action.' + type)
	formType.value = type
	resetForm()
	// 修改时，设置数据
	if (info) {
		formLoading.value = true
		try {
			formData.value = {
				id: info.id,
				name: info.name, // 店铺名称,
				enName: info.enName, // 店铺英文名称,
				token: info.token, // token
				username: info.username, // 店长名称
				phone: info.phone, // 联系电话
				status: info.status == 1 ? true : false,
			}

			console.log('form123', formData.value);
			
		} finally {
			formLoading.value = false
		}
	}
}

/** 重置表单 */
const resetForm = () => {
	formData.value = {
		id: undefined,
		name: '', // 店铺名称,
		enName: '', // 店铺英文名称
		username: '', // 店长名称
		token: '', // token
		phone: '', // 联系电话
		status: true, // 状态 0=禁用；1=启用
	}
	formRef.value?.resetFields()
}
defineExpose({ open }) // 提供 open 方法，用于打开弹窗

/** 提交表单 */
const emit = defineEmits(['success']) // 定义 success 事件，用于操作成功后的回调
const submitForm = async () => {
	// 校验表单
	if (!formRef) return
	const valid = await formRef.value.validate()
	if (!valid) return
	// 提交请求
	formLoading.value = true
	try {
		let params = {
			...formData.value,
			status: formData.value.status ? 1 : 0
		}
		if(formType.value === 'create') {
			await ZnerpApi.shopCreate(params)
			message.success( t('common.createSuccess'))
		} else {
			await ZnerpApi.shopUpdate(params)
			message.success(t('common.updateSuccess'))
		}
		
		dialogVisible.value = false
		// 发送操作成功的事件
		emit('success')
	} finally {
		formLoading.value = false
	}
}
</script>
