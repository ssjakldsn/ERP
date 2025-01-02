<template>
	<el-table :data="formData" show-summary class="-mt-10px">
		<el-table-column label="序号" type="index" align="center" width="60" />
		<el-table-column label="商品信息" min-width="240">
			<template #default="scope">
				<div class="flex gap-5">
					<el-image
style="width: 64px; height: 64px" :src="scope.row.uploadImg ? scope.row.uploadImg : noPic"
						fit="cover" />
					<div class="flex-1">
						<h4>{{ scope.row.title }}</h4>
						<p class="text-gray-400">SKU：{{ scope.row.sku ? scope.row.sku : '暂无' }}</p>
					</div>
				</div>
			</template>
		</el-table-column>
		<el-table-column label="单价（USD）" align="center" prop="price" />
		<el-table-column label="数量" prop="quantity" align="center" />
		<el-table-column label="类型" min-width="150" align="center">
			线条
		</el-table-column>
	</el-table>
</template>
<script setup lang="ts">
import noPic from "@/assets/imgs/noPic.png"

const props = defineProps<{
	items: any
}>()
const formData = ref([])

/** 初始化设置入库项 */
watch(
	() => props.items,
	async (val) => {
		formData.value = val
	},
	{ immediate: true }
)
</script>
