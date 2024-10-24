import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
// 自动导入
import autoImport from 'unplugin-auto-import/dist/vite.js'
// 定义组件 name
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import UnoCss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        VueDevTools(),
        vueSetupExtend(),
        autoImport({
            imports: ['vue','vue-router','pinia'],
            dts: './src/types/auto-import.d.ts',
            dirs: ['./src/utils']
        }),
        UnoCss()
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                javascriptEnabled: true, // 启用scss
                // additionalData: `@use "@/assets/styles/index.scss" as *;`,
            }
        }
    },
    server: {
        open: true, // 启动项目时自动打开浏览器
        port: 5000, // 修改默认启动端口号
        // proxy: {
        //   '/api': {
        //     target: 'http://localhost:8080',
        //     changeOrigin: true,
        //     rewrite: (path) => path.replace(/^\/api/, '')
        //   }
        // }
    }
})
