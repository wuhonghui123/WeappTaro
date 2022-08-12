import Taro from "@tarojs/taro";

export const AddOrderFood=(list)=>{
    const AllList={food_id:list.id, food_num:list.Num,
        food_name:list.name, food_price:list.price,
        order_id:33}
    return (dispatch) => {
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/orderFood/add', //仅为示例，并非真实的接口地址
            data: AllList,
            dataType: 'json',
            method:"POSt",
            header: {
                'content-type': 'application/json' // 默认值
            },
            success: function (res) {
                // 调reducer修改数据
                // console.log("action执行kk",res.data.data)
                //调用reducer修改数据
                dispatch({type: 'AddOrderFoodList', orderFoodList: list})
                console.log(res);
            }
        })
    }
}
