import axios from "axios";
import { ElMessage } from 'element-plus'

const handleNetworkError = (errStatus: number) => {
    let errMessage = ''
    if (errStatus) {
        switch (errStatus) {
            case 400:
                errMessage = '错误的请求'
                break
            case 401:
                errMessage = '未授权，请重新登录'
                break
            case 403:
                errMessage = '拒绝访问'
                break
            case 404:
                errMessage = '请求错误,未找到该资源'
                break
            case 405:
                errMessage = '请求方法未允许'
                break
            case 408:
                errMessage = '请求超时'
                break
            case 500:
                errMessage = '服务器端出错'
                break
            case 501:
                errMessage = '网络未实现'
                break
            case 502:
                errMessage = '网络错误'
                break
            case 503:
                errMessage = '服务不可用'
                break
            case 504:
                errMessage = '网络超时'
                break
            case 505:
                errMessage = 'http版本不支持该请求'
                break
            default:
                errMessage = `其他连接错误 --${errStatus}`
        }
    } else {
        errMessage = `无法连接到服务器！`
    }
    ElMessage.error(errMessage)
}

const http = axios.create({
    baseURL: '/api',
    timeout: 60000,
    withCredentials: true,
    headers: {}
});

//请求拦截器
http.interceptors.request.use( config => {
    // if (store.state.token !== '') {
    //     config.headers.common['Authorized'] = store.state.token
    // }
    return {...config, backAll: false};
}, error => {
    return Promise.reject(error)
})

//响应拦截器
http.interceptors.response.use( (response):any => {
    let { data, config: {backAll}, headers, request, status, statusText} = response;
    if (status === 200) {
        if (Number(data.code) === 200) {
            return backAll ? Promise.resolve(response) : Promise.resolve(data);
        }
    }
}, error => {
    handleNetworkError(Number(status))
    return Promise.reject(error);
})

export default http;
