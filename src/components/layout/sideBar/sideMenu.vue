
/*
* @author: zhang jun
* @date:  2024-05-21 16:12:16
* @desc: 侧边栏菜单
*/
<template>
    <el-menu :default-active="route.path" router active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" :collapse>
        <side-menu-item v-for="(item,index) in menu" :key="index" :menu="item"></side-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import {useAppStore} from "@/stores/app";
const sideMenuItem = defineAsyncComponent(() => import('./sideMenuItem.vue'))
const { collapse } = storeToRefs(useAppStore())
const route = useRoute()
const menu = [
    {
        icon: 'lt-icon lt-shouye',
        title: '首页',
        path: '/home',
    },
    {
        icon: 'lt-icon lt-shouye',
        title: '系统管理',
        path: '/system',
        children: [
            {
                title: '用户管理',
                path: '/system/user',
            },
            {
                title: '角色管理',
                path: '/system/role',
            },
            {
                title: '菜单管理',
                path: '/system/menu',
            },
        ]
    },
]
</script>

<style scoped lang='scss'>

</style>


