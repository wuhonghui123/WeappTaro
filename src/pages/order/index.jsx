import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import TabBar from "../common/tabBar";
import {AtTabs, AtTabsPane} from "taro-ui";



class Order extends Component {
    constructor () {
        super(...arguments)
        this.state = {
            current: 0,
        }
    }
    handleClick (value) {
        this.setState({
            current: value
        })
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
                  { title: '当前订单' },
                  { title: '历史订单' }
              ]}
              onClick={this.handleClick.bind(this)}>
              <AtTabsPane current={this.state.current} index={0} >
                  <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >当前订单</View>
              </AtTabsPane>
              <AtTabsPane current={this.state.current} index={1}>
                  <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>历史订单</View>
              </AtTabsPane>
          </AtTabs>
        <TabBar tabBarCurrent={2} />
      </View>
    )
  }
}

export default Order

