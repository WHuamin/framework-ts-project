import { IGlobalLoading } from '@/interface/globalLoading'
// 全局默认设置
export namespace GlobalDefaultConstant {
	export const ElementLoading: IGlobalLoading.ILoadingConfig = {
		lock: true,
		text: '加载中...',
		background: 'rgba(0, 0, 0, 0.4)',
		fullscreen: false
	}
}
