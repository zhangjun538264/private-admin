<template>
    <el-config-provider :locale="locale">
        <el-watermark :width="150" :font="font" :content="['Private Admin',dayjs().format('YYYY-MM-DD')]">
            <router-view></router-view>
        </el-watermark>
    </el-config-provider>
</template>

<script setup lang="ts">
import { dayjs } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

const language = ref('zh-cn')
const locale = computed(() => (language.value === 'zh-cn' ? zhCn : en))

const font = reactive({
    color: 'rgba(0, 0, 0, 0.2)',
})


// 数组去重

</script>

<style scoped lang="scss">

</style>
