import {Component} from "react";
import {Checkbox, Text, View} from "@tarojs/components";
import React from "react";
import { AtInputNumber,AtCheckbox } from 'taro-ui';



class ShopCartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopCartList: this.props.shopCartList,
            value:this.props.shopCartList.food_num,
            index:this.props.index,
            check:this.props.shopCartList.check
        }

    }
    componentDidMount  (){
        this.setState({
            check:this.props.shopCartList.check
        })
    }

    handleChange (value) {
        this.props.changeShopCartList(value,this.state.index);
        this.setState({
            value
        })
    }


    changeCheck(){
        if(this.props.shopCartList.check==="true"){
            this.state.shopCartList.check= "false"
        }else {
            this.state.shopCartList.check= "true"
        }
        this.props.changeCheck(this.state.shopCartList.check)
    }

    render()
        {
            this.props.shopCartList.food_num=this.state.value;
              console.log("输出",this.state.value,this.state.shopCartList);
            return (
                    <View style={{float:'left',border: '1px dashed #ccc',width:'100%',height:'100px'} }>
                            <Checkbox  checked={this.state.check} value={this.props.shopCartList.food_name} onClick={this.changeCheck.bind(this)}>
                            </Checkbox>
                        <Text>商品：{this.props.shopCartList.food_name}</Text>
                        {/*<img src={require('../img/img.png')} alt={"图片"}>*/}
                        {/*</img>*/}
                        <hr/>
                          <Text>总价：{this.props.shopCartList.food_price}</Text>
                            <AtInputNumber
                                min={0}
                                max={10}
                                step={1}
                                value={this.state.value}
                                onChange={this.handleChange.bind(this)}
                            />
                    </View>

            )


        }
}
export default ShopCartComponent;
