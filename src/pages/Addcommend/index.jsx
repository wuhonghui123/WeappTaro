import {Component} from 'react'
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import { AtAvatar } from 'taro-ui'
import { AtGrid } from "taro-ui"
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui'


class addcomment extends Component {

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }


  render() {
    return (
      <View>
      <Text>添加评论</Text>
      </View>
    )
  }
}

export default addcomment
