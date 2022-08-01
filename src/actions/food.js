import Taro from "@tarojs/taro";

export const findfood = () => {
    return (dispatch) => {
        Taro.request({
            url: 'http://localhost:8091/food/list', //仅为示例，并非真实的接口地址
            data: {},
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                console.log("action执行")
                dispatch({type: 'food', foodList: res})
            }
        })
    }
}
