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
import {useAppStore} from "@/stores/app";
import {Expand, Fold} from "@element-plus/icons-vue";
const appStore = useAppStore()
const route = useRoute()
const { collapse } = storeToRefs(useAppStore())
const setCollapse = () => {
    appStore.setCollapse()
}
const breadcrumb = ref([])

watch(() => route.path, val => {
    const { matched } = route
    breadcrumb.value = matched.filter(item => item.path !== '/')
},{
    immediate: true,
    deep: true
})


</script>

<style scoped lang="scss">

</style>
