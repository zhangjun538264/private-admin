import settings from '../settings'
import type {SearchMenu} from "@/types/app";

export const useAppStore = defineStore('app', () => {
    // 是否登录
    const isLogin = ref(false)
    // 侧边栏伸缩
    const collapse = ref(settings.collapse),
    // 侧边栏宽度
    menuWidth = ref(settings.menuWidth),
    // tags-view 是否显示
    showTagView = ref(settings.showTagView),
    // 项目配置抽屉
    drawer = ref(false),
    // 可搜索菜单列表
    searchMenuList = ref<Array<SearchMenu>>([]),
    // 搜索历史
    historyList = ref<Array<SearchMenu>>([]),
    // 城市编码
    locationId = ref(settings.locationId)

    // 修改登录状态
    const setIsLogin = (val: boolean) => {
        isLogin.value = val
    }
    // 修改侧边栏状态
    const setCollapse = () => {
        collapse.value = !collapse.value
    }
    // 修改tags-view状态
    const setTagView = (val: boolean) => {
        showTagView.value = val
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
    const setHistoryList = (val: SearchMenu) => {
        const index = historyList.value.findIndex(item => item.path === val.path)
        index >= 0 ? historyList.value.splice(index, 1) : historyList.value.length > 10 && historyList.value.pop()
        historyList.value.unshift(val)
    }
    const setLocationId = (val: string) => {
        locationId.value = val
    }
    return {
        isLogin,
        collapse,
        menuWidth,
        showTagView,
        drawer,
        searchMenuList,
        historyList,
        locationId,
        setIsLogin,
        setCollapse,
        setTagView,
        setDrawer,
        setSearchMenuList,
        setHistoryList,
        setLocationId
    }
},{
    persist: {
        storage: sessionStorage,
        pick: ['isLogin', 'historyList', 'locationId'],
    }
})
