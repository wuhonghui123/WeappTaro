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
      name: '',
      phone:'',
      address:'',
        user_id:'1'
    }
  }
  handleChange (name) {
    this.setState({
      name
    })
  }
  handleChange1 (phone) {
    this.setState({
        phone
    })
  }
  handleChange2 (address) {
    this.setState({
        address
    })
  }
  onSubmit (event) {

  }


  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }
handleClick=()=>{
    Taro.request({
    url: 'https://g6.glypro19.com/weappapi/address/add',
    data: this.state,
        method:"POST",
    success: function (res) {
      console.log(res);
    }
  })
}

  render() {
    return (
        <View>
          <AtForm
              onSubmit={this.onSubmit.bind(this)}>
            <AtInput
                name='value'
                title='收货人'
                type='text'
                placeholder='请输入收货人姓名'
                value={this.state.name}
                onChange={this.handleChange.bind(this)}
            />
            <AtInput
                name='value'
                title='手机号码'
                type='text'
                placeholder='请输入收货人手机号码'
                value={this.state.phone}
                onChange={this.handleChange1.bind(this)}
            />
            <AtInput
                name='value'
                title='收货地址'
                type='text'
                placeholder='请输入收货人收货地址'
                value={this.state.address}
                onChange={this.handleChange2.bind(this)}
            />
            {/*<AtButton className="Addaddress" formType='submit'>*/}
            {/*  <Text className="text" onClick={this.handleClick}>保存</Text>*/}
            {/*</AtButton>*/}
              <view className="text" ><Text onClick={this.handleClick}>保存</Text></view>

          </AtForm>
        </View>
    )
  }
}

export default Addaddress

