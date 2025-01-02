<template>
  <Dialog v-model="dialogVisible" :title="dialogTitle">
    <el-form
      ref="formRef"
      v-loading="formLoading"
      :model="formData"
      :rules="formRules"
      label-width="110px"
    >

    <el-form-item label="姓名" required>
      <el-col :span="4">
        <el-form-item prop="senderFirstName">
          <el-input style="width: 70px;" v-model="formData.senderFirstName" placeholder="姓" />
        </el-form-item>
      </el-col>
      <el-col class="text-center" :span="2">
        <span class="text-gray-500">-</span>
      </el-col>
      <el-col :span="11">
        <el-form-item prop="senderLastName">
          <el-input style="width: 100px" v-model="formData.senderLastName" placeholder="名" />
        </el-form-item>
      </el-col>
    </el-form-item>

			<el-form-item label="发件人电话" prop="senderPhone">
        <el-input v-model="formData.senderPhone" placeholder="请输入发件人电话" />
      </el-form-item> 
      <el-form-item label="省/州" prop="senderState">
				<el-input v-model="formData.senderState" placeholder="请输入省/州" />
				<!-- <el-cascader
              v-model="formData.senderState"
              :options="areaList"
              :props="defaultProps"
              class="w-1/1"
              clearable
              filterable
              placeholder="请选择城市"
            /> -->
      </el-form-item>
			<el-form-item label="所在城市" prop="senderCity">
        <el-input v-model="formData.senderCity" placeholder="请输入所在城市" />
      </el-form-item>
			<el-form-item label="详细地址" prop="senderStreet">
        <el-input v-model="formData.senderStreet" placeholder="请输入详细地址" />
      </el-form-item>
			<el-form-item label="发件人公司" prop="senderCompany">
        <el-input v-model="formData.senderCompany" placeholder="请输入发件人公司" />
      </el-form-item>
			<el-form-item label="发件人邮编">
        <el-input v-model="formData.senderZip" placeholder="请输入发件人邮编" />
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
import { defaultProps } from '@/utils/tree'
import * as AreaApi from '@/api/system/area'

defineOptions({ name: 'SenderForm' })
const areaList = ref([]) // 地区列表
const { t } = useI18n() // 国际化
const message = useMessage() // 消息弹窗

const dialogVisible = ref(false) // 弹窗的是否展示
const dialogTitle = ref('') // 弹窗的标题
const formLoading = ref(false) // 表单的加载中：1）修改时的数据加载；2）提交的按钮禁用
const formType = ref('') // 表单的类型：create - 新增；update - 修改
const formData = ref({
  id: undefined,
  senderCountryCode: 'CN',
	senderFirstName: '', // 发件人姓
	senderLastName: '', // 发件人名
	senderPhone: '', // 发件人电话
	senderState: '', // 发件人省/州
	senderCity: '', // 发件人所在城市
	senderStreet: '', // 发件人详细地址 FBA 必填
	senderCompany: '', //发件人公司名称
	senderZip: '', // 发件人邮编
	status: true, // 状态 0=禁用；1=启用
})

const formRules = reactive({
  senderFirstName: [{ required: true, message: '请输入姓', trigger: 'blur' }],
	senderLastName: [{ required: true, message: '请输入名字', trigger: 'blur' }],
	senderPhone: [{ required: true, message: '请输入发件人电话', trigger: 'blur' }],
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
				senderCountryCode: info.senderCountryCode,
				senderFirstName: info.senderFirstName, 
				senderLastName: info.senderLastName, // 发件人名
				senderPhone: info.senderPhone, // 发件人电话
				senderState: info.senderState, // 发件人省/州
				senderCity: info.senderCity, // 发件人所在城市
				senderStreet: info.senderStreet, // 发件人详细地址 FBA 必填
				senderCompany: info.senderCompany, //发件人公司名称
				senderZip: info.senderZip, // 发件人邮编
				status: info.status == 1 ? true : false, // 状态 0=禁用；1=启用
			}
		} finally {
			formLoading.value = false
		}
	}

	// 获得地区列表
	// areaList.value = await AreaApi.getAreaTree()
}

/** 重置表单 */
const resetForm = () => {
  formData.value = {
		id: undefined,
		senderCountryCode: 'CN',
		senderFirstName: '', // 发件人姓
		senderLastName: '', // 发件人名
		senderPhone: '', // 发件人电话
		senderState: '', // 发件人省/州
		senderCity: '', // 发件人所在城市
		senderStreet: '', // 发件人详细地址 FBA 必填
		senderCompany: '', //发件人公司名称
		senderZip: '', // 发件人邮编
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
			await ZnerpApi.senderAddrCreate(params)
			message.success( t('common.createSuccess'))
		} else {
			await ZnerpApi.senderAddrUpdate(params)
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
