
/*
* @author: zhang jun
* @date:  2024-05-21 16:12:16
* @desc: 侧边栏菜单
*/
<template>
    <el-menu :default-active="route.path" router active-text-color="#ffd04b" background-color="#545c64" text-color="#fff" :collapse>
        <side-menu-item v-for="(item,index) in menuList" :key="index" :menu="item"></side-menu-item>
    </el-menu>
</template>

<script setup lang="ts">
import {useAppStore} from "@/stores/app";
import {useMenuStore} from "@/stores/menu";
const sideMenuItem = defineAsyncComponent(() => import('./sideMenuItem.vue'))
const { collapse } = storeToRefs(useAppStore())
const { menuList } = storeToRefs(useMenuStore())
const route = useRoute()
</script>

<style scoped lang='scss'>

</style>


