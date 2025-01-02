<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="110px"
    >
			<el-form-item label="自定义名称" prop="name">
        <el-input v-model="formData.name" placeholder="请输入自定义名称" />
      </el-form-item>
			<el-form-item label="中文名称" prop="zhName">
        <el-input v-model="formData.zhName" placeholder="请输入中文名称" />
      </el-form-item>
      <el-form-item label="英文名称" prop="enName">
        <el-input v-model="formData.enName" placeholder="请输入英文名称" />
      </el-form-item>
			<el-form-item label="申报金额" prop="taxAmount">
        <el-input v-model="formData.taxAmount" placeholder="请输入申报金额">
					<template #append>USD</template>
				</el-input>
      </el-form-item>
			<el-form-item label="申报重量" prop="grossWeight">
        <el-input v-model="formData.grossWeight" placeholder="请输入申报重量">
					<template #append>g</template>
				</el-input>
      </el-form-item>
			<el-form-item label="材质">
        <el-input v-model="formData.material" placeholder="请输入材质" />
      </el-form-item>
			<el-form-item label="用途">
        <el-input v-model="formData.used" placeholder="请输入用途" />
      </el-form-item>
			<el-form-item label="海关编码">
        <el-input v-model="formData.customsCode" placeholder="请输入海关编码" />
      </el-form-item>
      <el-form-item label="报关属性">
				<el-checkbox-group v-model="formData.attributes">
					<el-checkbox label="含电" value="1" />
					<el-checkbox label="含非液体化妆品" value="2" />
					<el-checkbox label="特货 (敏感货) " value="3" />
				</el-checkbox-group>
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

defineOptions({ name: 'ClearancelForm' })

const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  name: '', // 自定义名称
  zhName: '', // 中文名称
	enName: '', // 英文名称
	taxAmount: '', // 申报金额
	grossWeight: '', // 申报重量
	material: '', // 材质
	used: '', // 用途
	customsCode: '', // 海关编码
	attributes: [], // 报关属性
})

const formRules = reactive({
  name: [{ required: true, message: '自定义名称不能为空', trigger: 'blur' }],
	zhName: [{ required: true, message: '中文名称不能为空', trigger: 'blur' }],
	enName: [{ required: true, message: '英文名称不能为空', trigger: 'blur' }],
	taxAmount: [{ required: true, message: '申报金额不能为空', trigger: 'blur' }],
	grossWeight: [{ required: true, message: '申报重量不能为空', trigger: 'blur' }],
})
const formRef = ref() // 表单 Ref

/** 打开弹窗 */
const open = async (type: string, info: any) => {
  dialogVisible.value = true
  dialogTitle.value = t('action.' + type)
  formType.value = type
  resetForm()
	if (info) {
		formLoading.value = true
		try {
			formData.value = {
				id: info.id,
				name: info.name,
				zhName: info.zhName,
				enName: info.enName,
				taxAmount: info.taxAmount,
				grossWeight: info.grossWeight,
				material: info.material,
				used: info.used,
				customsCode: info.customsCode,
				attributes: info.attributes.split(','),
			}
		} finally {
			formLoading.value = false
		}
	}
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
		id: undefined,
		name: '', // 自定义名称
		zhName: '', // 中文名称
		enName: '', // 英文名称
		taxAmount: '', // 申报金额
		grossWeight: '', // 申报重量
		material: '', // 材质
		used: '', // 用途
		customsCode: '', // 海关编码
		attributes: [], // 报关属性
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
			attributes: formData.value.attributes.join(',')
		}
		if(formType.value === 'create') {
			await ZnerpApi.logisticsCustomsCreate(params)
			message.success( t('common.createSuccess'))
		} else {
			await ZnerpApi.logisticsCustomsUpdate(params)
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
