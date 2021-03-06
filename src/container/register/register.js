import React, { Component } from "react";
import { List, InputItem, Radio, WhiteSpace, Button } from "antd-mobile";
import { Redirect } from "react-router-dom";
import Logo from "./../../component/logo/logo";
import { connect } from "react-redux";
import { register } from "../../redux/user.redux";
import "./../../index.css";
import commForm from '../../component/commForm/commForm'
@connect(
  state => state.user,
  { register }
)
@commForm
class Register extends Component {
  constructor(props) {
    super(props);  
    this.handleRegister = this.handleRegister.bind(this);
  }
  componentDidMount() {
    this.props.handleChange('type', 'genius');
  }
  handleRegister() {
    this.props.register(this.props.state);
    // console.log(this.state)
  }
  render() {
    const RadioItem = Radio.RadioItem;
    return (
      <div>
        {/* 如果存在跳转路径，跳转到相应页面 */}
        {this.props.redirectTo ? (
          <Redirect to={this.props.redirectTo} />
        ) : null}
        <Logo />
        <List>
          {this.props.msg ? <p className="err_msg">{this.props.msg}</p> : null}
          <InputItem onChange={v => this.props.handleChange("user", v)}>
            用户
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.props.handleChange("pwd", v)}
          >
            密码
          </InputItem>
          <WhiteSpace />
          <InputItem
            type="password"
            onChange={v => this.props.handleChange("repeatpwd", v)}
          >
            确认密码
          </InputItem>
          <WhiteSpace />
          <RadioItem
            checked={this.props.state.type === "genius"}
            onChange={v => this.handleChange("type", "genius")}
          >
            牛人
          </RadioItem>
          <RadioItem
            checked={this.props.state.type === "boss"}
            onChange={v => this.props.handleChange("type", "boss")}
          >
            BOSS
          </RadioItem>
          <WhiteSpace />
          <Button type="primary" onClick={this.handleRegister}>
            注册
          </Button>
        </List>
      </div>
    );
  }
}

export default Register;
