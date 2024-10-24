import settings from '../settings'

export const useAppStore = defineStore('app', () => {
    // 侧边栏伸缩
    const collapse = ref(settings.collapse)
    // 侧边栏宽度
    const menuWidth = ref(settings.menuWidth)
    // 项目配置抽屉
    const drawer = ref(false)

    const setCollapse = () => {
        collapse.value = !collapse.value
    }
    const setDrawer = () => {
        drawer.value = !drawer.value
    }

    return { collapse,menuWidth,drawer,setCollapse,setDrawer}
})
