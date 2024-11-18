/**
* @author: zhang jun
* @date: 2022/6/20 13:08
* @desc: 历史浏览记录以及其他操作
*/
<template>
    <div class='lt-scroll-tag flex'>
        <!-- 向左移动 -->
        <div class="lt-scroll-left" @click="pre">
            <el-icon><ArrowLeft/></el-icon>
        </div>
        <div class="lt-tag-container" ref="tagsBar">
            <div class="lt-tags-roll">
                <el-tag
                    v-for="(tag,index) in tagList"
                    :key="tag.tagName"
                    :class="{'lt-tag-active':activeTag === tag.tagName}"
                    :closable="index !== 0"
                    @close="closeTag(tag,index)"
                    @click="router.push({path: tag.path})"
                >{{ tag.tagName }}</el-tag>
            </div>
        </div>
        <div class="lt-scroll-right" @click="next">
            <el-icon><ArrowRight/></el-icon>
        </div>
        <div class="lt-refresh-btn" @click="router.go(0)">
            <el-icon><RefreshRight/></el-icon>
        </div>
        <div class="lt-tag-tool">
            <el-dropdown>
                <span class="el-dropdown-link">
                    <el-icon><ArrowDown/></el-icon>
                </span>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>全屏展示</el-dropdown-item>
                        <el-dropdown-item>Action 2</el-dropdown-item>
                        <el-dropdown-item>Action 3</el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useScrollTags } from '@/stores/scrollTag.js';
import {ArrowLeft, ArrowRight, ArrowDown, RefreshRight,FullScreen} from '@element-plus/icons-vue'

const router = useRouter()
const scrollTag = useScrollTags()
let tagsBox = ref()
let tagsBar = ref()
//tag 列表
const tagList = ref(scrollTag.tagsList)
//当前激活tag
const activeTag = ref(scrollTag.currentTag)
// 关闭 tag
const closeTag = (tag,index) => {
    if (tag.tagName === activeTag.value) {
        scrollTag.deleteTag(index)
        router.go(-1)
    } else {
        scrollTag.deleteTag(index)
    }
}
//移动到最右边
const next = () => {
    let boxWidth = tagsBar.value.offsetWidth
    let tabsBarWidth = tagsBar.value.children[0].offsetWidth
    translateX(tabsBarWidth - boxWidth)
}
//移动到最左边
const pre = () => {
    tagsBar.value.children[0].style.transform = `translateX(0px)`
}
//移动tag
const translateX = (num) => {
    const moveX = num < 0 ? 0 : num;
    tagsBar.value.children[0].style.transform = `translateX(-${moveX}px)`
}
// 监听激活 tag
watch(() => scrollTag.currentTag, val => {
    // // 高亮 tag
    activeTag.value = val
    //切换或新增 tag 时移动
    let boxWidth = tagsBar.value.offsetWidth
    let tag = tagsBar.value
    let tagsBarWidth = 0
    for (let index = 0; index < tagList.value.length; index++) {
        if (tagList.value[index].tagName === val) {
            nextTick(() => {
                let a = tag.children[0].children
                for (let i = 0;i <= index; i++) {
                    let getStyle = getComputedStyle(a[i], null)
                    let marginLeft = parseFloat(getStyle.marginLeft.substr(0, getStyle.marginLeft.length - 2))
                    let marginRight = parseFloat(getStyle.marginRight.substr(0, getStyle.marginRight.length - 2))
                    tagsBarWidth += marginLeft + marginRight + a[i].offsetWidth
                }
                translateX(tagsBarWidth + 10 - boxWidth)
            })
            return
        }
    }
    nextTick(() => {
        tagsBarWidth = tag.children[0].offsetWidth
        translateX(tagsBarWidth + 10 - boxWidth)
    })
})
</script>

<style scoped lang='scss'>
.lt-scroll-tag {
    width: 100%;
    height: 40px;
    background: #fff;

    > div {
        height: 100%;
        border-right: 1px solid #ededed;

        &:not(.lt-tag-container) {
            width: 40px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        &:last-child {
            border-right: none;
        }

        &.lt-tag-container {
            width: calc(100% - 160px);
            height: 100%;
            display: flex;
            align-items: center;
            overflow: hidden;
            .lt-tags-roll {
                padding: 0 5px;
                display: flex;
                align-items: center;
                flex-wrap: nowrap;
                transition: transform ease-in-out 0.5s;
            }
            &::v-deep(.lt-tags-roll) {
                .el-tag {
                    height: 30px;
                    cursor: pointer;
                    color: #666;
                    background: transparent;
                    margin-right: 5px;
                    border-radius: 2px;
                    border-color: #ededed;
                    letter-spacing: 1px;
                    &:last-child {
                        margin-right: 0;
                    }
                    &:hover {
                        color: #409eff;
                        background: #ecf5ff;
                        .el-tag__close {
                            color: #fff;
                            background: #409eff;
                        }
                    }
                    &__close {
                        color: #666;
                    }
                    &.lt-tag-active {
                        color: #409eff;
                        background: #ecf5ff;
                        .el-tag__close {
                            color: #fff;
                            background: #409eff;
                        }
                    }
                }
            }
        }
    }

}
</style>
