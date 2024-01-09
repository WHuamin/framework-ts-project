<script setup lang="ts">
const tableConfig = {
	data: [
		{
			id: '123',
			date: '2016-05-03',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles'
		},
		{
			id: '124',
			date: '2016-05-02',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles'
		},
		{
			id: '125',
			date: '2016-05-04',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles'
		},
		{
			id: '126',
			date: '2016-05-01',
			name: 'Tom',
			address: 'No. 189, Grove St, Los Angeles',
			address1: 'No. 189, Grove St, Los Angeles'
		}
	],
	options: {
		rowKey: 'id',
		border: true,
		stripe: true,
		showPagination: true,
		paginationConfig: {
			total: 100,
			currentPage: 1,
			pageSize: 10,
			pageSizes: [10, 15, 20, 30, 50, 100],
			layout: 'total, sizes, prev, pager, next, jumper',
			background: true
		},
		columns: [
			{
				type: 'selection',
				width: '60',
				align: 'center'
			},
			{
				type: 'index',
				label: '序号',
				width: '60',
				align: 'center'
			},
			{
				prop: 'date',
				label: '日期',
				width: '180',
				headerAlign: 'center'
			},
			{
				prop: 'name',
				label: '姓名',
				width: '180',
				align: 'center'
			},
			{
				prop: 'address11',
				label: '地址',
				align: 'center',
				columns: [
					{
						showOverflowTooltip: true,
						prop: 'address',
						label: '省',
						width: '180'
					},
					{
						prop: 'address1',
						label: '市'
					}
				]
			}
		]
	}
}
</script>

<template>
	<basic-table :options="tableConfig.options" :data="tableConfig.data"></basic-table>
</template>
