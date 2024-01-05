import { type FormItemRule } from 'element-plus'

export = Form

export as namespace Form

declare namespace Form {
	// 输入框类型
	type InputType = 'password' | 'text' | 'textarea' | 'radio' | 'checkbox' | 'select' | 'isSlot'

	// 输入框 属性
	interface InputAttributes {
		label?: string // 标签文本
		field: string // model 的键名
		type: InputType // 当前 fieldItem 的类型
		defaultValue?: any // 默认显示的值
		placeholder?: string // 输入框占位文本
		disabled?: boolean // 是否禁用
		readonly?: boolean
		clearable?: boolean // 是否可清空
		showPassword?: boolean // 是否显示切换密码图标
		enterable?: boolean // 当为输入框时，是否启用回车触发提交功能
	}

	// type=‘checkbox’ / ‘radio’ / 'select’ 选择框 属性
	interface SelectionInputAttributes extends InputAttributes {
		multiple?: boolean // 是否多选 当 FiledItem 的type === 'checkbox'时
	}

	// 当 FiledItem 的type === 'radio' | 'checkbox'时，options的参数类型
	interface IFieldOptions {
		labelKey?: string // 选项 label 的 key
		valueKey?: string // 选项 value 的 key
		isCheckAll?: boolean // 是否全选 当 FiledItem 的type === 'checkbox'时
		showCheckAll?: boolean // 是否显示全选 当 FiledItem 的type === 'checkbox'时
		checkAllText?: string // 全选默认显示的文本内容 当 FiledItem 的type === 'checkbox'时
		data: Record<string, any>[]
	}

	// type=‘checkbox’ / ‘radio’ / 'select’ 选择框 配置项
	interface SelectionboxAttributes {
		inputAttrs: InputAttributes
		optionConfig?: IFieldOptions // 格式参考 fieldItem options 配置项
	}

	// form 中 form-item 属性配置
	interface FieldAttributes {
		labelWidth?: string | number // 标签宽度，例如 '50px'。 可以使用 auto。
		rules?: FormItemRule[] // 表单验证规则。格式参考element-plus form 表单 或者参数类型声明
	}

	// form-item 输入框 - 待定
	interface FieldInputItem {
		inputAttrs?: InputAttributes
		activeValue?: any //当前值
	}

	interface FormItemConfig {
		fieldAttrs?: FieldAttributes
		inputAttrs?: InputAttributes
		optionAttrs?: IFieldOptions
	}
	interface BasicFormItemConfig extends InputAttributes {
		fieldAttrs?: FieldAttributes
		optionAttrs?: IFieldOptions
	}

	// form 表单配置项
	interface Options {
		labelWidth?: string | number // 标签的长度，
		labelSuffix?: string
		labelPosition?: 'left' | 'right' | 'top' // 表单域标签的位置， 当设置为 left 或 right 时，则也需要设置 label-width 属性
		disabled?: boolean // 是否禁用该表单内的所有组件。 如果设置为 true, 它将覆盖内部组件的 disabled 属性。
		size?: 'large' | 'small' | 'default' // 用于控制该表单内组件的尺寸
		showResetButton?: boolean // 是否展示重置按钮
		showCancelButton?: boolean // 是否展示取消按钮
		submitButtonText?: string // 提交按钮默认显示的文本内容
		resetButtonText?: string // 重置按钮默认显示的文本内容
		cancelButtonText?: string // 取消按钮默认显示的文本内容
	}
}
