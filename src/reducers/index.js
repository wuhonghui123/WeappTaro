import { combineReducers } from 'redux'
import counter from './counter'
import shopCart from "./shopcart";
import orderList from "./orderList";

import order_food from "./order_food"
import food from "./food"
export default combineReducers({
  counter,
  shopCart,
  orderList,
  order_food,
  food
})
