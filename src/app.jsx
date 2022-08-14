import { Component } from 'react'
import {connect, Provider} from 'react-redux'

import configStore from './store'

import './app.scss'
import Taro from "@tarojs/taro";
import {findfood} from "./actions/food";

const store = configStore()
class App extends Component {
  componentDidMount () {
    Taro.setStorageSync('WUHONGHUI','aaaaa');
    // Taro.request({
    //   url: 'https://g6.glypro19.com/weappapi/food/list',
    //   method:"GET",
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     Taro.setStorageSync('foodlist',res.data.data)
    //   }
    // })
    // Taro.request({
    //   url: 'https://g6.glypro19.com/weappapi/food/classification_list',
    //   method:"GET",
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     Taro.setStorageSync('classlist',res.data.data)
    //   }
    // })
    console.log('执行插入缓存执行插入缓存执行插入缓存执行插入缓存执行插入缓存执行插入缓存执行插入缓存执行插入缓存执行插入缓存');
    // Taro.login({
    //   success: function (res) {
    //     console.log(res.code);
    //     if (res.code) {
    //       //发起网络请求
    //       Taro.request({
    //         url: 'https://g6.glypro19.com/weappapi/users/wxlogin',
    //         data: {
    //           code: res.code
    //         },
    //         success: function (res) {
    //           console.log(res);
    //           Taro.setStorageSync('openid',res.data.openid);
    //           // console.log('缓存取出来openid：',Taro.getStorageSync('openid'));
    //         }
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
    // Taro.getSetting({
    //   success: function (res) {
    //     if (res.authSetting['scope.userInfo']){
    //       Taro.request({
    //         url: `http://localhost:8095/getUserInfo?openid=${Taro.getStorageSync('openid')}`,
    //         header: {
    //           'content-type': 'application/json' // 默认值
    //         },
    //         method: 'GET',
    //         dataType: 'json',
    //         credentials: 'include',
    //         success: (res) => {
    //           // console.log('数据库拿到的用户信息：',res.data.data);
    //           Taro.setStorageSync('userInfo',res.data.data);
    //           Taro.setStorageSync('money',res.data.data['0'].money);
    //           // console.log(Taro.getStorageSync('userInfo')['0'].nickName);
    //
    //         },
    //       });
    //     }
    //   }
    // })
    // Taro.request({
    //   url: `https://g6.glypro19.com/weappapi/commend/orderlist`,
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   method: 'GET',
    //   dataType: 'json',
    //   credentials: 'include',
    //   success: (res) => {
    //     Taro.setStorageSync('commendlist',res.data.data)
    //   },
    // });
    // Taro.request({
    //   url: 'https://g6.glypro19.com/weappapi/order/list', //仅为示例，并非真实的接口地址
    //   data: {
    //     user_id: '1'
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     Taro.setStorageSync('orderlist',res.data.data)
    //   }
    // })
  }

  componentDidShow () {}

  componentDidHide () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
