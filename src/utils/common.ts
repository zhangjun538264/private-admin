//
const modules: Record<string, any> = import.meta.glob("@/assets/img/**/*.{png,svg,jpg,jpeg,gif}", { eager: true });
export const importImg = (url: string): string => {
    if (modules[url]) {
        return modules[url].default;
    } else {
        console.warn(`未匹配到相关图片资源：${url}`);
    }
}
