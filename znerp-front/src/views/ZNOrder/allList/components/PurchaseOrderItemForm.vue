<template>
	<el-table :data="formData" class="-mt-10px" max-height="250">
		<el-table-column label="序号" type="index" align="center" width="60" />
		<el-table-column label="商品信息" min-width="400">
			<template #default="scope">
				<div class="flex gap-4">
				<el-image
style="width: 64px; height: 64px" :preview-src-list="scope.row.src ? [scope.row.src] : [noPic]"
						preview-teleported :src="scope.row.src ? scope.row.src : noPic" fit="cover" />
						<template v-if="scope.row.properties">
						<div class="flex-1">
								<h4>{{ scope.row.title }}</h4>
								<p v-for="(propItem, propIndex) in JSON.parse(scope.row.properties)" :key="'prop_' + propIndex">
									<template v-if="!propItem.value.includes('https://')">
										{{ propItem.name }}: {{ propItem.value }}
									</template>
								</p>
							</div>
						</template>
							<div class="flex-1" v-else>
						<h4>{{ scope.row.title }}</h4>
						<span class="bg-gray-100 text-gray-600 px-2">Variants: {{ scope.row.variantTitle ? scope.row.variantTitle
							: '暂无' }}</span>
						<p class="text-gray-400">SKU：{{ scope.row.zhProductSku ? scope.row.zhProductSku : '暂无' }}
						</p>
					</div>
					</div>
			</template>
		</el-table-column>
		<el-table-column label="用户上传图片" align="center" min-width="160">
			<template #default="scope">
				<el-image
v-if="scope.row.properties && JSON.parse(scope.row.properties).length > 0"
style="width: 64px; height: 64px"
								:preview-src-list="scope.row.uploadImg ? [scope.row.uploadImg] : [noPic]" preview-teleported
								:src="scope.row.uploadImg ? scope.row.uploadImg : noPic" fit="cover" />
				<el-image
v-else
style="width: 64px; height: 64px" :src="scope.row.upload_img ? scope.row.upload_img : noPic"
					:preview-src-list="scope.row.upload_img ? [scope.row.upload_img] : [noPic]" preview-teleported fit="cover" />
			</template>
		</el-table-column>
		<el-table-column label="类型名称" align="center" min-width="300" prop="zhProductName" />
		<el-table-column label="单价（USD）" align="center" min-width="160" prop="price" />
		<el-table-column label="数量" prop="quantity" align="center" />

		<el-table-column label="歌曲名称" align="center" prop="songName" />
		<el-table-column label="歌唱者" align="center" prop="singer" />
		<el-table-column label="是否刺字" align="center" prop="canvasBagEmbroidery" />
		<el-table-column label="袖口刺字" align="center" prop="sleeveEmbroidery" />
		<el-table-column label="胸口刺字" align="center" prop="chestEmbroidery" />
		<el-table-column label="领口刺字" align="center" prop="collarEmbroidery" />
		<el-table-column label="帆布袋刺字" align="center" prop="canvasBagEmbroidery" min-width="180" />
		<el-table-column label="是否需要相册" align="center" prop="needAlbum" min-width="180" />
		<el-table-column label="礼品包装" align="center" prop="needGift" />
		<el-table-column label="更多宠物" align="center" prop="morePets" />
		<el-table-column label="备注" align="center" prop="remarks" min-width="380" />

		<el-table-column label="刺绣类型" min-width="150" align="center" prop="zhEmbroideryStyle" fixed="right" />
		<el-table-column label="刺绣颜色" align="center" prop="zhEmbroideryThreadColor" fixed="right" />
		<el-table-column label="刺绣位置" align="center" prop="zhEmbroideryPosition" fixed="right" />
		<el-table-column label="配送方式" align="center" prop="requiresShipping" fixed="right">
			<template #default="scope">{{ scope.row.requiresShipping == 1 ? '运输' : '无需发货' }}</template>
		</el-table-column>
	</el-table>
</template>
<script setup lang="ts">
import noPic from "@/assets/imgs/noPic.png"

const props = defineProps<{
	items: any,
	type: any
}>()
const formData = ref([])
const formType = ref(0)

/** 初始化设置入库项 */
watch(
	() => [props.items, props.type],
	async ([itemsVal, typeVal]) => {
		formData.value = itemsVal
		formType.value = typeVal
	},
	{ immediate: true }
)
</script>
