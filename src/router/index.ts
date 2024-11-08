import {createRouter, createWebHistory, type RouteRecordRaw,} from 'vue-router'
import type {routeItem, searchMenu} from '@/types/app'
import _ from 'lodash'
import { useAppStore } from '@/stores/app'
import { useMenuStore } from "@/stores/menu";

// ../views/*.vue: 匹配所有以 /views 开始 .vue 文件 (不含子文件夹)
// ../views/*/*.vue: 匹配所有以 /views 开始 .vue 文件 (一级子文件夹),
// ../views/**/*.vue 匹配所有以 /views 开始的 .vue 文件 (包含所有子文件夹)
const modules = import.meta.glob('../views/**/*.vue')
const searchMenuList: Array<searchMenu> = []

// 生成路由数据
const dynamicRoute = (menuList: any,address: string[]):[] => {
    return menuList.map((item: any) => {
        const {icon, routePage, path, meta, title, children} = item
        const pagePath = routePage.startsWith('/') ? routePage : `/${routePage}`
        const name = path.slice(1).replaceAll('/', '.')
        const obj: routeItem = {path, name, meta: {...meta, title,}}
        const addr:string[] = _.cloneDeep(address)
        addr.push(title)
        if (!children.length) {
            obj.component = modules[`..${pagePath}.vue`] || modules[`..${pagePath}/index.vue`]
            searchMenuList.push({name, path, title,address: addr})
        } else {
            obj.children = dynamicRoute(children,addr)
        }
        return obj
    })
}

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'layout',
            // redirect: '/home',
            component: () => import('../components/layout/index.vue'),
            children: []
        }
    ]
})

//添加动态路由
router.beforeEach((to, from, next) => {
    const appStore = useAppStore(),
        menuStore = useMenuStore()
    const { isLoadRouter,menuList } = storeToRefs(menuStore)
    if (!isLoadRouter.value) {
        const routes = dynamicRoute(menuList.value,[])
        appStore.setSearchMenuList(searchMenuList)
        routes.forEach((item: RouteRecordRaw) => router.addRoute('layout',item))
        menuStore.setIsLoadRouter(true)
        // 解决页面刷新时，动态路由丢失的问题
        next({...to, replace: true})
    } else {
        next()
    }
})

export default router
