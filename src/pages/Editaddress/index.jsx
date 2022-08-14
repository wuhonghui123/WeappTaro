import {Component} from 'react'

import "./index.scss"
import Taro from "@tarojs/taro";
import {Text, View} from "@tarojs/components";
import {AtForm, AtInput} from "taro-ui";

export class Editaddress extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      name: Taro.getCurrentInstance().router.params.name,
      phone:Taro.getCurrentInstance().router.params.phone,
      address:Taro.getCurrentInstance().router.params.address,
      id:'1'
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

  handleClick=()=>{
    Taro.request({
      url:'http://localhost:8095/address/update',
      data:this.state,
      method:"Post",
      success: (res)=> {
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
            <view className="text" ><Text onClick={this.handleClick}>保存</Text></view>
          </AtForm>
        </View>
    )
  }
}

export default Editaddress

