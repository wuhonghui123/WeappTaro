import {Component} from "react";
import {Checkbox, Image, Text, View} from "@tarojs/components";
import React from "react";
import {AtInputNumber, AtCheckbox, AtButton} from 'taro-ui';



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
        this.props.changeShopCartList(value,this.state.shopCartList.id);
        console.log("lll",value,this.state.shopCartList.id)
        this.setState({
            value
        })
    }


    changeCheck(){
        if(this.props.shopCartList.check==="true"){
            this.state.shopCartList.check= false
        }else {
            this.state.shopCartList.check= true
        }
        this.props.changeCheck(this.state.shopCartList.check)
    }

    render()
        {
            return (
                    <View style="float:left;border: 1px dashed #ccc;width:100%;height:150px">
                        <view style={{width:'100%', height:'5%'}}>
                            <Checkbox  style={{float:"left"}} checked={this.state.shopCartList.check} value={this.props.shopCartList.name} onClick={this.changeCheck.bind(this)}>
                            </Checkbox>
                            <Text style='float:left'>商品：{this.props.shopCartList.name}</Text>
                            &nbsp;&nbsp;&nbsp;&nbsp;
                            <Text>单价：{this.props.shopCartList.price}</Text>
{/*                            <view style={{position:'relative',width:"5px",height:'50px',left:'50px',top:'50px',background:"red"}}>
                                <AtButton size='5px 5px' circle='true' >-</AtButton>
                            </view>*/}
                        </view>
                        <view style={{position:'relative',width:"200px",height:'20px',left:"30%",top:"-12%"}}>

                        </view>
                        <view style={{float:"left" ,width:"50%",height:'80%',}}>
                            <Image src={this.state.shopCartList.food_img} alt={"图片"} style={{width:"100%",height:'100%'}}>
                            </Image>
                        </view>

                      <View style={{position:"relative",left:'70%',top:'-20%',height:'10%',width:'10%'}}>
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
