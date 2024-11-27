import http from "@/api/index";


export async function login(data = {}) {
    const url: string = `/login`
    return await http.post(url,data)
}
