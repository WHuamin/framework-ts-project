import { ref } from 'vue'
import { ElLoading } from 'element-plus'
import { IGlobalLoading } from '@/interface/globalLoading'
import { GlobalDefaultConstant } from '@/constant/globalDefaults'

export namespace ElementLoading {
	const loading = ref<boolean | any>(false)
	export const openContainerLoading = (options: IGlobalLoading.ILoadingConfig = {}) => {
		loading.value = ElLoading.service({
			...GlobalDefaultConstant.Loading,
			...options
		})
	}
	export const closeContainerLoading = () => {
		loading.value.close()
	}
}
