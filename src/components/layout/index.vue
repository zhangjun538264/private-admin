/*
* @author: zhang jun
* @date:  2024-05-16 18:19:51
* @desc:
*/
<template>
    <el-container class="lt-layout-container h-full">
        <el-aside :width="collapse ? '64px' : menuWidth" :class="{'lt-collapse': collapse}">
            <el-scrollbar>
                <logo></logo>
                <side-menu></side-menu>
            </el-scrollbar>
        </el-aside>
        <el-container>
            <el-header class="p-0 flex justify-between">
                <nav-bar></nav-bar>
            </el-header>
            <el-main class="p-0">
                <el-scrollbar>

                    <router-view></router-view>
                </el-scrollbar>
            </el-main>
        </el-container>
        <lt-drawer v-model="appStore.drawer"></lt-drawer>
    </el-container>
</template>

<script setup lang="ts" name="layout">
import {useAppStore} from "@/stores/app";
import { Fold,Expand,Setting } from '@element-plus/icons-vue'

const logo = defineAsyncComponent(() => import('./sideBar/logo.vue'))
const sideMenu = defineAsyncComponent(() => import('./sideBar/sideMenu.vue'))
const navBar = defineAsyncComponent(() => import('./navBar/index.vue'))
const LtDrawer = defineAsyncComponent(() => import('./drawer/index.vue'))

const appStore = useAppStore()
const { collapse,menuWidth } = storeToRefs(appStore)

</script>

<style scoped lang="scss">
.lt-layout-container {
    &:deep(.el-aside) {
        transition: width 0.3s;
        .el-scrollbar {
            &__wrap, &__view {
                height: 100%;
            }
        }
        .el-menu {
            height: calc(100% - 60px);
            border-right: none;
            &:not(.el-menu--collapse) {
                width: v-bind(menuWidth);
            }
        }

    }
    &:deep(.lt-custom-drawer) {
        width: 300px !important;
        .el-drawer__body {
            border-top: 1px solid #dedede;
        }
    }
}
</style>
<style lang="scss">
.lt-collapse {
    .lt-menu-title {
        display: none;
    }
}
</style>
