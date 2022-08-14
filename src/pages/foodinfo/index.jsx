import { Component } from 'react'
import {View, Text, Image} from '@tarojs/components'
import {AtTabs, AtTabsPane} from "taro-ui";
import { AtCard } from "taro-ui"
import { AtRate } from 'taro-ui'
import {getCurrentInstance} from "@tarojs/taro";
import './index.scss'
import Addcut from "../common/addcut/addcut";
import {connect} from "react-redux";
import {findcommend} from "../../actions/commend";
@connect(({commend}) => ({commend}), findcommend)
class foodinfo extends Component {
  constructor () {
    super(...arguments)
    this.state = {
        current: 0,
        food:JSON.parse(getCurrentInstance().router.params.food),
        value: []
    }
  }
    componentDidMount() {
    }

    handleClick (value) {
    this.setState({
      current: value
    })
  }
  render () {
      let foodcommendList = this.props.commend.foodList
      console.log(this.state.food);
      return (
        <AtTabs
            animated={true}
            current={this.state.current}
            tabList={[
              { title: '详情' },
              { title: '评论' }
            ]}
            onClick={this.handleClick.bind(this)}>
          <AtTabsPane current={this.state.current} index={0} >
              <View className="foodinfo">
              <Image className="food_img" src={this.state.food.food_img}/>
            <View>{this.state.name}{this.state.food.name}</View>

              <Addcut className="addcut" food={this.state.food}></Addcut>


              </View>
          </AtTabsPane>
          <AtTabsPane current={this.state.current} index={1}>
            <View>
                {
                    foodcommendList.map((commend,index) => {
                        if(commend.food_name === this.state.food.name){
                            return(
                            <AtCard
                                title='用户ID:'
                                extra={commend.commend_id}
                            >
                                <text>评论：{commend.comments}。  日期：{commend.comments_time.substring(0,10)}</text>
                                <AtRate value={commend.stars}/>
                            </AtCard>
                            )
                        }
                    })
                }
            </View>
          </AtTabsPane>
        </AtTabs>
    )
  }

}

export default foodinfo

