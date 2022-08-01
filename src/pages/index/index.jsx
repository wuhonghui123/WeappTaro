import {Component} from 'react'
import {View, Text} from '@tarojs/components'
import TabBar from "../common/tabBar";
import Taro from "@tarojs/taro";
import index from "./index.scss";


class Index extends Component {
  handleClick (value){
    Taro.navigateTo({
      url: `/pages/foodinfo/index?name=${value}`
    })
  }
  constructor (props) {
    super(props);
    this.state = {
      identityItems : [],
      foodList:[]
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
      url: `http://localhost:8091/food/classification_list`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        console.log(JSON.stringify(res))
        this.setState({
          identityItems: res.data.data
        })
      },
    });
    Taro.request({
      url: `http://localhost:8091/food/list`,
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'GET',
      dataType: 'json',
      credentials: 'include',
      success: (res) => {
        console.log(JSON.stringify(res))
        this.setState({
          foodList: res.data.data
        })
      },
    });
  }

  componentDidHide() {
  }

  render() {
    let Item=this.state.identityItems;
    let List=this.state.foodList;
    return (
        <View>
          <View className="food_class">
            {
              Item.map((identityItem, index) => {
                return <View><Text  className="food_class_list">{identityItem.name}</Text></View>
                  }
              )
            }
          </View>
          <View className="food">
            {
              List.map((foodList,index)=>{
                return<View><Text onClick={this.handleClick.bind(foodList.name)} className="food_list">{foodList.name},   {foodList.price}</Text></View>
              })
            }
          </View>
          <TabBar tabBarCurrent={0} />
        </View>
    )
  }
}

export default Index

