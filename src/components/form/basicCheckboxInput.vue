<template>
	<template v-if="_inputAttrs.showCheckAll">
		<el-checkbox
			class="checkbox-margin"
			v-model="checkAll"
			:indeterminate="isIndeterminate"
			@change="handleCheckAllChange">
			{{ _inputAttrs.checkAllText }}
		</el-checkbox>
	</template>
	<el-checkbox-group v-model="checkedValue" @change="handleCheckedSingleChange">
		<el-checkbox
			v-for="optItem in _optionItems.data"
			:key="optItem[_optionItems.valueKey]"
			:label="optItem[_optionItems.valueKey]">
			{{ optItem[_optionItems.labelKey] }}
		</el-checkbox>
	</el-checkbox-group>
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

// 复选框所有选项的总个数
const allCheckboxCount: number = _optionItems.value.data.length
// 复选框所有选项的value集合
const allCheckboxValues: array<string | any> = computed(() => {
	const { valueKey, data } = _optionItems.value
	return data.map((item) => item[valueKey])
})

// 选中的值
const checkedValue = ref(
	props.activeValue || (_inputAttrs.value.isCheckAll ? allCheckboxValues : [])
)

// 是否全选
const checkAll: boolean = ref(
	checkedValue.value.length > 0 && checkedValue.value.length == allCheckboxCount
)

// 中间状态
const isIndeterminate: boolean = computed(() => {
	const checkedValueCount = checkedValue.value.length
	return checkedValueCount > 0 && checkedValueCount < allCheckboxCount
})

const handleCheckAllChange = (val: boolean) => {
	checkedValue.value = val ? allCheckboxValues.value : []
	emit('update:activeValue', checkedValue.value)
}
const handleCheckedSingleChange = (value: string[]) => {
	checkedValue.value = value
	checkAll.value = value.length === allCheckboxCount
	emit('update:activeValue', value)
}
</script>
<style lang="scss" scoped>
.checkbox-margin {
	margin-right: 30px;
}
</style>
