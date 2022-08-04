import {Component} from 'react'
import {View, Text, SwiperItem, Swiper, Image} from '@tarojs/components'
import TabBar from "../common/tabBar";
import Taro from "@tarojs/taro";
import {AtTabs, AtTabsPane} from "taro-ui";
import img from '../../assets/img/1.jpg'
import './index.scss'
import Addcut from "../common/addcut/addcut";


class Index extends Component {
  handleClick2 (value){
    console.log('点击了',value);
    Taro.navigateTo({
      url: `/pages/foodinfo/index?name=1`
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
  constructor () {
    super(...arguments);
    this.state = {
      current: 0,
      current1: 0,
      identityItems : [],
      foodList:[],
      currentList:[],
      foodlist:[],
      selectCata:null,
      tabList: [
        {title: '标签页1'},
        {title: '标签页2'},
        {title: '标签页3'},
        {title: '标签页4'},
        {title: '标签页5'},
        {title: '标签页6'},
      ],
    }
  }
//切换分类
  changeCata(selectCata){
    this.setState({selectCata:selectCata});
    if(this.state.foodlist.some(item=>item.pid===selectCata.id)){
      //不用加载数据
      this.setState({currentList:this.state.foodlist.filter(item=>item.pid===selectCata.id)})
    }else{
      //需要加载数据
      this.setState({foodlist:this.state.foodlist.concat(this.getData(selectCata))},()=>{
        this.setState({currentList:this.state.foodlist.filter(item=>item.pid===selectCata.id)})
      }) ;
    }
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidMount  (){
    Taro.request({
      url: `http://120.25.164.209:8099/food/classification_list`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        this.setState({
          identityItems: res.data.data
        })
      },
    });
    Taro.request({
      url: `http://120.25.164.209:8099/food/list`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        this.setState({
          foodList: res.data.data
        })
        console.log(JSON.stringify(this.state.foodList));
      },
    });
  }

  componentDidHide() {
  }
  getData(selectCata){
    return   Array.from(Array(Math.round(Math.random()*20)),(v,k)=>({price:Math.round(Math.random()*20),sole:Math.round(Math.random()*50),pid:selectCata.id,id:selectCata.id+"_"+k,title:"分类"+selectCata.id+"菜品"+(k+1)}))
  }
  render() {
    let Item=this.state.identityItems;
    let List=this.state.foodList;
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
              <View className='demo-text-1'><Image src={'../../assets/img/1.jpg'}/></View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-2'><Image src={'../../assets/img/2.jpg'}/></View>
            </SwiperItem>
            <SwiperItem>
              <View className='demo-text-3'>图片3</View>
            </SwiperItem>
          </Swiper>
          <AtTabs
              animated={false}
              current={this.state.current1}
              tabList={[
                { title: '点餐' },
                { title: '评论' },
                { title: '商家' },
              ]}
              onClick={this.handleClick1.bind(this)}>
            <AtTabsPane current={this.state.current1} index={0} >
              <View style='background-color: #FAFBFC;text-align: center;' >
                <AtTabs
                    current={this.state.current}
                    scroll
                    height='1000px'
                    tabDirection='vertical'
                    tabList={this.state.tabList}
                    onClick={this.handleClick.bind(this)}>

                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={0}>
                    <View style='font-size:18px;text-align:center;height:200px;'>
                      <View className="food">
                        {
                          List.map((item,index)=>{
                            return(
                                <View key={item.id} className="foodlist_item" >
                                  <Image className="foodlist_item_img" src={img}/>
                                  <View className="foodlist_item_info" onClick={this.handleClick2.bind(this)}>
                                    <Text>{item.name}</Text>
                                    <Text>月售：{item.sole}</Text>
                                    <Text className="price">¥{item.price}</Text>
                                    <Addcut></Addcut>
                                  </View>
                                </View>
                            )
                          })
                        }
                      </View>
                    </View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={1}>
                    <View style='font-size:18px;text-align:center;height:200px;'>标签页二的内容</View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={2}>
                    <View style='font-size:18px;text-align:center;height:200px;'>标签页三的内容</View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={3}>
                    <View style='font-size:18px;text-align:center;height:200px;'>标签页四的内容</View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={4}>
                    <View style='font-size:18px;text-align:center;height:200px;'>标签页五的内容</View>
                  </AtTabsPane>
                  <AtTabsPane tabDirection='vertical' current={this.state.current} index={5}>
                    <View style='font-size:18px;text-align:center;height:200px;'>标签页六的内容</View>
                  </AtTabsPane>
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
            <TabBar tabBarCurrent={0} />
          </View>
        </View>

    )
  }
}

export default Index

