/*
* @author: zhang jun
* @date:  2024-10-24 19:07:22
* @desc:
*/
<template>
    <div class="lt-navBar-left h-full flex items-center">
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
    <div class="lt-navBar-right h-full flex items-center" style="min-width: 200px">
        <search></search>
        <screen></screen>
        <avatar></avatar>
        <setting></setting>
    </div>
</template>

<script setup lang="ts">
import {Expand, Fold,Search} from "@element-plus/icons-vue";
import type { RouteLocationMatched } from 'vue-router'
import {useAppStore} from "@/stores/app";
const search = defineAsyncComponent(() => import('./search.vue'))
const screen = defineAsyncComponent(() => import('./screen.vue'))
const avatar = defineAsyncComponent(() => import('./avatar.vue'))
const setting = defineAsyncComponent(() => import('./setting.vue'))
const appStore = useAppStore()
const route = useRoute()

const { collapse } = storeToRefs(appStore)
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
.lt-navBar-right {
    >div {
        &:hover {
            background: var(--hover-bg);
        }
    }
}
</style>
