import { Component } from 'react'
import { View, Text } from '@tarojs/components'
import {AtTabs, AtTabsPane} from "taro-ui";
import {getCurrentInstance} from "@tarojs/taro";


class foodinfo extends Component {
  constructor () {
    super(...arguments)
    this.state = {
        current: 0,
            name:'',
            id:'',
            price:'',
            food_img:'',
            like_num:'',
            class_name:'',
            sale:''
    }
  }
    componentDidMount() {
        const food = JSON.parse(getCurrentInstance().router.params.food)
        console.log(food);
        this.setState({
            name:food.name,
            id:food.id,
            price:food.price,
            food_img:food.food_img,
            like_num:food.like_num,
            class_name:food.class_name,
            sale:food.sale
        })
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
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >{this.state.name}</View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
          </AtTabsPane>
        </AtTabs>
    )
  }

}

export default foodinfo

