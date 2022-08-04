import {Component} from 'react'
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import { AtAvatar } from 'taro-ui'
import { AtGrid } from "taro-ui"
import Taro from "@tarojs/taro";

class My extends Component {

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  handleClick (value) {
    console.log("tabBar ====" +value);
    switch (value.value) {
      case '我的地址':
        Taro.navigateTo({
          url: '/pages/myaddress/index'
        });
        break;
      case '我的评论':
        Taro.navigateTo({
          url: '/pages/mycomment/index'
        });
        break;
      case '获取code':
        Taro.login({
          success: function (res) {
            if (res.code) {
              console.log(res);
              //发起网络请求
              Taro.request({
                url: 'https://test.com/onLogin',
                data: {
                  code: res.code
                }
              })
            } else {
              console.log('登录失败！' + res.errMsg)
            }
          }
        })
        break;
      case '获取用户信息':
        Taro.getUserProfile({
          desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
          success: (res) => {
            console.log(res);
            console.log(res.userInfo.avatarUrl);
            // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
            this.setState({
              userInfo: res.userInfo,
              hasUserInfo: true
            })
          }
        })
        break;
      // case 2:
      //   Taro.reLaunch({
      //     url: '/pages/order/index' //'/pages/physicalIdentity/healthKnowledge'
      //   });
      //   break;
      // case 3:
      //   Taro.reLaunch({
      //     url: '/pages/homePage/index'
      //   });
      //   break;
      default:
        break;
    }
  }

  render() {
    return (
      <View>
        <AtAvatar className={"+"} circle image='https://thirdwx.qlogo.cn/mmopen/vi_32/ceibQWQJRaYABM23ibFIU1fMC7kwKT7FxLto4suoeq3gCZeaeiatHh0ZhPFIfiaTQl2yibou6ZgGKU580gWhxsiaWrrg/132'></AtAvatar>
        name

        <AtGrid data={
          [
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
              value: '我的地址'
            },
            {
              image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
              value: '我的评论'
            },
            {
              image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
              value: '领会员'
            },
            {
              image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
              value: '新品首发'
            },
            {
              image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
              value: '获取code'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '获取用户信息'
            }
          ]
        }
                onClick={this.handleClick.bind(this)}
        />


        <TabBar tabBarCurrent={3} />
      </View>
    )
  }
}

export default My

