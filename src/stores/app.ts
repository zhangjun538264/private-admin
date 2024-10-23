import settings from '../settings'

export const useAppStore = defineStore('app', () => {
    // 侧边栏伸缩
    const collapse = ref(settings.collapse)
    // 侧边栏宽度
    const menuWidth = ref(settings.menuWidth)


    const setCollapse = () => {
        collapse.value = !collapse.value
    }

    return { collapse,setCollapse,menuWidth }
})
