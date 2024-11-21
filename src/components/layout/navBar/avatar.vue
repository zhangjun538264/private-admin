/*
* @author: zhang jun
* @date:  2024-10-28 19:25:20
* @desc:
*/
<template>
    <el-dropdown trigger="click" class="lt-avatar h-full pl-10 pr-10" @command="commandMenu">
        <div class="flex items-center cursor-pointer">
            <img src="../../../assets/img/avatar.awebp" alt="">
            <span class="pl-8">admin</span>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :command="1">个人中心</el-dropdown-item>
                <el-dropdown-item :command="2">退出登录</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores/app";
import { ElMessageBox } from 'element-plus'
const appStore = useAppStore();
const router = useRouter();

const commandMenu = (command: number) => {
    switch (command) {
        case 1:
            break;
        case 2:
            ElMessageBox.confirm('您确定退出登录当前账户吗?', '提示',
                {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning',
                }
            ).then(() => {
                appStore.setIsLogin(false)
                router.replace({path: '/login'})
            })
            break;
        default:
            break;
    }

}
</script>

<style scoped lang="scss">
.lt-avatar {

    img {
        width: 24px;
        height: 24px;
    }
}

</style>
