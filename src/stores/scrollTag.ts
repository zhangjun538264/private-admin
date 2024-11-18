import { defineStore } from 'pinia'

//打开页面的历史记录
export const useScrollTags = defineStore('scrollTags',{
    state () {
        return {
            tagsList: [
                {
                    tagName: '首页',
                    path:'/home',
                    closable: false
                },
            ],
            currentTag: '首页',
        }
    },
    actions: {
        //路由变化更新 tab 标签栏
        setTagList(val) {
            let exist = this.tagsList.some( item => item.tagName === val.tagName)
            if (exist) {
                this.currentTag = val.tagName
            } else {
                this.tagsList.push({...val,closable: true})
                this.currentTag = val.tagName
                console.log(this.currentTag);
            }
        },
        //删除单个 tab
        deleteTag(index) {
            this.tagsList.splice(index,1)
        },
    }
})
