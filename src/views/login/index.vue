<script setup lang="ts">
import { useSystemStore } from '@stores/system'
import { storeToRefs } from 'pinia'
const { systemName, doubleCount } = storeToRefs(useSystemStore()) //创建store实例(解构语法,storeToRefs只能用于数据、计算属性，不能用于方法)

const systemStore = useSystemStore()
console.log(systemStore)
</script>

<template>
	<div>login {{ systemStore.systemName }}</div>
	<div>计算属性值--{{ systemStore.doubleCount }}</div>
	<div>login {{ systemName }}</div>
	<div>计算属性值--{{ doubleCount }}</div>
</template>
