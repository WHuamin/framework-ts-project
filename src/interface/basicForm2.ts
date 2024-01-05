// 公共组件 - 基础表单 - 配置项
export interface IFormProps {
	fieldList: Form.FieldItemOptions[]
	model?: Record<Form.FieldItemOptions['field'], Form.FieldItemOptions['defaultValue']>
	options?: Form.Options
}
