/* 导入官方的axios */
import axios from "axios";

const instance = axios.create({
})

instance.interceptors.request.use(
    config => {
        /*
        请求之前，携带上token
         */
        return config;
    },
    err => {
        return Promise.reject(err)
    }
)
instance.interceptors.response.use(
    response=>{
        return response;
    },
    err=>{
        //如果有具体错误，返回具体的"中文提示"
        console.log(err);
    }
)


export function get(url, params) {
    return instance.get(url, {params});
}

export function post(url, params) {
    return instance.post(url, params)
}
