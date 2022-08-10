import { combineReducers } from 'redux'
import counter from './counter'
import shopCart from "./shopcart";
import orderList from "./orderList";

export default combineReducers({
  counter,
  shopCart,
  orderList
})
