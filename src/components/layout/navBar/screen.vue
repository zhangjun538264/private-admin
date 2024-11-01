/*
* @author: zhang jun
* @date:  2024-10-28 17:06:15
* @desc:
*/
<template>
    <div class="w-40 h-full flex-center cursor-pointer" @click="toggle">
        <svg-icon :name="isFullscreen ? 'exit-screen' : 'full-screen'"></svg-icon>
    </div>
</template>

<script setup lang="ts">
const { isFullscreen,toggle } = useFullscreen()
</script>

<style scoped lang="scss"></style>
