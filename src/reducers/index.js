import { combineReducers } from 'redux'
import counter from './counter'
import shopCart from "./shopcart";
import orderList from "./orderList";
import foodClass from "./foodclass";
import order_food from "./order_food"
import food from "./food"
import commend from "./commend";
export default combineReducers({
  counter,
  shopCart,
  orderList,
  order_food,
  food,
  foodClass,
  commend
})
