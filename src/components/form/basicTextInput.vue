<template>
	<!-- 输入框 -->
	<el-input
		v-model="inputModel"
		v-bind="_inputAttrs"
		@change="changeValue"
		@keyup.enter="handleKeyUp(_inputAttrs.enterable)" />
</template>

<script lang="ts" setup>
import { defineProps, ref, ComputedRef, computed } from 'vue'
import type { IBasicFormField } from '@/interface/basicForm.ts'
import formDefaultOptions from './formDefaultOptions.ts'

const props = defineProps<IBasicFormField.FieldInputItem>()
const emit = defineEmits<IBasicFormField.EmitEvents>()

// 设置 input 属性
const _inputAttrs: ComputedRef<Form.inputAttrs> = computed(() => {
	const option = formDefaultOptions(props.inputAttrs.type)
	return Object.assign(option, props.inputAttrs)
})

// 输入框的数据
const inputModel = ref<string, any>(props.activeValue)

const changeValue = (): void => {
	emit('update:activeValue', inputModel.value)
}

// 输入框回车事件
const handleKeyUp = (enterable: boolean | undefined) => {
	if (!enterable) return
	console.log(enterable, inputModel.value)
}
</script>
