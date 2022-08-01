import { Component } from 'react';
import { View, Text } from '@tarojs/components';
import Taro from "@tarojs/taro";
import cata from "./cata.scss"



class Cata extends Component {
  constructor() {
    super(...arguments);
    this.state={
      cata:[
        {name:"专场",id:1},
        {name:"热销",id:1},
        {name:"折扣",id:1},
        {name:"主食",id:1},
        {name:"热炒",id:1}
      ]
    }
  }
  render () {
    return (
      <View className="cata">
        {this.state.cata.map((item,index)=>{
        return <Text className="cata_name" key={item.id}>{item.name}</Text>
        }
        )}
      </View>
    )
  }
}

export default Cata

