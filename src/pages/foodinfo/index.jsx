import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {AtTabs, AtTabsPane} from "taro-ui";


class foodinfo extends Component {
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
  render () {
    return (
        <AtTabs
            animated={false}
            current={this.state.current}
            tabList={[
              { title: '详情' },
              { title: '评论' }
            ]}
            onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
        </AtTabs>
    )
  }

}

export default foodinfo

