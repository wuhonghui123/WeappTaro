import Taro from "@tarojs/taro";

export const findShopCart=()=>{
    return (dispatch) => {
        Taro.request({
            url: 'http://localhost:8091/shopcart/list', //仅为示例，并非真实的接口地址
            data: {
                user_id: '1'
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                // console.log("action执行kk",res.data.data)
                //调用reducer修改数据
                dispatch({type: 'searchShopCart', shopCartList: res.data.data})
            }
        })
    }
}