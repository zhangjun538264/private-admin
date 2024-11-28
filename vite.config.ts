import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import VueDevTools from 'vite-plugin-vue-devtools'
//
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'

// 自动导入
import autoImport from 'unplugin-auto-import/dist/vite.js'
// 定义组件 name
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// 引入UnoCss
import UnoCss from 'unocss/vite'

const pathSrc = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig({
    assetsInclude: ['**/*.awebp'],
    plugins: [
        vue(),
        VueDevTools(),
        vueSetupExtend(),
        UnoCss(),
        autoImport({
            imports: ['vue', 'vue-router', 'pinia', '@vueuse/core',],
            dts: './src/types/auto-import.d.ts',
            dirs: ['./src/utils']
        }),
        createSvgIconsPlugin({
            // 指定需要缓存的图标文件夹
            iconDirs: [resolve(pathSrc, 'assets/icons')],
            // 指定symbolId格式
            symbolId: 'icon-[dir]-[name]',
        }),
    ],
    resolve: {
        alias: {
            // '@': fileURLToPath(new URL('./src', import.meta.url))
            '@': pathSrc
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
