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
