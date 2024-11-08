/*
* @author: zhang jun
* @date:  2024-10-28 17:06:15
* @desc:
*/
<template>
    <div class="w-40 h-full flex-center cursor-pointer" @click="dialog = true">
        <svg-icon name="search"></svg-icon>
    </div>

    <el-dialog v-model="dialog" width="600" :show-close="false" append-to-body @close="closeDialog" class="lt-menu-search">
        <el-input
            v-model="keyword"
            placeholder="请输入菜单名称关键字搜索"
            size="large"
            clearable
            @input="getMenuList"
            @keyup.enter="selectedMenuItem"
            @keydown.up.prevent="changeMenuIndex('up')"
            @keydown.down.prevent="changeMenuIndex('down')"
            @keydown.esc="closeDialog">
            <template #prefix>
                <el-icon class="el-input__icon"><search /></el-icon>
            </template>
        </el-input>
        <template v-if="keyword">
            <template v-if="menuList.length">
                <div class="lt-search-title">菜单</div>
                <div class="lt-content">
                    <div
                        class="lt-content-item flex items-center h-56 pl-12 cursor-pointer"
                        :class="{'lt-content-item-selected': menuIndex === index}"
                        @click="clickMenuItem(index)"
                        @mouseover="menuIndex = index"
                        v-for="(item,index) in menuList"
                        :key="item.path">
                        <svg-icon name="menu"></svg-icon>
                        <span class="ml-8 mr-8">{{item.title}}</span>
                    </div>
                </div>
            </template>
            <div v-else class="h-200 flex-center">没有相关搜索结果</div>
        </template>
        <template v-else>
            <template v-if="historyList.length">
                <div class="lt-search-title">搜索历史</div>
                <div class="lt-content">
                    <div
                        class="lt-content-item flex items-center h-56 pl-12 cursor-pointer"
                        :class="{'lt-content-item-selected': menuIndex === index}"
                        @click="clickMenuItem(index)"
                        @mouseover="menuIndex = index"
                        v-for="(item,index) in historyList"
                        :key="item.path">
                        <svg-icon name="his-menu"></svg-icon>
                        <span class="ml-8 mr-8">{{item.title}}</span>
                    </div>
                </div>
            </template>
            <div v-else class="h-200 flex-center">没有搜索历史</div>
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
import _ from "lodash";
import type {searchMenu} from "@/types/app";
const appStore = useAppStore()
const router = useRouter()
const { searchMenuList, historyList } = storeToRefs(appStore)
const dialog = ref(false)
const keyword = ref('')
const menuIndex = ref(0)
const menuList = ref<searchMenu[]>([])
// 关闭搜索框
const closeDialog = () => {
   setTimeout(() => {
       keyword.value = ''
       menuList.value = []
       menuIndex.value = 0
   },100)
}
// 菜单搜索
const getMenuList = _.debounce(function () {
    menuList.value = searchMenuList.value.filter((item: searchMenu) => item.title.includes(keyword.value))
    menuIndex.value = 0
}, 200)
// 选择菜单 (键盘 enter)
const selectedMenuItem = () => {
    if (!menuList.value.length) return
    const menu = menuList.value[menuIndex.value]
    dialog.value = false
    router.push({path: menu.path})
    appStore.setHistoryList(menu)
}
// 选择菜单 (鼠标点击)
const clickMenuItem = (index: number) => {
    const menu = menuList.value[index]
    dialog.value = false
    router.push({path: menu.path})
    appStore.setHistoryList(menu)
}
const changeMenuIndex = (direction: string) => {
    if (!menuList.value.length) return
    if (direction === 'up') {
        menuIndex.value = menuIndex.value === 0 ? menuList.value.length - 1 : menuIndex.value - 1
    } else {
        menuIndex.value = menuIndex.value === menuList.value.length - 1 ? 0 : menuIndex.value + 1
    }
}

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
        min-height: 200px;
        max-height: 320px;
        overflow-y: auto;
        &-item {
            background: #fff;
            border-radius: 4px;
            box-shadow: 0 1px 3px 0 #d4d9e1;
            margin-bottom: 8px;
            &-selected {
                background: var(--hightlight-text-color);
                color: #fff;
            }
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
