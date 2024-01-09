interface InputDefaultConfig {
	type: string
	placeholder?: string
	autosize?: any
	options?: Form.IFieldOptions
	activeValue?: any
	isCheckAll?: boolean
	showCheckAll?: boolean
	checkAllText?: string
}
// 优雅解决typescript报错：“元素隐式具有 “any“ 类型，因为类型为 “string“ 的表达式不能用于索引类型”，解决方案：定义一个string作为key的类型
type stringKey = Record<string, InputDefaultConfig>

export default function formDefaultOptions(type: string = 'text', label: string = '') {
	const defaultConfig: stringKey = {
		text: {
			type: 'text',
			placeholder: '请输入' + label,
			activeValue: ''
		},
		textarea: {
			type: 'textarea',
			placeholder: '请输入' + label,
			activeValue: '',
			autosize: { minRows: 4 }
		},
		radio: {
			type: 'radio',
			placeholder: '请选择' + label,
			activeValue: ''
		},
		radioOption: {
			type: 'radio',
			options: {
				valueKey: 'value',
				labelKey: 'label',
				data: []
			}
		},
		checkbox: {
			type: 'checkbox',
			placeholder: '请选择' + label,
			activeValue: [],
			isCheckAll: false,
			showCheckAll: false,
			checkAllText: '全选'
		},
		checkboxOption: {
			type: 'checkbox',
			options: {
				valueKey: 'value',
				labelKey: 'label',
				data: []
			}
		},
		select: {
			type: 'checkbox',
			placeholder: '请选择' + label,
			activeValue: []
		},
		selectOption: {
			type: 'checkbox',
			options: {
				valueKey: 'value',
				labelKey: 'label',
				data: []
			}
		}
	}
	return defaultConfig[type] || {}
}
