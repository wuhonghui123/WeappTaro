import Taro from "@tarojs/taro";

export const findfood=()=>{
    return (dispatch) => {
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/food/list',
            method:"GET",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {

                dispatch({type: 'searchFood', foodList: res})
            }
        })
    }
}
