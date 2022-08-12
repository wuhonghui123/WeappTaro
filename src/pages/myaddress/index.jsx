import {Component} from 'react'
import {Button, Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import {AtAvatar, AtCard, AtRate} from 'taro-ui'
import { AtGrid } from "taro-ui"
import Taro from "@tarojs/taro";
import { AtButton } from 'taro-ui'
import "./index.scss"
import index from "../index";

class myaddress extends Component {
  constructor (props) {
    super(props);
    this.state = {

      address:[]
    }
  }


  componentWillUnmount() {
  }
  componentWillMount(){
    Taro.request({
      url:'http://localhost:8095/address/get',
      method:"Post",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: (res)=> {
        console.log(res);
        this.setState({
          address:res.data.data
        })
      }
    })
  }

  componentDidShow() {
  }

  componentDidHide() {
  }
  handClick(value){
    Taro.navigateTo({
      url: '/pages/Addaddress/index'
    })
  }

  //跳转修改地址页面
  handClick1(value){
    Taro.navigateTo({
      url:'/pages/Editaddress/index'
    })
  }


  render() {
    console.log(this.state.address);
    let address = this.state.address;
    return (
      <View>
        {
          address.map((address)=>{
            return(
                <AtCard
                    title={address.address}
                >
                  <Text>{address.name}  {address.phone}</Text>
                  <AtButton className="change" type="primary" size="small" onClick={this.handClick1.bind(this)}>修改地址</AtButton>
                </AtCard>
            )
          })
        }
          <AtButton className="myaddress" onClick={this.handClick.bind(this)}>
            <Text className="text">添加地址信息</Text>
          </AtButton>
      </View>
    )
  }
}

export default myaddress

