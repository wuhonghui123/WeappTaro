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
        Taro.reLaunch({
          url: '/pages/myaddress/index'
        });
        break;
      case '我的评论':
        Taro.reLaunch({
          url: '/pages/mycomment/index'
        });
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
        <AtAvatar circle image='https://jdc.jd.com/img/200'></AtAvatar>
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
              value: '领京豆'
            },
            {
              image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
              value: '手机馆'
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

