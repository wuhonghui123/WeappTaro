import {Component} from 'react'
import {View, Text, SwiperItem, Swiper, Image} from '@tarojs/components'
import TabBar from "../common/tabBar";
import Taro from "@tarojs/taro";
import {AtTabs, AtTabsPane} from "taro-ui";
import { AtCard } from "taro-ui"
import { AtRate } from 'taro-ui'
import img from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import './index.scss'
import Addcut from "../common/addcut/addcut";
import {connect} from "react-redux";
import {findfood} from "../../actions/food";
import {findfoodclass} from "../../actions/foodclass"
import {findcommend} from "../../actions/commend";
import Bottom from "../common/bottom/bottom";
@connect(({food}) => ({food}), findfood)
@connect(({foodClass}) => ({foodClass}), findfoodclass)
@connect(({commend}) => ({commend}), findcommend)
class Index extends Component {
    handleClick2(food,e) {
        console.log('点击了', food);
        Taro.navigateTo({
            url: `/pages/foodinfo/index?food=${food}`
        })
    }

    handleClick(value) {
        this.setState({
            current: value,

        })
    }

    handleClick1(value) {
        this.setState({
            current1: value,

        })
    }

    constructor(props) {
        super(props);
        this.state = {
            current: 0,
            current1: 0,
            foodList:[],
            currentList: [],
            tabList: [],
            userinfo:[],
            commendList:[],
            value: []
        }
    }

    componentWillReceiveProps(nextProps) {
        console.log(this.props, nextProps)
    }

    componentWillUnmount() {
    }

    componentDidShow() {
    }

    componentDidMount() {
        Taro.login({
            success: function (res) {
                console.log(res.code);
                if (res.code) {
                    //发起网络请求
                    Taro.request({
                        url: 'https://g6.glypro19.com/weappapi/users/wxlogin',
                        data: {
                            code: res.code
                        },
                        success: function (res) {
                            console.log(res);
                            Taro.setStorageSync('openid',res.data.openid);
                            console.log('缓存取出来openid：',Taro.getStorageSync('openid'));
                        }
                    })
                } else {
                    console.log('登录失败！' + res.errMsg)
                }
            }
        })
        Taro.getSetting({
            success: function (res) {
                if (res.authSetting['scope.userInfo']){
                    Taro.request({
                        url: `https://g6.glypro19.com/weappapi/getUserInfo?openid=${Taro.getStorageSync('openid')}`,
                        header: {
                            'content-type': 'application/json' // 默认值
                        },
                        method: 'GET',
                        dataType: 'json',
                        credentials: 'include',
                        success: (res) => {
                            console.log('数据库拿到的用户信息：',res.data.data);
                            Taro.setStorageSync('userInfo',res.data.data);
                            console.log(Taro.getStorageSync('userInfo')['0'].nickName);

                        },
                    });
                }
            }
        })



        Taro.request({
            url: `https://g6.glypro19.com/weappapi/commend/orderlist`,
            header: {
                'content-type': 'application/json' // 默认值
            },
            method: 'GET',
            dataType: 'json',
            credentials: 'include',
            success: (res) => {
                // console.log(res.data.data);
                this.setState({
                    commendList: res.data.data
                })
            },
        });

    }

    componentDidHide() {
    }

    render() {
        let Item = this.props.foodClass.foodClassList;
        let List = this.props.food.foodList;
        console.log(this.props.commend.foodList);
        let commend = this.state.commendList;
        return (

            <View>
                <View className="index">
                    <Swiper
                        className='test-h'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        autoplay>
                        <SwiperItem>
                            <View ><Image src={img} className="loop_img"/></View>
                        </SwiperItem>
                        <SwiperItem>
                            <View ><Image src={img2} className="loop_img"/></View>
                        </SwiperItem>
                        <SwiperItem>
                            <View >图片3</View>
                        </SwiperItem>
                    </Swiper>
                    <AtTabs
                        animated={false}
                        current={this.state.current1}
                        tabList={[
                            {title: '点餐'},
                            {title: '评论'},
                            {title: '商家'},
                        ]}
                        onClick={this.handleClick1.bind(this)}>
                        <AtTabsPane current={this.state.current1} index={0}>
                            <View style='background-color: #FAFBFC;text-align: center;'>
                                <AtTabs
                                    current={this.state.current}
                                    scroll={true}
                                    height='685px'
                                    tabDirection='vertical'
                                    swipeable={true}
                                    tabList={Item}
                                    onClick={this.handleClick.bind(this)}>
                                    {
                                        Item.map((item, index) => {
                                            return (
                                                <AtTabsPane tabDirection='vertical' current={this.state.current}
                                                            index={item.id}>
                                                    <View style='font-size:18px;text-align:center;height:200px;'>
                                                        <View className="food">
                                                            {
                                                                List.map((food, idx) => {
                                                                    if (food.class_name === item.title) {
                                                                        return (
                                                                            <View
                                                                                  className="foodlist_item">
                                                                                <Image className="foodlist_item_img"
                                                                                       src={food.food_img} onClick={this.handleClick2.bind(this,JSON.stringify(food))}/>
                                                                                <View className="foodlist_item_info">
                                                                                    <Text
                                                                                        onClick={this.handleClick2.bind(this,JSON.stringify(food))}>{food.name}</Text>
                                                                                    <Text>月售：{food.sole}</Text>
                                                                                    <Text
                                                                                        className="price">¥{food.price}</Text>
                                                                                    <Addcut food={food}></Addcut>
                                                                                </View>
                                                                            </View>
                                                                        )
                                                                    }
                                                                })
                                                            }
                                                        </View>
                                                    </View>
                                                </AtTabsPane>
                                            )
                                        })
                                    }
                                </AtTabs>
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current1} index={1}>
                            <View >
                                    {
                                        commend.map((commend,index)=>{
                                            return (
                                                <AtCard
                                                    title='用户ID:'
                                                    extra={commend.commend_id}
                                                >
                                                    <text>评论：{commend.comments} 日期：{commend.comments_time.substring(0,10)}</text>
                                                    <AtRate value={commend.stars}/>
                                                </AtCard>
                                            )
                                        })

                                    }
                            </View>
                        </AtTabsPane>
                        <AtTabsPane current={this.state.current1} index={2}>
                            <View>
                                商家

                            </View>
                        </AtTabsPane>
                    </AtTabs>
                </View>

                <View>

                    <TabBar tabBarCurrent={0}/>
                </View>
            </View>

        )
    }
}

export default Index

