/*
* @author: zhang jun
* @date:  2024-10-28 17:06:15
* @desc:
*/
<template>
    <div class="w-40 h-full flex-center cursor-pointer" @click="openSettingDrawer">
        <svg-icon name="setting"></svg-icon>
    </div>
</template>

<script setup lang="ts">
import {useAppStore} from "@/stores/app";

const appStore = useAppStore()

const openSettingDrawer = () => {
    appStore.setDrawer()
}

</script>

<style scoped lang="scss">

</style>
