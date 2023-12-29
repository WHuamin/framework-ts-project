import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import pinia from '@/stores'

createApp(App).use(pinia).use(router).mount('#app')
// const setupApp = async () => {
// 	const app = createApp(App)
// 	// 创建路由
// 	setupRouter(app)
// 	app.mount('#app')
// }

// setupApp()
