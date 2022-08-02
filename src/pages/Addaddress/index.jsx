import {Component} from 'react'
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import { AtAvatar } from 'taro-ui'
import { AtGrid } from "taro-ui"
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui'
import { AtInput, AtForm } from 'taro-ui'
import "./index.scss"

export class Addaddress extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: ''
    }
  }
  handleChange (value) {
    this.setState({
      value
    })
  }
  onSubmit (event) {
    console.log(this.state.value)
  }


  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }


  render() {
    return (
        <AtForm
            onSubmit={this.onSubmit.bind(this)}
        >
          <AtInput
              name='value'
              title='收货人'
              type='text'
              placeholder='请输入收货人姓名'
              value={this.state.value}
              onChange={this.handleChange.bind()}
          />
          <AtInput
              name='value'
              title='手机号码'
              type='text'
              placeholder='请输入收货人手机号码'
              value={this.state.value}
              onChange={this.handleChange.bind()}
          />
          <AtInput
              name='value'
              title='收货地址'
              type='text'
              placeholder='请输入收货人收货地址'
              value={this.state.value}
              onChange={this.handleChange.bind()}
          />
          <AtButton className="Addaddress" formType='submit'>
            <Text className="text">保存</Text>
          </AtButton>
        </AtForm>
    )
  }
}

export default Addaddress

