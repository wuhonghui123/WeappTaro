import {Component} from 'react'
import {Text, View} from '@tarojs/components'
import TabBar from "../common/tabBar";
import {AtAvatar, AtButton} from 'taro-ui'
import {AtGrid} from "taro-ui"
import Taro from "@tarojs/taro";
import './index.scss'

class My extends Component {
    constructor (props) {
        super(props);
        this.state = {
          userInfo:[],
          name:'',
          hasUserInfo:false,
          avatarUrl:'https://jdc.jd.com/img/200',
            openid:""

        }
      }

    componentWillUnmount() {
    }
    componentWillMount() {
        Taro.getSetting({
            success:  (res) =>{
                if (res.authSetting['scope.userInfo']) {
                    let userInfo = Taro.getStorageSync('userInfo')['0']
                    console.log('缓存',userInfo);
                    this.setState({
                        name:userInfo.nickName,
                        avatarUrl:userInfo.avatarUrl,
                        hasUserInfo: true
                    })
                }
            }
        })
    }
    componentDidShow() {
    }

    componentDidHide() {
    }

    login=()=> {
        Taro.getUserProfile({
                desc: '用于完善会员资料', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    console.log(res.userInfo.nickName)
                    console.log(res)
                    this.setState({
                        name:res.userInfo.nickName,
                        avatarUrl:res.userInfo.avatarUrl,
                        hasUserInfo: true
                    })
                    Taro.setStorageSync('userinfo',res.userInfo);
                    Taro.request({
                        url: 'http://localhost:8095/users/register',
                        data: {
                            openid:Taro.getStorageSync('openid'),
                            nickName:res.userInfo.nickName,
                            avatarUrl:res.userInfo.avatarUrl
                        },
                        method:"POST",
                        success: function (res) {
                            console.log(res);
                        }
                    })
                    // 开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
                }

            }
        )
    }

    handleClick(value) {
        console.log("tabBar ====" + value);
        switch (value.value) {
            case '我的地址':
                Taro.navigateTo({
                    url: '/pages/myaddress/index'
                });
                break;
            case '我的评论':
                Taro.navigateTo({
                    url: '/pages/mycomment/index'
                });
                break;
            case '添加评论':
                Taro.navigateTo({
                    url: '/pages/Addcommend/index'
                });
                break;
            case 2:
              Taro.navigateTo({
                url: '/pages/order/index' //'/pages/physicalIdentity/healthKnowledge'
              });
              break;
            case '获取code':
                Taro.login({
                    success: function (res) {
                        console.log(res.code);
                        if (res.code) {
                            //发起网络请求
                            Taro.request({
                                url: 'http://localhost:8095/users/wxlogin',
                                data: {
                                    code: res.code
                                },
                                success: function (res) {
                                    console.log(res);
                                }
                            })
                        } else {
                            console.log('登录失败！' + res.errMsg)
                        }
                    }
                })
              break;
            case '获取用户地址':
                Taro.chooseAddress({
                    success: function (res) {
                        console.log(res.userName)
                        console.log(res.postalCode)
                        console.log(res.provinceName)
                        console.log(res.cityName)
                        console.log(res.countyName)
                        console.log(res.detailInfo)
                        console.log(res.nationalCode)
                        console.log(res.telNumber)
                    }
                })
                break;
            default:
                break;
        }
    }

    render() {
        let name = this.state.name;
        let avatarUrl = this.state.avatarUrl;
        let hideClass=this.state.hasUserInfo===false?"":"hide";

        return (
            <View>
                <View className="AtAvatar">
                <AtAvatar className="at-avatar" circle
                          image={avatarUrl}></AtAvatar>{name}
                          </View>
                <AtButton className={"login "+hideClass} type='primary' size='small' onClick={this.login.bind(this)}>登录</AtButton>

                <AtGrid data={
                    [
                        {
                            image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
                            value: '我的地址'
                        },
                        {
                            image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
                            value: '我的评论'
                        },
                        {
                            image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
                            value: '添加评论'
                        },
                        {
                            image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t10660/330/203667368/1672/801735d7/59c85643N31e68303.png',
                            value: '新品首发'
                        },
                        {
                            image: 'https://img14.360buyimg.com/jdphoto/s72x72_jfs/t17251/336/1311038817/3177/72595a07/5ac44618Na1db7b09.png',
                            value: '获取code'
                        },
                        {
                            image: 'https://img30.360buyimg.com/jdphoto/s72x72_jfs/t5770/97/5184449507/2423/294d5f95/595c3b4dNbc6bc95d.png',
                            value: '获取用户地址'
                        }
                    ]
                }
                        onClick={this.handleClick.bind(this)}
                />


                <TabBar tabBarCurrent={3}/>
            </View>
        )
    }
}

export default My

