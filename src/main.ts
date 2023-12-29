import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
// const setupApp = async () => {
// 	const app = createApp(App)
// 	// 创建路由
// 	setupRouter(app)
// 	app.mount('#app')
// }

// setupApp()
