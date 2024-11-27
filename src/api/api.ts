import http from "@/api/index";

export async function getList(data = {}) {
    const url = `/login`
    return await http.post(url,data)
}
