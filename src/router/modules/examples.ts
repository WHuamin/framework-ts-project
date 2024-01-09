export default [
	// 基础组件
	{
		path: '/table',
		name: 'tableExample',
		component: () => import('@/views/examples/table/index.vue')
	},
	// vue3 语法
	{
		path: '/syntax',
		name: 'syntaxExample',
		component: () => import('@/views/examples/syntax/index.vue')
	}
]
