import {defineStore} from 'pinia'

//打开页面的历史记录
export const useScrollTags = defineStore('scrollTags', () => {
    const tagsList = reactive([
            {
                tagName: '首页',
                path: '/home',
                closable: false
            },
        ]),
        currentTag = ref('首页')

    //路由变化更新 tab 标签栏
    const setTagList = (val: any) => {
        let exist = tagsList.some(item => item.tagName === val.tagName)
        if (exist) {
            currentTag.value = val.tagName
        } else {
            tagsList.push({...val, closable: true})
            currentTag.value = val.tagName
            console.log(currentTag.value);
        }
    }
    //删除单个 tab
    const deleteTag = (index: number) => {
        tagsList.splice(index, 1)
    }
    return {
        tagsList,
        currentTag,
        setTagList,
        deleteTag
    }
})
