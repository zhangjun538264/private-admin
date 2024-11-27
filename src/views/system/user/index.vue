/*
* @author: zhang jun
* @date:  2024-05-27 15:18:27
* @desc:
*/
<template>
    <div>
        <el-button type="primary" @click="initMap">测试一下接口</el-button>
    </div>
</template>

<script setup lang="ts">
import { getList } from '@/api/api'
const initMap = () => {
    getList({pageSize: 1,pageNum: 10}).then(res => {
        console.log("=>(index.vue:16) res", res);

    })
}

</script>

<style scoped lang="scss">
#map {
    width: 100%;
    height: 500px;
}
</style>
