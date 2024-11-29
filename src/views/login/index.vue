/*
* @author: zhang jun
* @date:  2024-11-14 18:28:01
* @desc:
*/
<template>
    <video src="../../assets/login-bg.mp4" autoplay muted loop></video>
    <div class="lt-login">
        <h1 class="h-90 pb-20 flex-center">欢迎回来</h1>
        <el-form ref="loginForm" :model="form" :rules="rule">
            <el-form-item prop="username">
                <el-input v-model="form.username" placeholder="请输入用户名" size="large" @keyup.enter="login">
                    <template #prefix>
                        <el-icon color="#000"><user /></el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password size="large" @keyup.enter="login">
                    <template #prefix>
                        <el-icon color="#000"><lock /></el-icon>
                    </template>
                </el-input>
            </el-form-item>
            <el-form-item>
               <div class="wh-full flex items-center justify-between">
                   <el-checkbox v-model="form.isSave" label="记住我" size="large" />
                   <el-link type="primary" size="small" @click="">忘记密码</el-link>
               </div>
            </el-form-item>
            <el-form-item>
                <el-button class="w-full" type="primary" size="large" @click="sign">登 录</el-button>
            </el-form-item>
            <div class="lt-form-divider flex items-center">
                <div class="lt-form-divider-line"></div>
                <span class="lt-form-divider-text">其他登录方式</span>
                <div class="lt-form-divider-line"></div>
            </div>
            <div class="flex-center">
                <svg-icon class="mr-16 cursor-pointer" name="wechat" color="#909399"></svg-icon>
                <svg-icon class="mr-16 cursor-pointer" name="qq" color="#909399"></svg-icon>
                <svg-icon class="mr-16 cursor-pointer" name="github" color="#909399"></svg-icon>
                <svg-icon class="mr-16 cursor-pointer" name="gitee" color="#909399"></svg-icon>
            </div>
        </el-form>
    </div>
</template>

<script setup lang="ts">
import { User, Lock } from "@element-plus/icons-vue";
import { useAppStore } from "@/stores/app";
import { login } from '@/api/api'
import Cookie from 'js-cookie'

const router = useRouter(),
    appStore = useAppStore(),
    form = reactive({
        username: 'admin',
        password: 'admin123456',
        isSave: false
    }),
    rule = reactive({
        username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
            { min: 6, max: 20, message: '长度在 6 到 20 个字符', trigger: 'blur' }
        ]
    }),
    loginForm = ref()

const sign = () => {
    loginForm.value.validate((valid: any) => {
        if (valid) {
            login(form).then(res => {
                console.log("=>(index.vue:86) res", res);
                const { code,data:{token,userInfo},msg } = res
                if(code === 200) {
                    Cookie.set('token',token,{sameSite: 'none', secure: true})
                    appStore.setIsLogin(true)
                    appStore.setUserInfo(userInfo)
                    router.push({path: '/home'})
                }
            })
        } else {
            return false;
        }
    })
}


</script>

<style scoped lang="scss">
video {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    object-fit: cover;
    z-index: 0;
}
.lt-login {
    width: 450px;
    padding: 30px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    backdrop-filter: blur(3px);
    background-color: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 10px;
    box-shadow: var(--el-box-shadow-light);
    z-index: 1;
    &:deep(.el-form) {
        .el-form-item {
            margin-bottom: 24px;
        }
        .el-input {
            &__wrapper {
                background: transparent;
                box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.3) inset;
            }
            &__inner::placeholder {
                color: rgba(0,0,0,0.35);
            }
        }
        .lt-form-divider {
            height: 40px;
            &-line {
                flex: 1;
                height: 1px;
                background: rgba(255, 255, 255, 0.3);
            }
            &-text {
                padding: 0 16px;
                font-size: 12px;
                color: rgba(0,0,0,0.65);
            }
        }
    }
}
</style>
