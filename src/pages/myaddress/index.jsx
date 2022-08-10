import {Component} from 'react'
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import { AtAvatar } from 'taro-ui'
import { AtGrid } from "taro-ui"
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui'
import "./index.scss"

class myaddress extends Component {

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }
  handClick(value){
    Taro.navigateTo({
      url: '/pages/Addaddress/index'
    });
  }


  render() {
    return (
      <View>
        <AtButton  className="myaddress" onClick={this.handClick}>
          <Text className="text">添加地址信息</Text>
        </AtButton>
      </View>
    )
  }
}

export default myaddress

