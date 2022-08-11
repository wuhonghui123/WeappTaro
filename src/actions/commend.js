import Taro from "@tarojs/taro";

export const findcommend=()=>{
    return (dispatch) => {
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/commend/list',
            method:"GET",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                console.log("action执行")
                dispatch({type: 'searchCommend', commendList: res})
            }
        })
    }
}
