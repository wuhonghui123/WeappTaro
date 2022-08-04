import {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import {Text, View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './cata.scss'
class Cata extends Component {
    constructor(props) {
        super(props);
        this.state={
            selectCata:null,
            cata:[
                {name:"专场",id:1},
                {name:"热销",id:2},
                {name:"折扣",id:3},
                {name:"主食",id:4},
                {name:"热炒",id:5},
                {name:"凉菜",id:6},
                {name:"特色乱炖",id:7},
            ]
        };
    }

    clickHandle(item){
        console.log(item);
    }
    render() {
        let {cata,selectCata}=this.state;
        return (
            <View className="cata">{
                cata.map((item,index)=>{
                    return (<Text onClick={this.clickHandle.bind(this,item)} className={"cata_name"}
                    key={item.id}>{item.name}</Text>)
                })
            }
            </View>
        );
    }
}

export default Cata;
