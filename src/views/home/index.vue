/*
* @author: zhang jun
* @date:  2024-05-24 14:06:47
* @desc:
*/
<template>
    <div class="flex-center">
        <el-button type="primary" @click="test">按钮</el-button>
        <svg-icon name="home" color="#dedede"></svg-icon>
    </div>
</template>

<script setup lang="ts">
import {useAppStore} from "@/stores/app";
const svgIcon = defineAsyncComponent(() => import('@/components/svgIcon/index.vue'))

const appStore = useAppStore()

const test = () => {
    // setCssVariable('--theme-bg', 'red')
    appStore.setDrawer()
}
</script>

<style scoped lang="scss">

</style>
