/*
* @author: zhang jun
* @date:  2024-05-24 14:34:13
* @desc:
*/
<template>
    <div class="lt-logo h-60">
        <transition enter-active-class="animate__animated animate__fadeInLeft">
            <router-link v-if="collapse" class="wh-full flex-center" to="/">
                <img class="wh-40" src="../../../assets/img/logo.png" alt="">
            </router-link>

            <router-link v-else class="wh-full flex-center fs-16" to="/">
                <img class="wh-40" src="../../../assets/img/logo.png" alt="">
                <span class="lt-logo-title ml-8">{{settings.title}}</span>
            </router-link>
        </transition>
    </div>
</template>

<script setup lang="ts" name="logo">
import settings from '@/settings'
import { storeToRefs } from "pinia";
import {useAppStore} from "@/stores/app";

const { collapse } = storeToRefs(useAppStore());
// logo宽度
const logoWidth = computed(() => collapse.value ? '64px' : '100%')

</script>

<style scoped lang="scss">
.lt-logo {
    width: v-bind(logoWidth);
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    transition: width 0.2s;
    a {
        text-decoration: none;
        color: #fff;
        font-weight: bold;
    }
}
</style>
