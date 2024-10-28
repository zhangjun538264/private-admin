import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import ElementPlus from 'element-plus'


// 样式
import 'element-plus/dist/index.css'
import './assets/styles/index.scss'
import 'animate.css'
import 'uno.css'

// 注册 svg 图标
import 'virtual:svg-icons-register'
import svgIcon from '@/components/svgIcon/index.vue'


const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus, { zIndex: 3000 })
app.component('svgIcon', svgIcon)

app.mount('#app')
