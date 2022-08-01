import {Component} from 'react'
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";


class My extends Component {

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View>
        <Text>我的主页</Text>
        <TabBar tabBarCurrent={3} />
      </View>
    )
  }
}

export default My

