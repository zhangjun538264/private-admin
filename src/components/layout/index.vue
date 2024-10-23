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
                <div class="h-full flex items-center">
                    <el-icon class="w-60 h-full flex items-center cursor-pointer" size="20" @click="setCollapse">
                        <Fold v-if="collapse"/>
                        <Expand v-else/>
                    </el-icon>
                    <el-breadcrumb>
                        <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
                        <el-breadcrumb-item>promotion management</el-breadcrumb-item>
                        <el-breadcrumb-item>promotion list</el-breadcrumb-item>
                        <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
                    </el-breadcrumb>
                </div>
                <div class="w-100 h-full"></div>
            </el-header>
            <el-main class="p-0">
                <el-scrollbar>
                    <router-view></router-view>
                </el-scrollbar>
            </el-main>
        </el-container>
    </el-container>
</template>

<script setup lang="ts" name="layout">
import {useAppStore} from "@/stores/app";
import { Fold,Expand,Setting } from '@element-plus/icons-vue'

const logo = defineAsyncComponent(() => import('./sideBar/logo.vue'))
const sideMenu = defineAsyncComponent(() => import('./sideBar/sideMenu.vue'))

const appStore = useAppStore()
const { collapse,menuWidth } = storeToRefs(appStore)
const setCollapse = () => {
    appStore.setCollapse()
}

</script>

<style scoped lang="scss">
.lt-layout-container {
    &:deep(.el-aside) {
        background: #545c64;
        transition: width 0.2s;
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
    &:deep(.el-header) {
        border-bottom: 1px solid #e4e7ed;
    }
    &:deep(.el-main) {

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
