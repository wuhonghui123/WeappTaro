import {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import {Image, Text, View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './addcut.scss'
import {getAllFoodInfo, getEvent, getFoodCount, setFoodCount} from "../../../utils/common";
const myEvent=getEvent()
import addpng from '../../../assets/img/add.png'
import cutpng from '../../../assets/img/cut.png'
class AddCut extends Component {
    constructor() {
        super(...arguments);
        this.state={
            Num:0
        };
    }
    componentDidMount(){
        this.setState({Num:getFoodCount(this.props.food)});
        myEvent.on("changeCata",()=>{
            //监听到分类改变 进行菜品数量刷新
            this.setState({Num:getFoodCount(this.props.food)});
        })
    }
    CutFood(){
        if(this.props.food){
            if(this.state.Num>0){
                setFoodCount(this.props.food,this.state.Num,"cut",()=>{
                    this.setState({Num:getFoodCount(this.props.food)})
                    myEvent.emit("addcut")
                    console.log('菜',this.props.food,'数量',this.state.Num
                    );
                });
            }else{
                console.error("当前加减菜品出现异常")
            }
        }
        let  {allPrice,allNum}=getAllFoodInfo();
        console.log('总价',allPrice);
    }
    AddFood(){
        if(this.props.food){
            setFoodCount(this.props.food,this.state.Num,"add",()=>{
                this.setState({Num:getFoodCount(this.props.food)})
                myEvent.emit("addcut")
                console.log('菜',this.props.food,'数量',this.state.Num

                );
            });

        }
        let  {allPrice,allNum}=getAllFoodInfo();
        console.log('总价',allPrice);
    }
    render() {
        let {Num}=this.state;
        let hideClass=Num>0?"":"hide";
        return (
            <View className="addcut">
                <Image   className={"opeate_img "+hideClass} src={cutpng} onClick={this.CutFood.bind(this)}></Image>
                <Text className={"food_num "+hideClass}>{Num}</Text>
                <Image  className="opeate_img" src={addpng} onClick={this.AddFood.bind(this)}></Image>
            </View>
        );
    }
}

export default AddCut;
