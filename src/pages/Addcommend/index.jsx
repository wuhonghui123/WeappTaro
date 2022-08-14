import {Component} from 'react'
import {AtInput, AtForm, AtButton, AtRate} from 'taro-ui'
import Taro from "@tarojs/taro";
import {Text} from "@tarojs/components";

export class Addcommend extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            comments: '',
            stars:'',
            order_id:Taro.getCurrentInstance().router.params.id,
            user_id:Taro.getCurrentInstance().router.params.user_id,
        }
    }
    handleChange (comments) {
        this.setState({
            comments
        })
    }
    handleChange1 (stars) {
        this.setState({
            stars
        })
    }
    onSubmit (event) {

    }
    componentWillUnmount() {
    }
    submit=()=>{
        console.log(this.state);
        Taro.request({
            url: 'https://g6.glypro19.com/weappapi/commend/add',
            data: this.state,
            method:"POST",
            success: function (res) {
                console.log(res);
            }
        })
    }

    render() {
        return (
            <AtForm
                onSubmit={this.onSubmit.bind(this)}>
            <AtInput
                name='value1'
                title='评论'
                type='text'
                placeholder=''
                value={this.state.comments}
                onChange={this.handleChange.bind(this)}
            />
                <Text>{'\n'}{'\n'}评论星级:</Text>
                <AtRate
                    value={this.state.stars}
                    onChange={this.handleChange1.bind(this)}
                />
                <Text>{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}{'\n'}</Text>
                <AtButton type='primary' size='small' onClick={this.submit}>提交</AtButton>
            </AtForm>
        )
    }
}
export default Addcommend
