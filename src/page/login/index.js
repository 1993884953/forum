import React, {useEffect, useState} from "react";
import "./index.css"
// import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../app"
import qqpng from "./imgs/qqpng.png";
import wbpng from "./imgs/wbpng.png";
import bdpng from "./imgs/bdpng.png";
import gitpng from "./imgs/gitpng.png";
import axios from "axios";
import qs from "qs";


function Login(props) {
    const [userword, setUserword] = useState({
        username: "",
        password: "",
    })
    useEffect(() => {
        // console.log(userword)
        return () => {
        }
    }, [userword])
    //登录的点击事件
    const loginClick = (value) => {
        // let token = window.localStorage.getItem("token")
        if (userword.password === "" || userword.username === "") {
            alert("账户名或者密码不能为空")
            return false
        }
        axios({
            method: "POST",
            url: `http://localhost:8000/api/token/create`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: qs.stringify({
                "username": userword.username,
                "password": userword.password,
            })
        }).then((response) => {
            if (response.data.code === "SUCCESS") {
                alert("登录成功")
                window.localStorage.setItem("token", response.data.data.token)
                props.history.push("./")
                value.setToken(response.data.data.token)
            } else {
                alert(response.data.message)
                setUserword({username: "", password: "",})
            }
        }).catch((error) => {
            console.log("出错了", error)
            alert("出错了")
        })
    }

    return (

        <AuthContext.Consumer>
            {(value) => {
                return (
                    // 顶部横幅样式
                    <div className="login">
                        <div className="content">
                            <div className="namelogin">
                                <div className="namelogin2">
                                    <div className="coderow1">
                                        <span className="active">密码登录</span><span>邮箱登录</span><span>扫码登录</span>
                                    </div>
                                    <div className="coderow2">
                                        <div className="codemessage">用户名</div>
                                        <div className="codeinput">
                                            <input type="text" placeholder="请输入您的用户名"
                                                   value={userword.username}
                                                   onChange={(e) => {
                                                       setUserword({
                                                           ...userword,
                                                           username: e.target.value
                                                       })
                                                   }}
                                            />
                                        </div>
                                        <div className="pointout">使用第三方账号注册过的用户需先绑定手机/邮箱号</div>
                                    </div>
                                    <div className="coderow2">
                                        <div className="codemessage">密码</div>
                                        <div className="codeinput">
                                            <form>
                                                <input type="password" placeholder="请输入6到16位的密码"
                                                       autoComplete="on"
                                                       value={userword.password}
                                                       onChange={(e) => {
                                                           setUserword({
                                                               ...userword,
                                                               password: e.target.value
                                                           })
                                                       }}
                                                />
                                            </form>
                                        </div>
                                        <div className="pointout">如果您之前未设置过密码，请使用其他方式登陆后在账户中心设置密码</div>
                                    </div>
                                    <div className="coderow3">
                                        <span className="btn"
                                              onClick={
                                                  () => {
                                                      loginClick(value)
                                                  }
                                              }
                                        >提交</span><span
                                        className="gotoregist"
                                        onClick={() => {
                                            props.history.push("./regist")
                                        }}
                                    >尚无账号？点击此处去注册</span></div>
                                    <div className="coderow4">
                                        <span>或者使用社交账号注册</span>
                                        <img src={qqpng} alt=""/>
                                        <img src={wbpng} alt=""/>
                                        <img src={bdpng} alt=""/>
                                        <img src={gitpng} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Login)