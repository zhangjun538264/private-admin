/*
* @author: zhang jun
* @date:  2024-05-24 14:06:47
* @desc:
*/
<template>
    <div class="lt-home">
        <div class="lt-home-head flex justify-between items-center">
            <div class="lt-home-user flex items-center h-full">
                <div class="lt-user-avatar">
                    <img src="../../assets/img/avatar.awebp" alt="">
                </div>
                <div class="lt-user-info h-80">
                    <div class="flex items-center">{{ getTimeOfDay() }}好，系统管理员，欢迎回来！</div>
                    <div class="flex items-center">
                        <el-tooltip effect="dark" content="随机输出一段笑话、情话、骚话、舔狗语录" placement="bottom">
                            <el-tag type="success">{{speech.name}}</el-tag>
                        </el-tooltip>
                        <el-tooltip effect="dark" placement="bottom">
                            <div class="lt-home-speech ml-8 mr-8 text-ellipsis">{{speech.data}}</div>
                            <template #content>
                                <div class="w-300">{{speech.data}}</div>
                            </template>
                        </el-tooltip>
                        <span class="h-full flex items-center cursor-pointer" @click="refreshSpeech">
                        <svg-icon :class="{'refresh': refresh}" name="refresh" size="24"></svg-icon>
                        <span class="h-full flex items-center" size="24">换一换</span>
                    </span>
                    </div>
                </div>
            </div>
            <lt-weather></lt-weather>
        </div>
        <card-box title="导航" tip="做专业的前端平台，提供你需要的东西,解放你的收藏夹，让它们只做最主要的事情">
            <template #body>
                <div class="lt-collect-website flex justify-between">
                    <!-- 导航菜单 -->
                    <div class="lt-collect-website-menu">
                        <el-menu :default-active="collectList[0].id" >
                            <el-menu-item v-for="(item,index) in collectList" :key="item.id" :index="item.id" @click="clickMenuItem(`menu${index}`)">
                                <svg-icon name="home" size="16"></svg-icon>
                                <template #title><span class="ml-8">{{item.menuName}}</span></template>
                            </el-menu-item>
                        </el-menu>
                    </div>
                    <!-- 卡片内容 -->
                    <div class="lt-collect-website-list">
                        <div class="lt-collect-website-item" v-for="(item,index) in collectList" :key="item.id" :id="`menu${index}`">
                            <div class="lt-item-head flex-center mb-10">
                                <svg-icon name="home" size="16"></svg-icon>
                                <span class="ml-10">{{item.menuName}}</span>
                            </div>
                            <div class="lt-item-body flex flex-wrap">
                                <el-tooltip v-for="(e,i) in item.cardList" :key="e.url" popper-class="lt-card-tooltip" :content="e.synopsis" placement="bottom" :offset="0" effect="customized">
                                    <div class="lt-item-card flex"  @click="proceedUrl(e.url)">
                                        <div class="lt-item-card-img mr-10">
                                            <img :src="importImg(e.icon)" alt="">
                                        </div>
                                        <div class="lt-item-card-info">
                                            <div>{{e.cardName}}</div>
                                            <div class="lt-item-card-tip">{{e.synopsis}}</div>
                                        </div>
                                    </div>
                                </el-tooltip>
                            </div>
                        </div>
                    </div>
                </div>
            </template>
        </card-box>
    </div>
</template>

<script setup lang="ts">
import {dayjs} from "element-plus";
import Mock from 'mockjs'
import axios from "axios";
import { importImg } from '@/utils/common'
const ltWeather = defineAsyncComponent(() => import('@/components/weather/index.vue')),
    cardBox = defineAsyncComponent(() => import('@/components/cardBox/index.vue'))
import collectList from '@/assets/js/collect';
import SvgIcon from "@/components/svgIcon/index.vue";

let hour = dayjs().hour()
const timer = setInterval(() => hour = dayjs().hour(),3600000),
    apiType = [
        { name: '每日笑话', api: 'joke'},
        { name: '每日情话', api: 'love'},
        { name: '每日骚话', api: 'sexy'},
        { name: '舔狗日记', api: 'dog'},
    ],
    refresh = ref(false),
    speech = ref({
        name: '',
        data: '',
    })
const getTimeOfDay = (): string => {
    let str = ''
    if (hour >= 0 && hour < 6) {
        str = '凌晨'
    } else if (hour >= 6 && hour < 9) {
        str = '早上'
    } else if (hour >= 9 && hour < 12) {
        str = '中午'
    } else if (hour >= 12 && hour < 18) {
        str = '下午'
    } else if (hour >= 18 && hour < 24) {
        str = '晚上'
    }
    return str
}

const refreshSpeech = () => {
    refresh.value = true
    const i = Mock.mock('@integer(0, 3)')
    const { name, api } = apiType[i]
    axios.get(`https://api.vvhan.com/api/text/${api}`).then(res => {
        refresh.value = false
        const { status,data } = res
        speech.value = status === 200 ? {name,data} : {name,data: '网络出小差了,获取失败,请重试!'}
    })
}

//导航
const clickMenuItem = (id: string) => {
    (document.querySelector(`#${id}`) as HTMLElement).scrollIntoView({
        behavior: "smooth", // 平滑过渡
        block: "start" // 上边框与视窗顶部平齐
    });
}

const proceedUrl = (url: string) => {
    window.open(url,'_blank')
}


refreshSpeech()

onBeforeUnmount(() => {
    clearInterval(timer)
})

</script>

<style scoped lang="scss">
.lt-home {
    &-head {
        height: 150px;
        padding: 0 0 0 16px;
        background: #fff;
        border-radius: 4px;
        box-shadow: var(--el-box-shadow-light);
        margin-bottom: 16px;
    }
    &-user {
        .lt-user-avatar {
            height: 80px;
            width: 80px;
            border-radius: 50%;
            margin-right: 20px;
            &:hover {
                transform: rotate(666turn);
                transition-delay: 1s;
                transition-property: all;
                transition-duration: 59s;
                transition-timing-function: cubic-bezier(0.34, 0, 0.84, 1);
            }
            img {
                width: 100%;
                height: 100%;
            }
        }
        .lt-user-info {
            >div {
                height: 50%;
                &:first-child {
                    font-size: 16px;
                    color: var(--primary-text-color);
                }
                &:last-child {
                    font-size: 14px;
                    color: var(--sub-text-color);
                    .lt-home-speech {
                        min-width: 100px;
                        max-width: 500px;
                    }
                    .svg-icon-refresh {
                        transition: transform 0.5s ease;
                        &.refresh {
                            transform: rotate(360deg);
                        }
                    }
                }
            }
        }
    }
    .lt-collect-website {
        height: calc(100vh - 365px);
        background: #f9f9f9;
        &-menu {
            width: 200px;
        }
        &-list {
            width: calc(100% - 220px);
            height: 100%;
            padding: 10px 0;
            overflow: scroll;
            &::-webkit-scrollbar {
                display: none;
            }
        }
        &-item {
            .lt-item-head {
                width: 120px;
                height: 30px;
                color: #45B649;
                background: linear-gradient(90deg, rgba(69,182,73,0.6), rgba(220,227,91,0.6));
                border-radius: 2px;
            }
            .lt-item-body {
                .lt-item-card {
                    width: 248px;
                    height: 70px;
                    border-radius: 4px;
                    transition: all ease 0.3s;
                    padding: 15px 10px;
                    background: linear-gradient(90deg, rgba(69,182,73,0.3), rgba(220,227,91,0.3));
                    box-shadow: 0 0 20px -5px rgba(158,158,158,0.2);
                    cursor: pointer;
                    margin: 10px 45px 20px 0;
                    align-content: flex-start;
                    &:hover {
                        transform: translateY(-5px);
                    }
                    &-img {
                        width: 40px;
                        height: 40px;
                        img {
                            width: 40px;
                            height: 40px;
                        }
                    }
                    &-info {
                        >div {
                            &:first-child {
                                font-size: 14px;
                                font-weight: bolder;
                                color: #282a2d;
                            }
                        }
                    }
                    &-tip {
                        width: 170px;
                        color: #000;
                        margin-top: 3px;
                        font-size: 12px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                }
            }
        }
    }
    &:deep(.lt-collect-website) {
        .el-menu {
            height: 100%;
            background: #fff;
            &-item {
                height: 36px;
            }
        }
    }
}

</style>
