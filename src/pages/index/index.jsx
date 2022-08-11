import {Component} from 'react'
import {View, Text, SwiperItem, Swiper, Image} from '@tarojs/components'
import TabBar from "../common/tabBar";
import Taro from "@tarojs/taro";
import {AtTabs, AtTabsPane} from "taro-ui";
import img from '../../assets/img/1.jpg'
import img2 from '../../assets/img/2.jpg'
import './index.scss'
import Addcut from "../common/addcut/addcut";
import {connect} from "react-redux";
import {findfood} from "../../actions/food";
import {findfoodclass} from "../../actions/foodclass"
import {findcommend} from "../../actions/commend";
@connect(({food}) => ({food}), findfood)
@connect(({foodClass}) => ({foodClass}), findfoodclass)
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
            tabList: [],
            userinfo:[]
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
    }

    componentDidHide() {
    }

    render() {
        let Item = this.props.foodClass.foodClassList;
        let List = this.props.food.foodList;
        return (

            <View>
                <View>
                    <Swiper
                        className='test-h'
                        indicatorColor='#999'
                        indicatorActiveColor='#333'
                        circular
                        indicatorDots
                        autoplay>
                        <SwiperItem>
                            <View ><Image src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.zhimg.com%2Fv2-5200ddd9e138c96e3d74b660ddff620a_1440w.jpg%3Fsource%3D172ae18b&refer=http%3A%2F%2Fpic1.zhimg.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719634&t=4ed55f52e281a0719965ce0de5ae4b4f' className="loop_img"/></View>
                        </SwiperItem>
                        <SwiperItem>
                            <View ><Image src='https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.zcool.cn%2Fcommunity%2F0119ca5b5e9465a801215c8fd2225b.jpg%403000w_1l_0o_100sh.jpg&refer=http%3A%2F%2Fimg.zcool.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719731&t=57e709773798f958b4642cbd5a9ff571' className="loop_img"/></View>
                        </SwiperItem>
                        <SwiperItem>
                            <View ><Image src = 'https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg22.pxto.com.cn%2Fthumb%2F2104%2F06%2F606be20c912c8.jpg&refer=http%3A%2F%2Fimg22.pxto.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1662719809&t=bab469b87a67709fb98c23aa57db4c6a' className="loop_img"/></View>
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
                                    tabList={this.props.foodClass.foodClassList}
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
                            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>所有评论</View>
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

