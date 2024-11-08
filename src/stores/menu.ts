export const useMenuStore = defineStore('menu', () => {
    // 是否生成过动态路由
    const isLoadRouter = ref(false)
    // 搜索菜单列表
    const searchMenuList = ref([])
    // 菜单 (动态路由) 列表
    const menuList = ref([
        {
            parent: '',
            icon: 'home',
            title: '首页',
            path: '/home',
            routePage: '/views/home',
            meta: {},
            children: []
        },
        {
            parent: '',
            icon: 'home',
            title: '系统管理',
            path: '/system',
            routePage: '',
            meta: {},
            children: [
                {
                    parent: '',
                    icon: '',
                    title: '用户管理',
                    path: '/system/user',
                    routePage: '/views/system/user',
                    meta: {},
                    children: []
                },
                {
                    parent: '',
                    icon: '',
                    title: '角色管理',
                    path: '/system/role',
                    routePage: '/views/system/role',
                    meta: {},
                    children: []
                },
                {
                    parent: '',
                    icon: '',
                    title: '菜单管理',
                    path: '/system/menu',
                    routePage: '/views/system/menu',
                    meta: {},
                    children: []
                },
            ]
        },
    ])
    const setIsLoadRouter = (value: boolean) => {
        isLoadRouter.value = value
    }
    const setSearchMenuList = (value:any) => {
        searchMenuList.value = value
    }
    return { isLoadRouter,menuList,setIsLoadRouter }
})
