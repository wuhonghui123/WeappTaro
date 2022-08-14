import { Component } from 'react'
import {View, Text, Image} from '@tarojs/components'
import TabBar from "../common/tabBar";
import {AtTabs, AtTabsPane,AtCard,AtButton} from "taro-ui";
import {connect} from "react-redux";
import {findOrderList} from "../../actions/orderList";
import Taro from "@tarojs/taro";

@connect(({orderList}) => ({orderList}),findOrderList)
class Order extends Component {
    constructor (props) {
        super(props)
        let v=this.props.orderList.orderList;
        console.log("test",this.props.orderList);
        this.state = {
            current:0,
            orderList:v,
            orderDetails:[],
            foodList:[]
        }
    }
    handleClick=(value)=>{
        this.setState({
            current:value,
            orderList:this.state.orderList
        })

    }
    toMouseTracker(){
        Taro.navigateTo({
            url:'/pages/Addcommend/index'
        })
    }
    cardClick=(id,user_id)=>{
        let re;
        Taro.navigateTo({
            url:`/pages/order/test?id=${id}&user_id=${user_id}`
        })
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
                    orderDetails:re
                })
            }
        })
        console.log("&&&",this.state.orderDetails);
    }
    typeClick=(id,user_id,order_type,e)=>{
        e.stopPropagation();
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
                url:`/pages/Addcommend/index?id=${id}&user_id=${user_id}`
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

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }
  componentDidMount() {
      this.setState({
      });
  }

    componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }
  render() {
      console.log(this.state.orderList);
      return (
      <View>
          <AtTabs
              animated={false}
              current={this.state.current}
              tabList={[
                  { title: '全部订单' },
                  { title: '待付款' },
                  { title: '待收货' },
                  { title: '历史订单' },
                  { title: '待评价' }
              ]}
              onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={this.state.current} index={0}>
                  <View style='background-color: #FAFBFC;margin-bottom:30%'>
                      {this.state.orderList.map((order,index)=>{
                          return(
                              <view style="margin-top:10px">
                                  <AtCard
                                      onClick={()=>this.cardClick(order.id,order.user_id)}
                                      extra={order.order_type}
                                      title='翔麟烧烤'
                                      thumb='../../assets/img/1.jpg'>
                                      <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                          <Image src='../../assets/img/1.jpg' style="width:100px;height:70px;margin-top:10px"/>
                                          <view style="width:200px;height:100px;font-size: 15px;margin:10px 0 0 10px;">
                                              <text>
                                                  下单时间：{order.create_time}{'\n'}
                                                  总价：￥{order.order_price}
                                              </text>
                                          </view>
                                      </view>
                                      <view style="width:70px;margin-left:80%;">
                                          <AtButton type='primary' size='small' onClick={(e)=>this.typeClick(order.id,order.user_id,order.order_type,e)}>{order.order_type=='待付款'? '去支付':order.order_type=='待发货'?'确认收货':order.order_type=='待收货'?'确认收货':order.order_type=='已完成'?'再来一单':'评价'}</AtButton>
                                      </view>
                                  </AtCard>
                              </view>
                          )
                      })}
                  </View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1} >
                  <View style='background-color: #FAFBFC' >
                      {this.state.orderList.map((order,index)=>{
                          if(order.order_type=='待付款'){
                              return(
                                  <view style="margin-top:10px">
                                      <AtCard
                                          onClick={()=>this.cardClick(order.id,order.user_id)}
                                          extra={order.order_type}
                                          title='翔麟烧烤'
                                          thumb='../../assets/img/1.jpg'>
                                          <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                              <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                                              <view style="width:200px;height:100px;font-size: 15px;margin:10px 0 0 10px;">
                                                  <text>
                                                      下单时间：{order.create_time}{'\n'}
                                                      总价：￥{order.order_price}
                                                  </text>
                                              </view>
                                          </view>
                                          <view style="width:70px;margin-left:80%;">
                                              <AtButton type='primary' size='small' onClick={(e)=>this.typeClick(order.id,order.user_id,order.order_type,e)}>{order.order_type=='待付款'? '去支付':order.order_type=='待发货'?'确认收货':order.order_type=='待收货'?'确认收货':order.order_type=='已完成'?'再来一单':'评价'}</AtButton>
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
                      {this.state.orderList.map((order,index)=>{
                          if(order.order_type=='待收货'||order.order_type=='待发货'){
                              return(
                                  <view style="margin-top:10px">
                                      <AtCard
                                          onClick={()=>this.cardClick(order.id,order.user_id)}
                                          extra={order.order_type}
                                          title='翔麟烧烤'
                                          thumb='../../assets/img/1.jpg'>
                                          <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                              <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                                              <view style="width:200px;height:100px;font-size: 15px;margin:10px 0 0 10px;">
                                                  <text>
                                                      下单时间：{order.create_time}{'\n'}
                                                      总价：￥{order.order_price}
                                                  </text>
                                              </view>
                                          </view>
                                          <view style="width:70px;margin-left:80%;">
                                              <AtButton type='primary' size='small' onClick={(e)=>this.typeClick(order.id,order.user_id,order.order_type,e)}>{order.order_type=='待付款'? '去支付':order.order_type=='待发货'?'确认收货':order.order_type=='待收货'?'确认收货':order.order_type=='已完成'?'再来一单':'评价'}</AtButton>
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
                      {this.state.orderList.map((order,index)=>{
                          if(order.order_type=='已完成'){
                              return(
                                  <view style="margin-top:10px">
                                      <AtCard
                                          onClick={()=>this.cardClick(order.id,order.user_id)}
                                          extra={order.order_type}
                                          title='翔麟烧烤'
                                          thumb='../../assets/img/1.jpg'>
                                          <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                              <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                                              <view style="width:200px;height:100px;font-size: 15px;margin:10px 0 0 10px;">
                                                  <text>
                                                      下单时间：{order.create_time}{'\n'}
                                                      总价：￥{order.order_price}
                                                  </text>
                                              </view>
                                          </view>
                                          <view style="width:70px;margin-left:80%;">
                                              <AtButton type='primary' size='small' onClick={(e)=>this.typeClick(order.id,order.user_id,order.order_type,e)}>{order.order_type=='待付款'? '去支付':order.order_type=='待发货'?'确认收货':order.order_type=='待收货'?'确认收货':order.order_type=='已完成'?'再来一单':'评价'}</AtButton>
                                          </view>
                                      </AtCard>
                                  </view>
                              )
                          }
                      })}
                  </View>
              </AtTabsPane>
                  <AtTabsPane current={this.state.current} index={4}>
                      <View style='background-color: #FAFBFC' >
                          {this.state.orderList.map((order,index)=>{
                              if(order.order_type=='待评价'){
                                  return(
                                      <view style="margin-top:10px">
                                          <AtCard
                                              onClick={()=>this.cardClick(order.id,order.user_id)}
                                              extra={order.order_type}
                                              title='翔麟烧烤'
                                              thumb='../../assets/img/1.jpg'>
                                              <view style="display:flex;flex-direction:row;justify-content:flex-start;height:80px">
                                                  <Image src={'../../assets/img/1.jpg'} style="width:100px;height:70px;margin-top:10px"/>
                                                  <view style="width:200px;height:100px;font-size: 15px;margin:10px 0 0 10px;">
                                                      <text>
                                                          下单时间：{order.create_time}{'\n'}
                                                          总价：￥{order.order_price}
                                                      </text>
                                                  </view>
                                              </view>
                                              <view style="width:70px;margin-left:80%;">
                                                  <AtButton type='primary' size='small' onClick={(e)=>this.typeClick(order.id,order.user_id,order.order_type,e)}>{order.order_type=='待付款'? '去支付':order.order_type=='待发货'?'确认收货':order.order_type=='待收货'?'确认收货':order.order_type=='已完成'?'再来一单':'评价'}</AtButton>
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

