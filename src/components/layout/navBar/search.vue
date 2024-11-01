/*
* @author: zhang jun
* @date:  2024-10-28 17:06:15
* @desc:
*/
<template>
    <div class="w-40 h-full flex-center cursor-pointer" @click="dialog = true">
        <svg-icon name="search"></svg-icon>
    </div>

    <el-dialog v-model="dialog" width="600" :show-close="false" append-to-body class="lt-menu-search">
        <el-input v-model="keyword" placeholder="请输入关键字" size="large">
            <template #prefix>
                <el-icon class="el-input__icon"><search /></el-icon>
            </template>
        </el-input>
        <template v-if="keyword">
            <div class="lt-search-title">菜单1</div>
            <div class="lt-content">
                <div class="lt-content-item flex items-center h-56 pl-12 cursor-pointer" v-for="item in 10">
                    <svg-icon name="home"></svg-icon>
                    <span class="ml-8 mr-8">首页</span>
                </div>
            </div>
        </template>
        <template v-else>
            <template v-if="historyList.length">
                <div class="lt-search-title">搜索历史</div>
                <div class="lt-content">
                    <div class="lt-content-item flex items-center h-56 pl-12 cursor-pointer" v-for="item in 10">
                        <svg-icon name="home"></svg-icon>
                        <span class="ml-8 mr-8">首页</span>
                    </div>
                </div>
            </template>
            <div v-else class="h-full flex-center">没有搜索历史</div>
        </template>
        <template #footer>
            <div class="lt-search-footer flex items-center justify-around">
                <div class="lt-shortcut-key flex-1 flex-center">
                    <div class="lt-key-btn flex-center">
                        <svg-icon name="enter" size="15" color="#909399"></svg-icon>
                    </div>
                    <div class="ml-8 fs-12">选择</div>
                </div>
                <div class="lt-shortcut-key flex-1 flex-center">
                    <div class="lt-key-btn flex-center">
                        <svg-icon name="up" size="15" color="#909399"></svg-icon>
                    </div>
                    <div class="lt-key-btn ml-8 flex-center">
                        <svg-icon name="down" size="15" color="#909399"></svg-icon>
                    </div>
                    <div class="ml-8 fs-12">切换</div>
                </div>
                <div class="lt-shortcut-key flex-1 flex-center">
                    <div class="lt-key-btn flex-center">
                        <svg-icon name="esc" size="15" color="#909399"></svg-icon>
                    </div>
                    <div class="ml-8 fs-12">关闭</div>
                </div>
            </div>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { useAppStore } from '@/stores/app'
const appStore = useAppStore()
const { historyList } = storeToRefs(appStore)
const dialog = ref(false)
const keyword = ref('')

</script>

<style lang="scss">
.lt-menu-search {
    background: rgba(246,246,247,1);
    border-radius: 8px;
    padding: 0;
    .el-dialog__header {
        display: none;
    }
    .el-dialog__body {
        padding: 12px;
    }
    .el-dialog__footer {
        padding-top: 0;
    }
    .lt-search-title {
        color: var(--hightlight-text-color);
        font-size: 14px;
        font-weight: 600;
        padding: 8px;
    }
    .lt-content {
        height: 320px;
        overflow-y: auto;
        &-item {
            background: #fff;
            border-radius: 4px;
            box-shadow: 0 1px 3px 0 #d4d9e1;
            margin-bottom: 8px;
            &:last-child {
                margin-bottom: 0;
            }
        }
    }
    .lt-search-footer {
        height: 44px;
        background: #fff;
        border-radius: 0 0 8px 8px;
        .lt-key-btn {
            width: 20px;
            height: 18px;
            border: 0;
            background: rgba(125,125,125,0.1);
            box-shadow: inset 0 -2px 0 0 #cdcde6, inset 0 0 1px 1px #fff, 0 1px 2px 1px rgba(30, 35, 90, .4);;
            border-radius: 2px;
            & + div {
                color: #909399;
            }
        }
    }
}
</style>
