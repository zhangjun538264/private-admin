/**
* @author: zhang jun
* @date: 2022/7/26 16:22
* @desc: 卡片盒子
*/
<template>
    <el-card class="lt-card-container">
        <div slot="header" class="lt-card-head flex justify-between items-center" v-if="props.showTitle">
            <div class="flex items-center">
                <span class="mr-5">{{props.title}}</span>
                <el-tooltip popper-class="lt-card-tooltip" :content="props.tip" placement="right" effect="customized" v-if="props.tip">
                    <el-icon><QuestionFilled /></el-icon>
                </el-tooltip>
            </div>
            <slot name="right"></slot>
        </div>
        <slot name="body"></slot>
    </el-card>
</template>

<script setup lang="ts">
import { QuestionFilled } from '@element-plus/icons-vue'

const props = defineProps({
    showTitle: {
        type: Boolean,
        default: true
    },
    title: {
        type: String,
        default: ''
    },
    tip: {
        type: String,
        default: ''
    }
})
</script>

<style scoped lang='scss'>
.lt-card-container {
  &:deep(.el-card__body) {
      padding: 0;
      .el-tooltip__trigger {
          color: #7fce72
      }
      .lt-card-head {
          height: 45px;
          border-bottom: 1px solid #e4e7ed;
          padding: 0 10px;
      }
  }
}
</style>
