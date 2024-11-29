import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'
import persistedState from 'pinia-plugin-persistedstate'
import './mock'


// 样式
import 'element-plus/dist/index.css'
import './assets/styles/index.scss'
import 'animate.css'
import 'uno.css'

// 注册 svg 图标
import 'virtual:svg-icons-register'
import svgIcon from '@/components/svgIcon/index.vue'


const app = createApp(App)

const pinia = createPinia()
pinia.use(persistedState)

app.use(pinia)
app.use(router)
app.use(ElementPlus, { zIndex: 3000 })
app.component('svgIcon', svgIcon)

app.mount('#app')
