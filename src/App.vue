<template>
    <el-config-provider :locale="locale">
        <el-watermark :width="150" :zIndex="9999" :font="font" :content="['Private Admin',dayjs().format('YYYY-MM-DD')]">
            <router-view></router-view>
        </el-watermark>
    </el-config-provider>
</template>

<script setup lang="ts">
import { dayjs } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import axios from "axios";
import {useAppStore} from "@/stores/app";
import Settings from "@/settings";

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))
const appStore = useAppStore()
const { apiKey} = Settings
const headers = {'X-QW-Api-Key': apiKey}

const font = reactive({
    color: 'rgba(0, 0, 0, 0.2)',
})
// 初始化定位城市
const locateCity = () => {
    const geolocation = new BMapGL.Geolocation()
    geolocation.getCurrentPosition(async function (res: any) {
        const {longitude, latitude} = res
        const { data: {location,code} } = await axios.get(`https://geoapi.qweather.com/v2/city/lookup?location=${longitude},${latitude}`, {headers})
        if (Number(code) === 200 && Array.isArray(location)) {
            appStore.setLocationId(location[0]['id'])
        }
    });
}
locateCity()





// 数组去重

</script>

<style scoped lang="scss">

</style>
