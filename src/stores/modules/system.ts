import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useSystemStore = defineStore('system', () => {
	// 定义数据
	const systemName = ref('XXX 管理系统')
	const count = ref(0)

	// 定义方法
	const increment = () => {
		count.value++
	}
	// 定义计算属性
	const doubleCount = computed(() => count.value * 2)
	return { count, systemName, increment, doubleCount } // 返回
})
