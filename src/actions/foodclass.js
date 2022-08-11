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
                // 调reducer修改数据
                console.log("action执行")
                dispatch({type: 'searchFoodClass', foodClassList: res})
            }
        })
    }
}
