import React, { Component } from 'react'

import Goback from '../../goback/index'
import {Nav} from '../../home/index'
class Login extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var goback = this.props.history.goBack
        return (
            <div>
                <Goback goback={goback}></Goback>
                <span className='login-title'>京东登录注册</span>
                <form action='/admin/login' method='POST'>
                    <div className='login-input'>
                        <input type='text' name='username' autoComplete='off' placeholder='请输入京东账号'></input>
                        <input type='password' name='password' placeholder='请输入与密码'></input>
                    </div>

                    <input type='submit' value='登录'></input>
                </form>
                <Nav></Nav>
            </div>
        )
    }
}
class Logined extends Component{
    render(){
        return (
            <div>
                
            </div>
        )
    }
}
export default Login