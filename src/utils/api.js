import Taro from '@tarojs/taro';

export const apiUrl = "http://127.0.0.1:8091";

export function getRequest(url) {
    return new Promise((resolve, reject) => {
        Taro.request({
            url: apiUrl + url,
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            dataType: 'json',
            credentials: 'include',
        })
            .then((res) => {
                resolve(res.data);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
