/**
 * 定义了一个命名空间 BasicForm, 解决重名问题， 语法格式如下：namespace 命名空间名
 * 如果需要在外部可以调用 BasicForm 中的类和接口，则需要在类和接口添加 export 关键字。
 * 如果一个命名空间在一个单独的 TS 文件中，则应使用三斜杠 /// 引用它，语法格式如下：
 * /// <reference path = "IShape.ts" />
 */
export namespace IBasicForm {
	// 公共组件 - 基础表单 - 配置项
	export interface IFormProps {
		fieldList: Form.InputAttributes[]
		model?: Record<Form.InputAttributes['field'], Form.InputAttributes['defaultValue']>
		options?: Form.Options
	}

	// 公共组件 - 基础表单 - 回调
	export interface IEmitEvents {
		(e: 'submit', params: any): void
		(e: 'reset'): void
		(e: 'cancel'): void
	}
}
export namespace IBasicFormField {
	// 公共组件 - 输入框 - 配置项
	export interface FieldAttrs extends Form.BasicFormItemConfig {
		activeValue?: any
	}
	// 公共组件 - 文本输入框 - 配置项
	export interface FieldInputItem {
		inputAttrs: Form.InputAttributes
		activeValue: any //当前值
	}
	// 公共组件 - 选择输入框 - 配置项
	// export interface FieldSelectionboxItem extends Form.SelectionboxAttributes {
	export interface FieldSelectionboxItem {
		activeValue: any //当前值
		inputAttrs: Form.InputAttributes
		optionConfig?: Form.IFieldOptions // 格式参考 fieldItem options 配置项
	}

	// 公共组件 - 输入框 - 回调
	export interface EmitEvents {
		(e: 'update:activeValue', params: any): void
	}
}
