<template>
	<div
		class="basic-table-container"
		customClass="basic-table-loading"
		element-loading-text="加载中..."
		element-loading-svg-view-box="-10, -10, 50, 50"
		element-loading-background="rgba(122, 122, 122, 0.4)"
		v-loading.lock="tableLoading"
		:element-loading-spinner="tableLoadingSvg">
		<div>table 公共组件</div>
		<!-- <template v-if="tableConfig.showSearch">
		<div>搜索条件</div>
	</template> -->
		<el-table :data="data" v-bind="tableConfig">
			<basic-table-column
				v-for="item in columns"
				:key="item.prop"
				:options="item"></basic-table-column>
		</el-table>
		<template v-if="tableConfig.showPagination">
			<el-pagination
				class="table-paging"
				popper-class="table-paging-popper"
				prev-text="上一页"
				next-text="下一页"
				v-bind="pagingConfig"
				v-model:current-page="pagingConfig.currentPage"
				v-model:page-size="pagingConfig.pageSize"
				@size-change="handleSizeChange"
				@current-change="handleCurrentChange" />
		</template>
	</div>
</template>

<script lang="ts" setup>
import { withDefaults, defineProps, reactive, ref } from 'vue'
const {
	options: { columns, paginationConfig = {}, ...tableConfig },
	data
} = withDefaults(
	defineProps<{
		options: Table.Options
		data: Array<any>
	}>(),
	{
		options: {
			rowKey: 'id',
			columns: []
		},
		data: []
	}
)
const pagingConfig = reactive<Table.Pagination>({
	total: 0,
	currentPage: 1,
	pageSize: 15,
	pageSizes: [15, 20, 30, 50, 100],
	layout: 'total, sizes, prev, pager, next, jumper',
	background: true,
	defaultPageSize: 15,
	...paginationConfig
})
console.log(columns, tableConfig, paginationConfig, data)
console.log(pagingConfig.currentPage)
// table 数据加载中
const tableLoading = ref<boolean>(true)
const tableLoadingSvg = `
        <path class="path" d="
          M 30 15
          L 28 17
          M 25.61 25.61
          A 15 15, 0, 0, 1, 15 30
          A 15 15, 0, 1, 1, 27.99 7.5
          L 15 15
        " style="stroke-width: 4px; fill: rgba(0, 0, 0, 0)"/>
      `
const handleSizeChange = (val: number) => {
	console.log(val)
}
const handleCurrentChange = (val: number) => {
	console.log(val)
}
</script>
<style lang="scss" scoped>
.table-paging {
	margin-top: 10px;
	justify-content: flex-end;
}
</style>
