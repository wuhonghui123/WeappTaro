import Taro from "@tarojs/taro";

export const findfood=()=>{
    return (dispatch) => {
        Taro.request({
            url: 'http://120.25.164.209:8099/food/list',
            // url: 'http://127.0.0.1:8095/food/list',
            method:"GET",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                console.log("action执行")
                dispatch({type: 'searchfood', foodList: res})
            }
        })
    }
}
