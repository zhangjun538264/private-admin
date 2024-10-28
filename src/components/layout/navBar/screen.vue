/*
* @author: zhang jun
* @date:  2024-10-28 17:06:15
* @desc:
*/
<template>
    <div class="w-40 h-full flex-center cursor-pointer" @click="fullScreen=!fullScreen">
        <svg-icon :name="fullScreen ? 'exit-screen' : 'full-screen'"></svg-icon>
    </div>
</template>

<script setup lang="ts">
const fullScreen = ref(false)

</script>

<style scoped lang="scss">

</style>
