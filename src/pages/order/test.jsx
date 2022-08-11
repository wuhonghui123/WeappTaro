import {Component} from "react";
import {AtCard} from "taro-ui";
import {Image,Button} from "@tarojs/components";
import "./index.css"

class Test extends Component {
    render(){
        console.log(this.props.orderList);
        return (
            <view>
                <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 2% 4%;text-align: center">
                    <text>
                        {'\n'}
                        <text style='font-size: 20px;'>订单已完成{'\n'}</text>
                        <text style='font-size: 12px'>感谢您对翔麟烧烤外卖的信任，期待再次光临{'\n'}</text>
                    </text>
                    <Button style='width:30%;height:30px;background-color:yellow;margin-top:10px;font-size:12px;margin-bottom:15px'>再来一单</Button>
                </view>
                <view>
                    <AtCard
                        title='翔麟烧烤'
                        thumb='../../assets/img/1.jpg'>
                        <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                            <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                            <view style="width:200px;height:100px;font-size: 15px;margin:25px 0 0 10px;">
                                <text>烤玉米</text>
                                <text className='right'>￥666</text>
                                <text>{'\n'}x1</text>
                            </view>
                        </view>
                        <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                            <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                            <view style="width:200px;height:100px;font-size: 15px;margin:25px 0 0 10px;">
                                <text>烤玉米</text>
                                <text className='right'>￥666</text>
                                <text>{'\n'}x1</text>
                            </view>
                        </view>
                        <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                            <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                            <view style="width:200px;height:100px;font-size: 15px;margin:25px 0 0 10px;">
                                <text>烤玉米</text>
                                <text className='right'>￥666</text>
                                <text>{'\n'}x1</text>
                            </view>
                        </view>
                    </AtCard>
                </view>
                <view style="width:92%;height:20%;border:1px solid #dee8f1;margin:2% 0 2% 4%;font-size: 12px;">
                    <text>{'\n'}打包费</text>
                    <text className='right'>￥10</text>
                    <text>{'\n'}{'\n'}用户配送费</text>
                    <text className='right'>￥2</text>
                    <text>{'\n'}{'\n'}共计</text>
                    <text className='right'>￥18</text>
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
            </view>
        )
    }
}
export default Test