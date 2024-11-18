import settings from '../settings'
import type {searchMenu} from "@/types/app";

export const useAppStore = defineStore('app', {
    state() {
      return {
          // 是否登录
          isLogin: false,
          // 侧边栏伸缩
          collapse: settings.collapse,
          // 侧边栏宽度
          menuWidth: settings.menuWidth,
          // tags-view 是否显示
          showTagView: settings.showTagView,
          // 项目配置抽屉
          drawer: false,
          // 可搜索菜单列表
          searchMenuList: [],
          // 搜索历史
          historyList: [],
          // 城市编码
          locationId: settings.locationId
      }
    },
    actions: {
        // 修改登录状态
        setIsLogin(val: boolean) {
            this.isLogin = val
        },
        // 修改侧边栏状态
        setCollapse() {
            this.collapse = !this.collapse
        },
        // 修改tags-view状态
        setTagView(val: boolean)  {
            this.showTagView = val
        },
        // 修改抽屉状态
        setDrawer() {
            this.drawer = !this.drawer
        },
        // 设置可搜索菜单列表
        setSearchMenuList(value:any) {
            this.searchMenuList = value
        },
        // 修改菜单搜索历史
        setHistoryList(val) {
            const index = this.historyList.findIndex(item => item.path === val.path)
            index >= 0 ? this.historyList.splice(index, 1) : this.historyList.length > 10 && this.historyList.pop()
            this.historyList.unshift(val)
        },
        setLocationId(val: string) {
            console.log("=>(app.ts:62) val", val);
            this.locationId = val
        }
    },
    persist: {
        storage: sessionStorage,
        pick: ['isLogin', 'historyList', 'locationId'],
    }
})

