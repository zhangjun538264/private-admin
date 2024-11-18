/*
* @author: zhang jun
* @date:  2024-05-24 14:06:47
* @desc:
*/
<template>
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
</template>

<script setup lang="ts">
import {dayjs} from "element-plus";
import Mock from 'mockjs'
import axios from "axios";
const ltWeather = defineAsyncComponent(() => import('@/components/weather/index.vue'))

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
    }),
    loading = ref(false)

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


refreshSpeech()

onBeforeUnmount(() => {
    clearInterval(timer)
})

</script>

<style scoped lang="scss">
.lt-home-head {
    height: 150px;
    padding: 0 0 0 16px;
    background: #fff;
    border-radius: 4px;
    box-shadow: var(--el-box-shadow-light);
    .lt-home-user {
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
}
</style>
