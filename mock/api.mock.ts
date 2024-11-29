import {defineMock} from 'vite-plugin-mock-dev-server'
import Mock from 'mockjs'

export default defineMock([
    {
        url: '/api/login',
        method: 'POST',
        body: {
            code: 200,
            msg: '登录成功',
            data: Mock.mock({
                'token': '@guid',
                'userInfo': {
                    'id': '@guid',
                    'username': '@cname',
                    'avatar': '@image(100x100, @color)',
                    'roles': ['admin'],
                    'permissions': ['*:*:*'],
                    'email': '@email',
                    'phone': '@phone',
                    'address': '@county(true)',
                    'sex': '@sex',
                    'birth': '@date',
                    'time': '@datetime',
                    'desc': '@csentence(20, 30)',
                }
            })

        },
    },
])
