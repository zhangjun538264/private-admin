/*
* @author: zhang jun
* @date:  2024-11-14 11:03:06
* @desc:
*/
<template>
<div class="lt-weather flex justify-between items-center flex-col">
    <div class="lt-weather-today w-full flex justify-between">
        <div class="lt-weather-today-left">
            <div class="flex items-center">
                <span class="fs-14">{{realWeather.name}}</span>
                <el-popover placement="bottom" :width="300" trigger="click">
                    <template #reference>
                        <el-link class="fs-12 ml-8" :underline="false">切换</el-link>
                    </template>
                    <el-select filterable remote reserve-keyword placeholder="请输入城市名称" :remote-method="remoteMethod" @change="selectCity" :loading="loading">
                        <el-option v-for="item in cityLit" :key="item.value" :label="item.label" :value="item.value"/>
                    </el-select>
                </el-popover>

            </div>
            <div class="mt-4">
                <span class="fs-30 font-bold">{{realWeather.temp}}</span>
                <span class="fs-20 ml-4">°C</span>
            </div>
        </div>
        <div class="flex items-center">
            <i class="fs-36" :class="`qi-${realWeather.icon}`"></i>
            <div class="flex flex-col ml-12 fs-14">
                <span class="mb-4">{{realWeather.text}}</span>
                <span>{{realWeather.tempMin}} ~ {{realWeather.tempMax}}°C</span>
            </div>
        </div>
    </div>
    <div class="lt-weather-future w-full flex">
        <div class="flex-1 h-full flex flex-col items-center justify-end fs-12" v-for="item in futureWeather" :key="item.fxDate">
            <span>{{item.fxDate}}</span>
            <span>
                <i class="fs-22" :class="`qi-${item.iconDay}`"></i>
                <span class="fs-12 ml-4">{{item.textDay}}</span>
            </span>
            <span>{{item.tempMin}} ~ {{item.tempMax}}°C</span>
        </div>
    </div>
</div>
</template>

<script setup lang="ts">
import axios from "axios";
import _ from 'lodash'
import Settings from '@/settings'
import { useAppStore } from '@/stores/app'
import 'qweather-icons/font/qweather-icons.css'
import type {RealWeather,FutureWeather,CityItem} from "@/types/app";



const appStore = useAppStore()
const { locationId } = storeToRefs(appStore)
const { apiKey} = Settings

let realWeather = reactive<RealWeather>({
        name: '',
        temp: '',
        text: '',
        icon: ''
    }),
    futureWeather = reactive<FutureWeather[]>([]),
    city = ref(''),
    cityLit = ref<CityItem[]>([]),
    loading = ref(false),
    headers = {'X-QW-Api-Key': apiKey},
    timer:any = null

// 初始化天气
const getWeather = async (locationId: string) => {
    // 实时天气
    const { data: {fxLink, now, code}} = await axios.get(`https://devapi.qweather.com/v7/weather/now?location=${locationId}`,{ headers })
    // 近 7 天预报
    const { data: {daily,code: code1}} = await axios.get(`https://devapi.qweather.com/v7/weather/7d?location=${locationId}`,{ headers })
    if (Number(code) === 200 && Number(code1) === 200) {
        const url = fxLink.replace('/en/weather/', '/v2/current/condition/s/')
        const { data: {data: {name}}} = await axios.get(url)
        let { tempMin, tempMax } = daily[0]
        const arr = daily.slice(1).map((e: any) => ({...e,fxDate: e.fxDate.slice(5)}))
        realWeather = Object.assign(realWeather, now, {name,tempMax,tempMin})
        futureWeather = Object.assign(futureWeather, arr)
        // 每 10 分钟更新一次天气
        if (timer) {
            clearInterval(timer)
        }
        timer = setInterval(() => updateWeather(locationId), 1000 * 60 * 10)
    }
}

const updateWeather = async (locationId: string) => {
    const { data: {now,code}} = await axios.get(`https://devapi.qweather.com/v7/weather/now?location=${locationId}`,{ headers })
    if (Number(code) === 200) {
        realWeather = Object.assign(realWeather, now)
    }
}
// 搜索城市
const remoteMethod = _.debounce((query: string) => {
    if (query) {
        loading.value = true
        axios.get(`https://geoapi.qweather.com/v2/city/lookup?location=${query}`,{ headers }).then(res => {
            loading.value = false
            const { data: {location,code}} = res
            if (Number(code) === 200 && Array.isArray(location)) {
                cityLit.value = location.map(e => {
                    const { name, adm1, id } = e
                    return {value: id,label: `${name}-${adm1}`}
                })
            } else {
                cityLit.value = []
            }
        })
    } else {
        cityLit.value = []
    }
},200)

// 选择城市
const selectCity = (val: string) => {
    appStore.setLocationId(val)
    getWeather(locationId.value)
}

getWeather(locationId.value)

onUnmounted(() => clearTimeout(timer))
</script>

<style scoped lang="scss">
.lt-weather {
    height: 150px;
    width: 450px;
    padding: 12px;
    border-radius: 4px;
    //background-image: linear-gradient(35deg,#354564 30%,#4c5f7f,#8b9bb8);
    color: rgba(0,0,0,0.65);
    &-today, &-future {
        height: 50%;
    }
}

</style>
