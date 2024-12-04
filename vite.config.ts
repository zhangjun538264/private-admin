import {fileURLToPath, URL} from 'node:url'


import {type UserConfig, type ConfigEnv, loadEnv, defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import VueDevTools from 'vite-plugin-vue-devtools'
//svg图标
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
// 自动导入
import autoImport from 'unplugin-auto-import/dist/vite.js'
// 定义组件 name
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
// 引入UnoCss
import UnoCss from 'unocss/vite'

// // 引入 Mock-Serve
// import mockDevServerPlugin from 'vite-plugin-mock-dev-server'

const pathSrc = resolve(__dirname, "src");

// https://vitejs.dev/config/
export default defineConfig(({mode}:ConfigEnv): UserConfig => {
    // const env = loadEnv(mode, process.cwd())
    // console.log("=>(vite.config.ts:23) env", env.VITE_MOCK_DEV_SERVER === 'true');
    return {
        assetsInclude: ['**/*.awebp'],
        plugins: [
            vue(),
            VueDevTools(),
            // env.VITE_MOCK_DEV_SERVER === 'true' ? mockDevServerPlugin() : null,
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
            proxy: {
              '^/api': {
                target: 'http://rap2api.taobao.org/app/mock/321586/',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '')
              }
            }
        }
    }
})
