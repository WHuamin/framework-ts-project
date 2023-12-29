import { defineStore } from 'pinia'

export const systemStore = defineStore('systemStore', {
	state: () => ({
		systemName: 'XXX 管理系统'
	}), // 数据
	getters: {}, // 计算属性
	actions: {} // 方法
})
