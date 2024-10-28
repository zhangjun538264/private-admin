/*
* @author: zhang jun
* @date:  2024-10-28 19:25:20
* @desc:
*/
<template>
    <el-dropdown>
        <span class="el-dropdown-link">
<!--            <el-icon class="el-icon&#45;&#45;right">-->
<!--                <svg-icon name="home"></svg-icon>-->
<!--            </el-icon>-->
        </span>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">

import SvgIcon from "@/components/svgIcon/index.vue";
</script>

<style scoped lang="scss">

</style>
