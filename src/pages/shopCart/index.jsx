import {Component} from 'react'
import {Checkbox, Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import {connect} from "react-redux";
import {deleteShopCart, findShopCart} from "../../actions/shopcart";
import ShopCartComponent from '../common/shopCartCom';
import React from "react";
import order_food from "../../reducers/order_food";
import {AddOrderFood} from "../../actions/order_food";
import Taro from "@tarojs/taro";
import {AtSwipeAction} from "taro-ui";
import AddCut from "../common/addcut/addcut";


@connect(({shopCart,order_food}) => ({shopCart,order_food}), {findShopCart,deleteShopCart,AddOrderFood})
class ShopCart extends Component {
    constructor(props) {
        super(props);
        this.state={
            num:1,
            delBut:true,
            management:"管理",
            shopCartList:Taro.getStorageSync("shopCart"),
            allCheck:false,
            money:0,
        }
    }

    //结算外卖
    settlement(){
        console.log("结算外卖")
        let mon=0;
        const shopCartTr =Object.values(this.state.shopCartList).map((shopCart, index) => {
            if(shopCart.check) {
                mon+=shopCart.Num * shopCart.price;
            }
        })
        this.state.money=mon;
        console.log(mon,this.state.money)

    }
    //获取子组件中的购买数量
    changeShopCartList=(num)=>{
        this.setState({
            ...this.state.shopCartList,
            index:{
                ...this.state.shopCartList.index,
                food_num:num
            }
        })
    }
    //是否选中
    changeCheck=(key)=>{
        this.setState({
            ...this.state.shopCartList,
            index:{
                ...this.state.shopCartList.index,
                check:key
            }
        })
    }
    //全选
    allCheck(){
        if(this.state.allCheck){
                this.state.allCheck=false
            Object.values(this.state.shopCartList).map((shopCart, index) =>{
                 this.state.shopCartList[shopCart.id].check=false
                /*index=shopCart.id
                this.setState({
                    ...this.state.shopCartList,
                    [index]:{
                        check: "false"
                   }
                })*/
            })

        }else{
                this.state.allCheck=true
            Object.values(this.state.shopCartList).map((shopCart, index) =>{
                 this.state.shopCartList[shopCart.id].check=true
                index=shopCart.id
                /*this.setState({
                    ...this.state.shopCartList,
                    [index]:{
                        check: "true"
                    }
                })*/
            })
        }
        this.setState({})
        console.log(this.state.allCheck,this.state.shopCartList);
        Taro.setStorageSync("shopCart",this.state.shopCartList);

    }
    //管理按钮
    management(){
        if(this.state.delBut===true){
            this.setState(
                {delBut: false,
                    management:"退出管理",}
            )
        }else {
            this.setState(
                {delBut: true,
                    management:"管理",}
            )
        }
    }
    //删除按钮
    delShopCart=()=>{
        Object.values(this.state.shopCartList).map((shopCart, index) =>{
            if(shopCart.check) {
                let id=shopCart.id
                delete this.state.shopCartList[id]
            }
            })
        Taro.setStorageSync("shopCart",this.state.shopCartList);
        this.setState({
        })
    }

    render() {
        const shopCartTr = Object.values(this.state.shopCartList).map((shopCart, index) =>{
        return(
                <View>
                    <ShopCartComponent index={index} shopCartList={shopCart} changeShopCartList={this.changeShopCartList} changeCheck={this.changeCheck} />
                    <AddCut food={ShopCart}>

                    </AddCut>
                </View>
            )
        })
        //样式
        const styleBut={width:'50%',height:'100%',float:"right"};

        return (
            <View>
                <Checkbox checked={this.state.allCheck} value='全选' onClick={this.allCheck.bind(this)} >全选</Checkbox>
                <button style={styleBut} onClick={this.management.bind(this)} >{this.state.management}</button>
                <hr/>
                <View>
                    {shopCartTr}
                </View>
                <button style={styleBut} onClick={this.settlement.bind(this)}>结算外卖</button>

                <button style={{width:"50%",height:'100%',float:"left" }} disabled={this.state.delBut} onClick={this.delShopCart} >删除</button>
                <TabBar tabBarCurrent={1} />
                <View>
                    <AtSwipeAction options={[
                        {
                            text: '取消',
                            style: {
                                backgroundColor: '#6190E8'
                            }
                        },
                        {
                            text: '确认',
                            style: {
                                backgroundColor: '#FF4949'
                            }
                        }
                    ]}>
                        <View className='normal'>{shopCartTr}</View>
                    </AtSwipeAction>
                </View>
            </View>
        )
    }
}

export default ShopCart

