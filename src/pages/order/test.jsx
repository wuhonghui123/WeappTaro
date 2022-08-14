import {Component} from "react";
import {AtCard} from "taro-ui";
import {Image,Button} from "@tarojs/components";
import "./index.css"
import Taro from "@tarojs/taro";
import {connect} from "react-redux";
import {findfood} from "../../actions/food";

@connect(({food}) => ({food}), findfood)
class Test extends Component {
    constructor (props) {
        super(props)
        this.state = {
            id:Taro.getCurrentInstance().router.params.id,
            user_id:Taro.getCurrentInstance().router.params.user_id,
            orderUser:[],
            orderFood:[],
            orderDetails:[]
        }
        this.getOrderUser(this.state.id,this.state.user_id)
        this.getOrderFood(this.state.id)
        this.getorderDetails(this.state.id)
    }
    getOrderUser=(id,user_id)=>{
        let re;
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/order/search', //仅为示例，并非真实的接口地址
            data: {
                order_id:id,
                user_id: user_id
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success:(res)=>{
                console.log("action",res.data.data);
                re=res.data.data;
                this.setState({
                    orderUser:re
                })
            }
        })
    }
    getOrderFood=(id)=>{
        let re;
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/orderFood/getOrderFood', //仅为示例，并非真实的接口地址
            data: {
                order_id:id
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success:(res)=>{
                console.log("action",res.data.data);
                re=res.data.data;
                this.setState({
                    orderFood:re
                })
            }
        })
    }
    getorderDetails=(id)=>{
        let re;
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/order/list', //仅为示例，并非真实的接口地址
            data: {
                id:id
            },
            header: {
                'content-type': 'application/json' // 默认值
            },
            success:(res)=>{
                console.log("action",res.data.data);
                re=res.data.data;
                this.setState({
                    orderDetails:re
                })
            }
        })
    }
    typeClick=(id,user_id,order_type)=>{
        console.log(id, user_id, order_type);
        if (order_type=='待发货'||order_type=='待收货'){
            Taro.request({
                url: 'https://g6.glypro19.com/weappapi/order/update_type',
                data: {
                    order_id:id,
                    user_id: user_id,
                    order_type:"待评价"
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success:(res)=>{
                    console.log("action",res.data.data);
                    this.setState({
                        orderList:res.data.data
                    })
                }
            })
        }else if(order_type=='待评价'){
            Taro.navigateTo({
                url:'/pages/Addcommend/index'
            })
        }else if(order_type=='待付款'){
            Taro.navigateTo({
                url:'/pages/shopCart/pay'
            })
        }else if(order_type=='已完成'){
            Taro.reLaunch({
                url: '/pages/index/index'
            });
        }
    }


    render(){
        let sum=0;
        console.log(Taro.getCurrentInstance().router.params.id,Taro.getCurrentInstance().router.params.user_id);
        console.log(this.state.orderFood);
        return (
            <view>
                {this.state.orderDetails.map((details,index)=>{
                    return(
                        <view>
                            {details.order_type=='已完成'?
                            <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 2% 4%;text-align: center">
                                <text>
                                    {'\n'}
                                    <text style='font-size: 20px;'>订单已完成{'\n'}</text>
                                    <text style='font-size: 12px'>感谢您对翔麟烧烤外卖的信任，期待再次光临{'\n'}</text>
                                </text>
                                <Button onClick={()=>this.typeClick(details.id,details.user_id,details.order_type)} style='width:30%;height:30px;background-color:yellow;margin-top:10px;font-size:12px;margin-bottom:15px'>再来一单</Button>
                            </view> : details.order_type=='待评价'?
                            <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 2% 4%;text-align: center">
                                <text>
                                    {'\n'}
                                    <text style='font-size: 20px;'>订单待评价{'\n'}</text>
                                    <text style='font-size: 12px'>感谢您对翔麟烧烤外卖的信任，期待再次光临{'\n'}</text>
                                </text>
                                <Button onClick={()=>this.typeClick(details.id,details.user_id,details.order_type)} style='width:30%;height:30px;background-color:yellow;margin-top:10px;font-size:12px;margin-bottom:15px'>去评价</Button>
                            </view>:details.order_type=='待付款'?
                            <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 2% 4%;text-align: center">
                                <text>
                                    {'\n'}
                                    <text style='font-size: 20px;'>订单未付款{'\n'}</text>
                                    <text style='font-size: 12px'>感谢您对翔麟烧烤外卖的信任，期待再次光临{'\n'}</text>
                                </text>
                                <Button onClick={()=>this.typeClick(details.id,details.user_id,details.order_type)} style='width:30%;height:30px;background-color:yellow;margin-top:10px;font-size:12px;margin-bottom:15px'>去付款</Button>
                            </view>:
                            <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 2% 4%;text-align: center">
                                <text>
                                    {'\n'}
                                    <text style='font-size: 20px;'>订单未确认收货{'\n'}</text>
                                    <text style='font-size: 12px'>感谢您对翔麟烧烤外卖的信任，期待再次光临{'\n'}</text>
                                </text>
                                <Button onClick={()=>this.typeClick(details.id,details.user_id,details.order_type)} style='width:30%;height:30px;background-color:yellow;margin-top:10px;font-size:12px;margin-bottom:15px'>确认收货</Button>
                            </view>}
                            <view>
                                <AtCard
                                    title='翔麟烧烤'
                                    thumb='../../assets/img/1.jpg'>
                                    <view>
                                        {this.state.orderFood.map((food,index)=>{
                                            sum=sum+food.food_price*food.food_num
                                            return(
                                                sum,
                                                    <view>
                                                        <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                                            <Image src={food.food_img} style="width:100px;height:70px;margin-top:10px"/>
                                                            <view style="width:200px;height:100px;font-size: 15px;margin:25px 0 0 10px;">
                                                                <text>{food.food_name}</text>
                                                                <text className='right'>￥{food.food_price}</text>
                                                                <text>{'\n'}x{food.food_num}</text>
                                                            </view>
                                                        </view>
                                                    </view>
                                            )
                                        })}
                                    </view>
                                </AtCard>
                            </view>
                            <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 2% 4%;font-size: 12px;">
                                <text>{'\n'}打包费</text>
                                <text className='right'>￥1</text>
                                <text>{'\n'}{'\n'}用户配送费</text>
                                <text className='right'>￥1</text>
                                <text>{'\n'}{'\n'}共计</text>
                                <text className='right'>￥{sum+2}</text>
                                <text>{'\n'}</text>
                            </view>

                            <view>
                                {this.state.orderUser.map((user,index)=>{
                                    return(
                                        <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 5% 4%;font-size:15px">
                                            <view style='margin-top:10px'>
                                                <text>收货人信息</text>
                                                <text className='order'>{user.user_name}{user.user_phone}{'\n'}</text>
                                            </view>
                                            <view style='margin-top:10px'>
                                                <text>配送地址</text>
                                                <text className='order'>桂林电子科技大学-第六教学楼{'\n'}</text>
                                            </view>
                                            <view style='margin-top:10px'>
                                                <text>订单号码</text>
                                                <text className='order'>{details.id}{'\n'}</text>
                                            </view>
                                            <view style='margin-top:10px'>
                                                <text>订单时间</text>
                                                <text className='order'>{details.create_time}{'\n'}</text>
                                            </view>
                                            <view style='margin-top:10px;margin-bottom'>
                                                <text>支付方式</text>
                                                <text className='order'>在线支付</text>
                                            </view>
                                        </view>
                                    )
                                })}
                            </view>
                        </view>
                    )
                })}
            </view>
        )
    }
}
export default Test
