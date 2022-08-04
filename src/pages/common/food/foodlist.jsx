import {Component} from 'react';
import { AtTabBar }  from 'taro-ui'
import {Image, Text, View} from '@tarojs/components'
import Taro from '@tarojs/taro'
import './foodlist.scss'

class FoodList extends Component {
    constructor() {
        super(...arguments);
        this.state={};
    }
    render() {
        let {selectCata,currentList}=this.props;
        console.log(currentList);
        return (
            <View className="foodlist">
                <Text>{selectCata?selectCata.name:""}</Text>
                <View className="foodlist_forlist">
                    {
                        currentList.map((item,index)=>{
                            console.log(item.title);
                            return(
                                <View key={item.id} className="foodlist_item">
                                    {/*<Image className="foodlist_item_img" src={item.img===2?require('../../../assets/img/2.jpg'):require('../../../assets/img/1.jpg')}/>*/}
                                    <View className="foodlist_item_info">
                                        <Text>{item.title}</Text>
                                        <Text>月售：{item.sole}</Text>
                                        <Text className="price">¥{item.price}</Text>
                                    </View>
                                </View>
                                )
                        })
                    }
                </View>
            </View>
        );
    }
}

export default FoodList;
