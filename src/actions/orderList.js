import Taro from "@tarojs/taro";

export const findOrderList=(a)=>{
    return (dispatch) => {
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/order/list', //仅为示例，并非真实的接口地址
            data: {
                user_id: '1'
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                console.log('执行findfoodfindfoodfindfoodfindfood');
                dispatch({
                    type: 'searchOrderList',
                    orderList: res.data.data

                })
            }
        })
    }
}
