<template>
	<!-- 单选框 -->
	<el-radio-group v-model="inputModel" v-bind="_inputAttrs" @change="changeValue">
		<el-radio
			v-for="optItem in _optionItems.data"
			:key="optItem[_optionItems.valueKey]"
			:label="optItem[_optionItems.valueKey]">
			{{ optItem[_optionItems.labelKey] }}
		</el-radio>
	</el-radio-group>
</template>

<script lang="ts" setup>
import { defineProps, ref, ComputedRef, computed } from 'vue'
import type { IBasicFormField } from '@/interface/basicForm.ts'
import formDefaultOptions from './formDefaultOptions.ts'

const props = defineProps<IBasicFormField.FieldSelectionboxItem>()
const emit = defineEmits<IBasicFormField.EmitEvents>()

// 设置 input 属性
const _inputAttrs: ComputedRef<Form.inputAttrs> = computed(() => {
	const option = formDefaultOptions(props.inputAttrs.type)
	return Object.assign(option, props.inputAttrs)
})

// 设置 option 属性
const _optionItems: ComputedRef<Form.IFieldOptions> = computed(() => {
	const selectionboxOption = formDefaultOptions(`${props.inputAttrs.type}Option`)
	return Object.assign(selectionboxOption.options, props.optionConfig)
})

// 输入框的数据
const inputModel = ref<string, any>(props.activeValue)

const changeValue = (): void => {
	emit('update:activeValue', inputModel.value)
}
</script>
