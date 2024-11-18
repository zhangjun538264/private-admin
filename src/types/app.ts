export interface routeItem {
    path: string,
    name: string,
    meta: any,
    component?: any,
    children?: routeItem[]
}

export interface searchMenu {
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
