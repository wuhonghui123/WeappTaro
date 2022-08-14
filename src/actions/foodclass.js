import Taro from "@tarojs/taro";

export const findfoodclass=()=>{
    return (dispatch) => {
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/food/classification_list',
            method:"GET",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                console.log('执行findfoodfindfoodfindfoodfindfood');
                dispatch({type: 'searchFoodClass', foodClassList: res})
            }
        })
    }
}
