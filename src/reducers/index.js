import { combineReducers } from 'redux'
import counter from './counter'
import shopCart from "./shopcart";

export default combineReducers({
  counter,
  shopCart
})
