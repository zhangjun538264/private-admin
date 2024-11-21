import type { TagItem } from '@/types/app'
//打开页面的历史记录
export const useScrollTags = defineStore('scrollTags', () => {
    const tagsList = ref<TagItem[]>([
            {
                path: '/home',
                tagName: '首页',
                closable: false,
            }
        ]),
        currentTag = ref('首页')
    //路由变化更新 tab 标签栏
    const setTagsList = (val: TagItem) => {
        let exist = tagsList.value.some(item => item.tagName === val.tagName)
        if (exist) {
            currentTag.value = val.tagName
        } else {
            tagsList.value.push({...val, closable: val.path !== '/home'})
            currentTag.value = val.tagName
        }
    }
    //删除单个 tab
    const deleteTag = (index: number) => {
        tagsList.value.splice(index, 1)
    }


    return {
        tagsList,
        currentTag,
        setTagsList,
        deleteTag
    }
},{
    persist: {
        storage: sessionStorage,
        pick: ['currentTag'],
    }
})
