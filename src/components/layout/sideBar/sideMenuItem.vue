/*
* @author: zhang jun
* @date:  2024-05-21 16:48:05
* @desc:
*/
<template>
    <el-menu-item v-if="!menu.children" :index="menu.path">
        <el-icon>
            <i class="fs-20" :class="menu.icon"></i>
        </el-icon>
        <template #title>
            <span class="lt-menu-title">{{menu.title}}</span>
        </template>
    </el-menu-item>
    <el-sub-menu v-else :index="menu.path">
        <template #title>
            <el-icon>
                <i class="fs-20" :class="menu.icon"></i>
            </el-icon>
            <span class="lt-menu-title">{{menu.title}}</span>
        </template>
        <side-menu-item v-for="(item,index) in menu.children" :key="index" :menu="item"></side-menu-item>
    </el-sub-menu>
</template>

<script setup lang="ts">
const sideMenuItem = defineAsyncComponent(() => import('./sideMenuItem.vue'))
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
