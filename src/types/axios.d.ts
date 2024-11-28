import {ResponseData} from './app.ts'

declare module 'axios' {
    interface AxiosResponse extends ResponseData {}

    interface InternalAxiosRequestConfig {
        backAll: boolean
    }
}
