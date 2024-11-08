import settings from '../settings'
import type {searchMenu} from "@/types/app";

export const useAppStore = defineStore('app', () => {
    // 侧边栏伸缩
    const collapse = ref(settings.collapse)
    // 侧边栏宽度
    const menuWidth = ref(settings.menuWidth)
    // 项目配置抽屉
    const drawer = ref(false)
    // 可搜索菜单列表
    const searchMenuList = ref<Array<searchMenu>>([])
    // 搜索历史
    const historyList = ref<Array<searchMenu>>([])
    // 修改侧边栏状态
    const setCollapse = () => {
        collapse.value = !collapse.value
    }
    // 修改抽屉状态
    const setDrawer = () => {
        drawer.value = !drawer.value
    }
    // 设置可搜索菜单列表
    const setSearchMenuList = (value:any) => {
        searchMenuList.value = value
    }
    // 修改菜单搜索历史
    const setHistoryList = (val: searchMenu) => {
        const index = historyList.value.findIndex(item => item.path === val.path)
        index >= 0 ? historyList.value.splice(index, 1) : historyList.value.length > 10 && historyList.value.pop()
        historyList.value.unshift(val)
    }
    return {
        collapse,
        menuWidth,
        drawer,
        searchMenuList,
        historyList,
        setCollapse,
        setDrawer,
        setSearchMenuList,
        setHistoryList
    }
},{
    persist: {
        storage: sessionStorage,
        pick: ['historyList'],
    }
})
