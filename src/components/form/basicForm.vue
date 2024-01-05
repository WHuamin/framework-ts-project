<template>
	<div>公共组件 form表单</div>
	<el-form ref="formRef" @submit.prevent :model="formModel" v-bind="_formOptions">
		<!-- <template v-for="(item, index) in fieldList" :key="index"></template> -->
		<el-form-item
			v-for="(item, index) in formFieldList"
			:key="index"
			:label="item.inputAttrs.label"
			:prop="item.inputAttrs.field"
			:rules="item.fieldAttrs.rules"
			v-bind="item.fieldAttrs">
			<template v-if="item.inputAttrs.type == 'radio'">
				<basic-radio-input
					:input-attrs="item.inputAttrs"
					:option-config="item.optionConfig"
					v-model:activeValue="formModel[item.inputAttrs.field]"></basic-radio-input>
			</template>
			<template v-else-if="item.inputAttrs.type == 'checkbox'">
				<basic-checkbox-input
					:input-attrs="item.inputAttrs"
					:option-config="item.optionConfig"
					v-model:activeValue="formModel[item.inputAttrs.field]"></basic-checkbox-input>
			</template>
			<template v-else-if="item.inputAttrs.type == 'select'">
				<basic-select-input
					:input-attrs="item.inputAttrs"
					:option-config="item.optionConfig"
					v-model:activeValue="formModel[item.inputAttrs.field]"></basic-select-input>
			</template>
			<template v-else-if="['text', 'textarea'].includes(item.inputAttrs.type)">
				<basic-text-input
					:input-attrs="item.inputAttrs"
					v-model:activeValue="formModel[item.inputAttrs.field]"></basic-text-input>
			</template>
			<template v-else-if="item.inputAttrs.type == 'isSlot'">
				<slot
					:name="item.inputAttrs.field"
					:input-attrs="item.inputAttrs"
					:option-config="item.optionConfig"
					:activeValue="formModel[item.inputAttrs.field]"></slot>
			</template>
		</el-form-item>
		<el-form-item>
			<slot name="buttons" :model="formModel" :formRef="formRef">
				<el-button v-if="_formOptions.showResetButton" type="info" @click="resetForm(formRef)">
					{{ _formOptions.resetButtonText }}
				</el-button>
				<el-button v-if="_formOptions.showCancelButton" @click="emit('cancel')">
					{{ _formOptions.cancelButtonText }}
				</el-button>
				<el-button type="primary" @click="onSubmit(formRef)">
					{{ _formOptions.submitButtonText }}
				</el-button>
			</slot>
		</el-form-item>
	</el-form>
</template>

<script lang="ts" setup>
import type { FormInstance } from 'element-plus'
import type { IBasicForm, IBasicFormField } from '@/interface/basicForm.ts'
// import type { IFormProps } from '@/interface/basicForm2.ts'
import { ref, defineProps, ComputedRef, computed, defineExpose, watch } from 'vue'

// 表单的数据
const formModel = ref<Record<string, any>>({})
const formRef = ref<FormInstance>()
// const props = defineProps<IFormProps>()
const props = defineProps<IBasicForm.IFormProps>()
const emit = defineEmits<IBasicForm.IEmitEvents>()

console.log(props.fieldList)

// 设置option默认值，如果传入自定义的配置则合并option配置项
const _formOptions: ComputedRef<Form.Options> = computed(() => {
	const option = {
		type: 'form',
		size: 'small',
		labelSuffix: '：',
		labelPosition: 'right',
		disabled: false,
		submitButtonText: '提交',
		resetButtonText: '重置',
		cancelButtonText: '取消'
	}
	return Object.assign(option, props?.options)
})

// 暴露组件属性
defineExpose({
	formRef
})
const formFieldList: array<IBasicFormField.FieldAttrs> = computed(() => {
	return props.fieldList.map((item: IBasicFormField.FieldAttrs) => {
		const { fieldAttrs = {}, optionConfig = {}, ...inputAttrs } = item
		return {
			fieldAttrs,
			optionConfig,
			inputAttrs
		}
	})
})
console.log('form 子项', formFieldList.value)
/**
 * 根据fieldList初始化model，
 * 如果formModel有传值就用传递的model数据模型，
 * 否则就给上面声明的formModel设置相应的(key,value) [item.field]，
 * item.value是表单的默认值（选填）
 */
watch(
	// 监听 props 对象中的 model 属性
	() => props.model,
	() => {
		formFieldList.value.map((item: Form.InputAttributes) => {
			// 如果类型为checkbox，默认值需要设置一个空数组
			const value = item.inputAttrs.type === 'checkbox' ? [] : ''
			props.model
				? (formModel.value = props.model)
				: (formModel.value[item.inputAttrs.field] = item.inputAttrs.defaultValue || value)
		})
	},
	{ immediate: true }
)

// 提交按钮
const onSubmit = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.validate((valid) => {
		if (!valid) {
			return false
		}
		console.log(formModel.value)
		emit('submit', formModel.value)
	})
}

// 重置
const resetForm = (formEl: FormInstance | undefined) => {
	if (!formEl) return
	formEl.resetFields()
}

// 输入框回车事件
// const handleKeyUp = (enterable: boolean | undefined) => {
// 	if (!enterable) return
// 	onSubmit(formRef.value)
// }
</script>
