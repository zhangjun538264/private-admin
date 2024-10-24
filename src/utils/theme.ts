// 修改css变量
export const setCssVariable = (prop: string, val: any, dom = document.documentElement) => {
    dom.style.setProperty(prop, val)
}

