import Taro from "@tarojs/taro";

export const findShopCart=()=>{
    return (dispatch) => {
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/shopcart/list', //仅为示例，并非真实的接口地址
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
                dispatch({type: 'searchShopCart', shopCartList: res})
            }
        })
    }
}

export const deleteShopCart=(list)=>{
    console.log("Action", list);
    const a = JSON.stringify(list);
    console.log("kkk",a);
    return (dispatch) => {
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/shopcart/delete', //仅为示例，并非真实的接口地址
            data: list,
            dataType: 'json',
            method:"POSt",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                // console.log("action执行kk",res.data.data)
                //调用reducer修改数据
                /* dispatch({type: 'deleteShopCart', shopCartList: res})*/
                console.log(res);
            }
        })
    }
}
