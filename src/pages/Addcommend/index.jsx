import {Component} from 'react'
import { AtInput, AtForm,AtButton } from 'taro-ui'

export class Addcommend extends Component {
    constructor() {
        super(...arguments)
        this.state = {
            value: ''
        }
    }
    handleChange (value) {
        this.setState({
            value
        })
        return value
    }

    componentWillUnmount() {
    }


    render() {
        return (
            <AtForm>
            <AtInput
                name='value1'
                title='评论'
                type='text'
                placeholder=''
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
            />
            <AtInput
                name='value2'
                title='评论星级'
                type='number'
                placeholder=''
                value={this.state.value}
                onChange={this.handleChange.bind(this)}
            />
                <AtButton type='primary' size='small'>提交</AtButton>
            </AtForm>
        )
    }
}
export default Addcommend
