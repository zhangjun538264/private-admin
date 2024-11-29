import { mock } from "mockjs";

mock(/.*?\/login/,'post',{
    code: 200,
    data: {
        token: '@guid',
        userInfo: {
            id: '@guid',
            name: '@cname',
            avatar: '@image(100x100)',
        }
    },
    msg: '登录成功'
})
