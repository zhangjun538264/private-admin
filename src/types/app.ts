export interface RouteItem {
    path: string,
    name: string,
    meta: any,
    component?: any,
    children?: RouteItem[]
}

export interface SearchMenu {
    name: string,
    path: string,
    title: string,
    address: string[]
}
export interface RealWeather {
    name: string,
    temp: string,
    icon: string,
    text: string,
    [propName: string]: string
}
export interface FutureWeather {
    fxDate: string,
    iconDay: string,
    textDay: string,
    tempMin: string,
    tempMax: string,
    [propName: string]: string
}
// 天气搜索城市列表
export interface CityItem {
    value: string
    label: string
}

export interface TagItem {
    tagName: string,
    path: string,
    closable: boolean
}

export interface ResponseData {
    code: number
    msg: string,
    data: any
}

export interface User {
    name: string;
    id: string;
    [propName: string]: string
}
