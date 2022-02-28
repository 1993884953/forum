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
import {email} from "mockjs/src/mock/random/web";


function Head(props) {
    const [userword, setUserword] = useState({
        nickname: "",
        username: "",
        password: "",
        password2: ""
    })
    useEffect(() => {
        // console.log(userword)
        return () => {
        }
    }, [userword])
    const registClick = (value) => {
        if (userword.password === "" || userword.username === "" || userword.password2 === "" || userword.nickname === "") {
            alert("账户名或者密码不能为空")
            return false
        }
        userword.password !== userword.password2 ? alert("两次密码不一致") :
            axios({
                method: "POST",
                url: `http://localhost:8000/api/user/create`,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: qs.stringify(userword)
            }).then((response) => {
                console.log(response.data)
                if (response.data.code === "SUCCESS") {
                    alert("注册成功")
                    window.localStorage.setItem("token", response.data.data.token)
                    value.setToken(response.data.data.token)
                    props.history.push("./")
                } else {
                    alert(response.data.message)
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

                    <div className="regist">
                        <div className="content">
                            <div className="nameregist">
                                <div className="nameregist2">
                                    <div className="registrow1"><span className="active">用户名注册</span></div>
                                    <div className="registrow2">
                                        <div className="registmessage">用户名</div>
                                        <div className="registinput">
                                            <input type="text" placeholder="请输入您的用户名"
                                                   onChange={(e) => {
                                                       setUserword({
                                                           ...userword,
                                                           username: e.target.value
                                                       })
                                                   }}
                                            /></div>
                                    </div>
                                    <div className="registrow2">
                                        <div className="registmessage">昵称</div>
                                        <div className="registinput">
                                            <input type="text" placeholder="请输入您的昵称"
                                                   onChange={(e) => {
                                                       setUserword({
                                                           ...userword, nickname: e.target.value
                                                       })
                                                   }}
                                            /></div>
                                    </div>
                                    <div className="registrow2">
                                        <div className="registmessage">设置密码</div>
                                        <div className="registinput">
                                            <form>
                                                <input type="password" placeholder="请输入6到16个字符"
                                                       autoComplete="on"
                                                       onChange={(e) => {
                                                           setUserword({
                                                               ...userword, password: e.target.value
                                                           })
                                                       }}
                                                />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="registrow2">
                                        <div className="registmessage">确认密码</div>
                                        <div className="registinput">
                                            <form>
                                                <input type="password" placeholder="请再次输入您的密码"
                                                       autoComplete="on"
                                                       onChange={(e) => {
                                                           setUserword({
                                                               ...userword, password2: e.target.value
                                                           })
                                                       }}
                                                />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="registrow3"><span className="btn"
                                                                      onClick={() => {
                                                                          registClick(value)
                                                                      }}
                                    >提交</span><span
                                        className="gotologin"
                                        onClick={() => {
                                            props.history.replace("./login")
                                        }}
                                    >已有账号？点击此处去登陆</span></div>
                                    <div className="registrow4"><span>或者使用社交账号注册</span><img
                                        src={qqpng} alt=""/><img src={wbpng} alt=""/><img src={bdpng} alt=""/><img
                                        src={gitpng} alt=""/></div>
                                </div>
                            </div>
                        </div>
                    </div>

                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Head)