/*
* @author: zhang jun
* @date:  2024-10-24 11:37:23
* @desc:
*/
<template>
    <el-drawer :model-value="props.drawer" title="项目配置" direction="rtl" :before-close="closeDrawer" class="lt-custom-drawer">

    </el-drawer>
</template>

<script setup lang="ts">
const props = defineProps({
    drawer: {
        type: Boolean,
        default: false
    }
})
const emit = defineEmits(['update:modelValue'])
const closeDrawer = () => {
    emit('update:modelValue', false)
}

</script>

<style scoped lang="scss">
.lt-custom-drawer{
    width: 300px !important;
}
</style>
