import { Component } from 'react'
import {View, Text, Image} from '@tarojs/components'
import TabBar from "../common/tabBar";
import {AtTabs, AtTabsPane,AtCard,AtButton} from "taro-ui";
import {connect} from "react-redux";
import {findOrderList} from "../../actions/orderList";
import index from "@tarojs/react";
import "./index.css"
import Taro from "@tarojs/taro";

@connect(({orderList}) => ({orderList}),findOrderList)
class Order extends Component {
    constructor (props) {
        super(props)
        this.state = {
            current:0,
            order_list:[]
        }
    }
    handleClick (value) {
        this.setState({
            current:value,
            order_list:this.findOrder(value)
        })
    }
    findOrder(a){
        let t=['全部','待付款','待发货','已完成']
        let re=[]
        if (a==0){
            Taro.request({
                url: 'https://g6.glypro19.com/weappapi/order/list', //仅为示例，并非真实的接口地址
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
                    re=res.data.data
                }
            })
        }else {
            Taro.request({
                url: 'https://g6.glypro19.com/weappapi/order/list', //仅为示例，并非真实的接口地址
                data: {
                    user_id: '1',
                    order_type:t[a]
                },
                header: {
                    'content-type': 'application/json' // 默认值
                },
                success: function (res) {
                    // 调reducer修改数据
                    // console.log("action执行kk",res.data.data)
                    //调用reducer修改数据
                    re=res.data.data
                    console.log("re:",re);
                }
            })
        }
        return re;
    }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
          <AtTabs
              animated={false}
              current={this.state.current}
              tabList={[
                  { title: '全部订单' },
                  { title: '待付款' },
                  { title: '待收货' },
                  { title: '历史订单' }
              ]}
              onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={this.state.current} index={0} >
                  <View style='background-color: #FAFBFC' >
                      {this.props.orderList.orderList.map((order,index)=>{
                          return(
                              <view style="margin-top:10px">
                                  <AtCard
                                      extra={order.order_type}
                                      title='翔麟烧烤'
                                      //onClick={}
                                      thumb='../../assets/img/1.jpg'>
                                      <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                          <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                                          <view style="width:200px;height:100px;font-size: 15px;margin:10px 0 0 10px;">
                                              <text>下单时间：{order.create_time}</text>
                                              <text>总价：￥{order.order_price}</text>
                                          </view>
                                      </view>
                                      <view style="width:50px;margin-left:230px">
                                          <AtButton type='primary' size='small'>{order.order_type=='待付款'? '去支付':'确认收货'}</AtButton>
                                      </view>
                                  </AtCard>
                              </view>
                          )
                      })}
                  </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1} >
                  <View style='background-color: #FAFBFC' >
                      {this.props.orderList.orderList.map((order,index)=>{
                          if(order.order_type=='待付款'){
                              return(
                                  <view style="margin-top:10px">
                                      <AtCard
                                          extra={order.order_type}
                                          title='翔麟烧烤'
                                          thumb='../../assets/img/1.jpg'>
                                          <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                              <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                                              <view style="width:200px;height:100px;font-size: 15px;margin:10px 0 0 10px;">
                                                  <text>下单时间：{order.create_time}</text>
                                                  <text>总价：￥{order.order_price}</text>
                                              </view>
                                          </view>
                                          <view style="width:50px;margin-left:230px">
                                              <AtButton type='primary' size='small'>去支付</AtButton>
                                          </view>
                                      </AtCard>
                                  </view>
                              )
                          }
                      })}
                  </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={2} >
                  <View style='background-color: #FAFBFC' >
                      {this.props.orderList.orderList.map((order,index)=>{
                          if(order.order_type=='待发货'){
                              return(
                                  <view style="margin-top:10px">
                                      <AtCard
                                          extra={order.order_type}
                                          title='翔麟烧烤'
                                          thumb='../../assets/img/1.jpg'>
                                          <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                              <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                                              <view style="width:200px;height:100px;font-size: 15px;margin:10px 0 0 10px;">
                                                  <text>下单时间：{order.create_time}</text>
                                                  <text>总价：￥{order.order_price}</text>
                                              </view>
                                          </view>
                                          <view style="width:50px;margin-left:230px">
                                              <AtButton type='primary' size='small'>确认收货</AtButton>
                                          </view>
                                      </AtCard>
                                  </view>
                              )
                          }
                      })}
                  </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={3}>
                  <View style='background-color: #FAFBFC' >
                      {this.props.orderList.orderList.map((order,index)=>{
                          if(order.order_type=='已完成'){
                              return(
                                  <view style="margin-top:10px">
                                      <AtCard
                                          extra={order.order_type}
                                          title={order.pay_type}
                                          thumb='../../assets/img/1.jpg'>
                                          <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                              <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                                              <view style="width:200px;height:100px;font-size: 15px;margin:10px 0 0 10px;">
                                                  <text>下单时间：{order.create_time}</text>
                                                  <text>总价：￥{order.order_price}</text>
                                              </view>
                                          </view>
                                          <view style="width:50px;margin-left:230px">
                                              <AtButton type='primary' size='small'>再来一单</AtButton>
                                          </view>
                                      </AtCard>
                                  </view>
                              )
                          }
                      })}
                  </View>
              </AtTabsPane>
          </AtTabs>
        <TabBar tabBarCurrent={2} />
      </View>
    )
  }
}

export default Order

