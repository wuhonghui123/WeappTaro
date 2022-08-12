import {Component} from "react";
import {AtCard} from "taro-ui";
import {Image,Button} from "@tarojs/components";
import Taro, {getStorageSync} from "@tarojs/taro";
import {connect} from "react-redux";
import {deleteShopCart, findShopCart} from "../../actions/shopcart";
import {AddOrderFood} from "../../actions/order_food";


@connect(({order_food}) => ({order_food}), {AddOrderFood})
class Pay extends Component {
    constructor(props) {
        super(props);
        this.state={
            IsTransaction:"订单已完成",
            orderList:getStorageSync("shopCart"),
            openid:getStorageSync("openid"),
        }
    }
    pay=()=>{
        console.log("支付")
        Object.values(this.state.orderList).map((shopCart, index) =>{
        this.props.AddOrderFood(shopCart)
        })
    }

    render(){
        console.log(this.state.orderList);
        let number=0;
        let money=0;
        const orderListTr = Object.values(this.state.orderList).map((shopCart, index) =>{
            if(shopCart.check){
                number=number+1;
                money=money+shopCart.Num*shopCart.price
                return(
                    <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                        <Image src={shopCart.food_img} style="width:100px;height:70px;margin-top:10px"/>
                        <view style="width:200px;height:100px;font-size: 15px;margin:25px 0 0 10px;">
                            <text>{shopCart.food_name}</text>
                            <text className='right'>￥{shopCart.price}</text>
                            <text>{'\n'}x{shopCart.Num}</text>
                        </view>
                    </view>
                )
            }
          })
        return (
            <view>
                <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 2% 4%;text-align: center;display:none" >
                    <text>
                        {'\n'}
                        <text style='font-size: 20px;'>{this.state.IsTransaction}{'\n'}</text>
                        <text style='font-size: 12px'>感谢您对翔麟烧烤外卖的信任，期待再次光临{'\n'}</text>
                    </text>
                    <Button style='width:30%;height:30px;background-color:yellow;margin-top:10px;font-size:12px;margin-bottom:15px'>再来一单</Button>
                </view>
                <view>
                    <AtCard
                        title='翔麟烧烤'
                        thumb='../../assets/img/1.jpg'>
                        {orderListTr}
                    </AtCard>
                </view>
                <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 2% 4%;font-size: 12px;">
                    <text>{'\n'}打包费</text>
                    <text className='right'>￥{2*number}</text>
                    <text>{'\n'}{'\n'}用户配送费</text>
                    <text className='right'>￥2</text>
                    <text>{'\n'}{'\n'}共计</text>
                    <text className='right'>￥{money}</text>
                    <text>{'\n'}</text>
                </view>
                <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 5% 4%;font-size:15px">
                    <view style='margin-top:10px'>
                        <text>收货人信息</text>
                        <text className='order'>何**(先生)188****9145{'\n'}</text>
                    </view>
                    <view style='margin-top:10px'>
                        <text>配送地址</text>
                        <text className='order'>桂林电子科技大学-第六教学楼{'\n'}</text>
                    </view>
                    <view style='margin-top:10px'>
                        <text>订单号码</text>
                        <text className='order'>1{'\n'}</text>
                    </view>
                    <view style='margin-top:10px'>
                        <text>订单时间</text>
                        <text className='order'>2022-08-08 12:12:12{'\n'}</text>
                    </view>
                    <view style='margin-top:10px;margin-bottom'>
                        <text>支付方式</text>
                        <text className='order'>在线支付</text>
                    </view>
                </view>
                <view>
                    <Button onClick={this.pay}>确实支付</Button>
                </view>
            </view>
        )
    }
}
export default Pay