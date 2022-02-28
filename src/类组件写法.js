import "./app.css"
import React, {Component} from 'react'
import {HashRouter, Switch, Route} from "react-router-dom";
import Head from "./compoents/head";


//导入上下文组件
export const AuthContext = React.createContext({
    user: null,
    setUser: () => {
    },
})


//设置上下文函数，方便数据之间的通信
export default class app extends Component {
    constructor(props) {
        super(props);

        //传入参数的时候会自动修改state里面的数据
        this.setUser = (u) => {
            // this.setState({ auth: { user: u , setUser: this.setUser} })
            this.setState({auth: {...this.state.auth, user: u}})
        }
        //设置state的默认属性状态
        this.state = {
            auth: {
                user: {
                    token: '',
                    mobile: '无',
                },
                setUser: this.setUser
            }
        }
    }

    //渲染添加路由
    render() {
        return (
            // 导出生产者方便组件之间的通信
            <AuthContext.Provider value={this.state.auth}>
                <HashRouter>
                    <Head></Head>
                    <Switch>
                        <Route exact path="/"><Head></Head></Route>
                        <Head></Head>
                        <Head></Head>
                    </Switch>
                </HashRouter>
            </AuthContext.Provider>

        )
    }
}


