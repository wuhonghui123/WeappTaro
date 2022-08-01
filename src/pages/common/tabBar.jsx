import {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import { View } from '@tarojs/components'
import Taro from '@tarojs/taro'
import {connect} from "react-redux";
import {findShopCart} from "../../actions/shopcart";


@connect(({shopCart}) => ({shopCart}), {findShopCart})
class TabBar extends Component {
  constructor(props) {
    super(props);
  }
  handleClick (value) {
    console.log("tabBar ====" +value);
    switch (value) {
      case 0:
        Taro.reLaunch({
          url: '/pages/index/index'
        });
        break;
      case 1:
        this.props.findShopCart();
        Taro.reLaunch({
          url: '/pages/shopCart/index'
        });
        break;
      case 2:
        Taro.reLaunch({
          url: '/pages/order/index' //'/pages/physicalIdentity/healthKnowledge'
        });
        break;
      case 3:
        Taro.reLaunch({
          url: '/pages/homePage/index'
        });
        break;
      default:
        break;
    }
  }
  render() {
    let BASEURL=`https://www.juntaitec.cn/wechatapp/images/`;
    return (
      <View>
        <AtTabBar
          fixed
          backgroundColor='#ffffff'
          color='#cccccc'
          selectedColor='#d40000'
          tabList={[
            { title: '点餐', image: `${BASEURL}home.png`, selectedImage: `${BASEURL}homeSelected.png` },
            { title: '购物车', image: `${BASEURL}home.png`, selectedImage: `${BASEURL}homeSelected.png` },
            { title: '订单', image: `${BASEURL}knowledge.png`, selectedImage: `${BASEURL}knowledgeSelected.png` },
            { title: '我的', image: `${BASEURL}health.png`, selectedImage: `${BASEURL}healthSelected.png` },
          ]}
          onClick={this.handleClick.bind(this)}
          current={this.props.tabBarCurrent}
        />
      </View>
    );
  }
}

export default TabBar;
