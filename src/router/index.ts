import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/',
            component: () => import('../components/layout/index.vue'),
            children: [
                {
                    path: '/home',
                    name: 'home',
                    component: () => import('@/views/home/index.vue'),
                    meta: {
                        title: '首页'
                    },
                },
                {
                    path: '/system',
                    name: 'system',
                    meta: {
                        title: '系统管理'
                    },
                    children: [
                        {
                            path: '/system/user',
                            name: 'system.user',
                            component: () => import('@/views/system/user/index.vue'),
                            meta: {
                                title: '用户管理'
                            }
                        },
                        {
                            path: '/system/role',
                            name: 'system.role',
                            component: () => import('@/views/system/role/index.vue'),
                            meta: {
                                title: '角色管理'
                            }
                        },
                        {
                            path: '/system/menu',
                            name: 'system.menu',
                            component: () => import('@/views/system/role/index.vue'),
                            meta: {
                                title: '菜单管理'
                            }
                        }
                    ]
                },
                // {
                //     path: 'about',
                //     name: 'about',
                //     component: () => import('../views/About.vue')
                // }
            ]
        }
    ]
})

export default router
