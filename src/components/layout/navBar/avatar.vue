/*
* @author: zhang jun
* @date:  2024-10-28 19:25:20
* @desc:
*/
<template>
    <el-dropdown trigger="click" class="lt-avatar h-full pl-10 pr-10">
        <div class="flex items-center">
            <img src="../../../assets/img/avatar.awebp" alt="">
            <span class="pl-8">admin</span>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item>个人中心</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.lt-avatar {

    img {
        width: 24px;
        height: 24px;
    }
}

</style>
