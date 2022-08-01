import {Component} from 'react'
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import {connect} from "react-redux";
import {findShopCart} from "../../actions/shopcart";

@connect(({shopCart}) => ({shopCart}), {findShopCart})
class ShopCart extends Component {
    constructor(props) {
        super(props);
    }

  render() {
      const shopCartList=this.props.shopCart;
      console.log("购物车列表:",shopCartList);
      return (
      <View>

        <TabBar tabBarCurrent={1} />
      </View>
    )
  }
}

export default ShopCart

