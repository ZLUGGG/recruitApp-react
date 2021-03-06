import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card, WhiteSpace, WingBlank} from 'antd-mobile'
import { getUserList } from '../../redux/chatuser.redux'
import UserCard  from '../../component/usercard/usercard'

@connect(
    state => state.chatuser,
    {getUserList}
)
class Boss extends Component{
    componentDidMount() {
        this.props.getUserList('genius')
    }
    render() {
        const Header = Card.Header;
        const Body = Card.Body
        console.log(this.props)
        return (
            <UserCard userlist={this.props.userlist}></UserCard>
        )
    }
}

export default Boss