/*
* @author: zhang jun
* @date:  2024-10-24 19:07:22
* @desc:
*/
<template>
    <div class="h-full flex items-center">
        <el-icon class="w-60 h-full flex items-center cursor-pointer" size="20" @click="setCollapse">
            <Fold v-if="collapse"/>
            <Expand v-else/>
        </el-icon>
        <el-breadcrumb>
            <transition-group enter-active-class="animate__animated animate__fadeInRight">
                <el-breadcrumb-item v-for="item in breadcrumb" :key="item.path">{{item.meta.title}}</el-breadcrumb-item>
            </transition-group>
        </el-breadcrumb>
    </div>
    <div class="w-100 h-full"></div>
</template>

<script setup lang="ts">
import {Expand, Fold} from "@element-plus/icons-vue";
const appStore = useAppStore()
import type { RouteLocationMatched } from 'vue-router'
import {useAppStore} from "@/stores/app";
const route = useRoute()
const { collapse } = storeToRefs(useAppStore())
const setCollapse = () => {
    appStore.setCollapse()
}
const breadcrumb = ref<Array<RouteLocationMatched>>([])

watch(() => route.path, val => {
    const { matched } = route
    const meta = {title: '首页'}
    const arr:RouteLocationMatched[] = []
    matched.forEach((item,index) => {
        const { name } = item
        index === 0 ? arr.push({...item, meta}) : (name !== 'home' && arr.push(item))
    })
    breadcrumb.value = arr
},{
    immediate: true,
    deep: true
})


</script>

<style scoped lang="scss">

</style>
