import {Component} from 'react';
import {View, Text, Image} from '@tarojs/components';
import {getAllFoodInfo, getEvent} from '../../../utils/common';
import './bottom.scss';
import img from "../../../assets/img/foodstore.png"
import Taro from "@tarojs/taro";

let events = getEvent();

class Bottom extends Component {
    constructor() {
        super(...arguments);
        this.state = {
            Num: 0,
            sendPrice: 3, //配送费
            supportTakeBySelf: false,
            sendMustPrice: 20,  //满多少钱起送
            allPrice: 0  //总价
        };
    }
    componentDidMount() {
        //要获取整体的存储的菜品数据 进行计算
        // 获取计算好的 设置给state
        let {allPrice, allNum} = getAllFoodInfo();
        this.setState({Num: allNum, allPrice: allPrice});
        events.on("addcut", () => {
            //菜品发生变化
            let {allPrice, allNum} = getAllFoodInfo();
            this.setState({Num: allNum, allPrice: allPrice});
        })
    }

    render() {
        let {allPrice, Num, sendPrice, supportTakeBySelf, sendMustPrice} = this.state;
        let hideClass = Num > 0 ? "" : "hide";
        return (
            <View className={hideClass}>
                <View className={"bottom"}>
                    <View className="bottom_body">
                        {Num ? <Text className="num">{Num}</Text> : null}
                        <Image className="store_img" src={img}></Image>
                        <View className="info">{allPrice ? <Text className="price">{"¥" + allPrice}</Text> :
                            <Text>{sendPrice ? " | " : ""}</Text>}</View>
                        <View className="submit">{allPrice >= sendMustPrice ? <Text className="goPay">购物车</Text> :
                            <Text>{sendMustPrice ? "¥" + sendMustPrice + "起送" : ""}</Text>}</View>
                    </View>
                </View>
            </View>)
    }
}

export default Bottom;
