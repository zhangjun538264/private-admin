import {createRouter, createWebHistory, createWebHashHistory, type RouteRecordRaw, type NavigationGuardNext, type RouteLocationNormalized,} from 'vue-router'
import type {RouteItem, SearchMenu} from '@/types/app'
import _ from 'lodash'
import { useAppStore } from '@/stores/app'
import { useMenuStore } from "@/stores/menu";

// ../views/*.vue: 匹配所有以 /views 开始 .vue 文件 (不含子文件夹)
// ../views/*/*.vue: 匹配所有以 /views 开始 .vue 文件 (一级子文件夹),
// ../views/**/*.vue 匹配所有以 /views 开始的 .vue 文件 (包含所有子文件夹)
const modules = import.meta.glob('../views/**/*.vue')
const searchMenuList: Array<SearchMenu> = []
// 白名单路由
const whiteList = ["/login"];

// 生成路由数据
const dynamicRoute = (menuList: any,address: string[]):[] => {
    return menuList.map((item: any) => {
        const { routePage, path, meta, title, children} = item
        const pagePath = routePage.startsWith('/') ? routePage : `/${routePage}`
        const name = path.slice(1).replaceAll('/', '.')
        const obj: RouteItem = {path, name, meta: {...meta, title,}}
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

// 重定向到登录页
const redirectToLogin = (to: RouteLocationNormalized, next: NavigationGuardNext) => {
    const params = new URLSearchParams(to.query as Record<string, string>);
    const queryString = params.toString();
    const redirect = queryString ? `${to.path}?${queryString}` : to.path;
    next(`/login?redirect=${encodeURIComponent(redirect)}`);
}

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'login',
            component: () => import('../views/login/index.vue')
        },
        {
            path: '/',
            name: 'layout',
            redirect: '/home',
            component: () => import('../components/layout/index.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('../views/home/index.vue'),
                    meta: {
                        title: '首页',
                    }
                }
            ]
        }
    ]
})

//添加动态路由
router.beforeEach((to, from, next) => {
    const appStore = useAppStore(),
        menuStore = useMenuStore()
    const { isLoadRouter,menuList } = storeToRefs(menuStore)
    const { isLogin } = storeToRefs(appStore)
    // 判断是否登录
    if(isLogin.value) {
        if(to.path === '/login') {
            // 已登录，访问登录页，跳转到首页
            next({ path: '/home' });
        } else {
            if(isLoadRouter.value) {
                if (to.matched.length === 0) {
                    // 路由未匹配，跳转到404
                    next("/404");
                } else {
                    // 动态设置页面标题
                    const title = (to.params.title as string) || (to.query.title as string);
                    if (title) {
                        to.meta.title = title;
                    }
                    next();
                }
            } else {
                try {
                    const [home,...menu] = menuList.value
                    const routes = dynamicRoute(menu,[])
                    appStore.setSearchMenuList(searchMenuList)
                    routes.forEach((item: RouteRecordRaw) => router.addRoute('layout',item))
                    menuStore.setIsLoadRouter(true)
                    // 解决页面刷新时，动态路由丢失的问题
                    next({...to, replace: true})
                } catch (error) {
                    // 路由加载失败，重置 token 并重定向到登录页
                    appStore.setIsLogin(false)
                    redirectToLogin(to, next);
                }
            }
        }
    } else {
        if(whiteList.includes(to.path)) {
            next()
        } else {
            redirectToLogin(to, next)
        }
    }
})

export default router
