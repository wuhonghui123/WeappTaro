import {Component} from "react";
import {Checkbox, Image, Text, View} from "@tarojs/components";
import React from "react";
import { AtInputNumber,AtCheckbox } from 'taro-ui';


class ShopCartComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shopCartList: this.props.shopCartList,
            value:this.props.shopCartList.Num,
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
            // this.props.shopCartList.Num=this.state.value;
            const food=this.state.shopCartList;
               console.log("输出",this.state.value,this.state.shopCartList);
            return (
                    <View style={{float:'left',border: '1px dashed #ccc',width:'100%',height:'150px'} }>
                                <Checkbox  style={{float:"left"}} checked={this.state.check} value={this.props.shopCartList.name} onClick={this.changeCheck.bind(this)}>
                                </Checkbox>
                        <Text style={{float:"left"}}>商品：{this.props.shopCartList.name}</Text>
                        <Text>单价：{this.props.shopCartList.price}</Text>

                        <Image src={this.state.shopCartList.food_img} alt={"图片"} style={{position:'relative' ,width:"50%",height:'80%',}}>
                        </Image>
                      <View style={{float:'right'}}>
                            <AtInputNumber
                                min={0}
                                max={10}
                                step={1}
                                value={this.state.value}
                                onChange={this.handleChange.bind(this)}
                            />
                        </View>
                    </View>

            )


        }
}
export default ShopCartComponent;
