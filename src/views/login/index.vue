<script setup lang="ts">
import { useSystemStore } from '@stores/system'
import { storeToRefs } from 'pinia'
// import BasicForm from '@/components/form/basicForm'
const { systemName, doubleCount } = storeToRefs(useSystemStore()) //创建store实例(解构语法,storeToRefs只能用于数据、计算属性，不能用于方法)

const systemStore = useSystemStore()
console.log(systemStore)
const loginFormOptions: Form.Options = {
	labelPosition: 'top',
	showResetButton: true,
	showCancelButton: true
}
const loginFieldList: array<Form.BasicFormItemConfig> = [
	{
		fieldAttrs: {
			label: '账号',
			labelWidth: '120px'
		},
		field: 'account',
		type: 'text',
		defaultValue: '123',
		placeholder: '请输入账号',
		clearable: true
	},
	{
		fieldAttrs: {
			label: '密码',
			labelWidth: '120px'
		},
		field: 'password',
		type: 'text',
		defaultValue: '',
		// placeholder: '请输入密码',
		clearable: true,
		showPassword: true,
		enterable: true
	},
	{
		field: 'loginWay',
		type: 'radio',
		defaultValue: '',
		fieldAttrs: {
			label: '登录方式',
			labelWidth: '120px'
		},
		optionConfig: {
			data: [
				{ label: 'WEB端', value: 'web' },
				{ label: 'APP端', value: 'app' }
			]
		}
	},
	{
		field: 'loginWay1',
		type: 'radio',
		defaultValue: 'app',
		fieldAttrs: {
			label: '登录方式1',
			labelWidth: '120px'
		},
		optionConfig: {
			labelKey: 'label1',
			valueKey: 'value1',
			data: [
				{ label1: 'WEB端', value1: 'web' },
				{ label1: 'APP端', value1: 'app' }
			]
		}
	},
	{
		field: 'loginWay2',
		type: 'checkbox',
		showCheckAll: true,
		defaultValue: ['app', 'web', 'ios'],
		fieldAttrs: {
			label: '登录方式多选',
			labelWidth: '120px'
		},
		optionConfig: {
			labelKey: 'label1',
			valueKey: 'value1',
			data: [
				{ label1: 'WEB端', value1: 'web' },
				{ label1: 'APP端', value1: 'app' },
				{ label1: 'IOS端', value1: 'ios' }
			]
		}
	},
	{
		field: 'loginWay3',
		type: 'select',
		defaultValue: 'web',
		fieldAttrs: {
			label: '登录方式3',
			labelWidth: '120px'
		},
		optionConfig: {
			data: [
				{ label: 'WEB端', value: 'web' },
				{ label: 'APP端', value: 'app' }
			]
		}
	},
	{
		label: '备注',
		labelWidth: '120px',
		field: 'mask',
		type: 'textarea',
		defaultValue: '',
		autosize: { minRows: 2 },
		fieldAttrs: {
			label: '备注',
			labelWidth: '120px'
		}
	}
]
</script>

<template>
	<div>login {{ systemStore.systemName }}</div>
	<div>计算属性值--{{ systemStore.doubleCount }}</div>
	<div>login {{ systemName }}</div>
	<div>计算属性值--{{ doubleCount }}</div>
	<basic-form :options="loginFormOptions" :field-list="loginFieldList"></basic-form>
</template>
