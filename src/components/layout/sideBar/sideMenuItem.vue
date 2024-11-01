/*
* @author: zhang jun
* @date:  2024-05-21 16:48:05
* @desc:
*/
<template>
    <el-menu-item v-if="!menu.children" :index="menu.path">
        <el-icon>
            <svg-icon :name="menu.icon" size="20"></svg-icon>
        </el-icon>
        <template #title>
            <span class="lt-menu-title">{{menu.title}}</span>
        </template>
    </el-menu-item>
    <el-sub-menu v-else :index="menu.path">
        <template #title>
            <el-icon>
                <svg-icon :name="menu.icon" size="20"></svg-icon>
            </el-icon>
            <span class="lt-menu-title">{{menu.title}}</span>
        </template>
        <side-menu-item v-for="(item,index) in menu.children" :key="index" :menu="item"></side-menu-item>
    </el-sub-menu>
</template>

<script setup lang="ts">
const sideMenuItem = defineAsyncComponent(() => import('./sideMenuItem.vue'))
// 使用异步引入组件，菜单栏折叠/展开会抖动
// const svgIcon = defineAsyncComponent(() => import('@/components/svgIcon/index.vue'))
const props = defineProps({
    menu: {
        type: Object,
        default: () => ({
            children: [],
            path: '',
            icon: '',
            title: '',
        })
    }
})
</script>

<style scoped lang="scss">

</style>
