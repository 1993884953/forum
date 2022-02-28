import React, {useEffect, useState} from "react";
import "./index.css"
// import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../app"
import head1png from "./imgs/head1png.png";
import head2png from "./imgs/head2png.png";
import userEvent from '@testing-library/user-event'

function Head(props) {
    // console.log(props.history)
    const [name, setName] = useState()
    return (
        <AuthContext.Consumer>
            {(value) => {
                return (
                    // 顶部横幅样式
                    <div className="head">
                        <div className="head2">
                            {/*回到首页*/}
                            <div className="left">
                                <div className="itnova"
                                     onClick={() => {
                                         if (props.history.location.pathname.indexOf("/detail/") !== -1) {
                                             props.history.replace("../")
                                         } else {
                                             props.history.replace("./")
                                         }
                                     }}>
                                    <div><img
                                        src={head1png} alt=""
                                    /></div>
                                    <div>代码酷社区</div>
                                </div>
                            </div>
                            {/*昵称显示，检测有无nickname*/}
                            <div className="right">
                                {
                                    value.auth.nickname !== "" && value.auth.nickname !== undefined ?
                                        //输出你好
                                        (<div className="out" onClick={() => {

                                            if (props.history.location.pathname.indexOf("/detail/") !== -1) {
                                                props.history.replace("../mypage")
                                            } else {
                                                props.history.replace("./mypage")
                                            }
                                        }}>
                                            <div>你好，{value.auth.nickname}</div>
                                            <div>
                                                <img src={head2png} alt=""/>
                                            </div>
                                        </div>)
                                        :
                                        // 输出请登录
                                        (<div className="out">
                                            <div>
                                                <div onClick={() => {
                                                    props.history.replace("./regist")
                                                }}>注册
                                                </div>
                                                <div onClick={() => {
                                                    props.history.replace("./login")
                                                }}>登录
                                                </div>
                                            </div>

                                            <div>
                                                <img
                                                    src={head2png} alt=""
                                                    onClick={() => {
                                                        alert("请先登录")
                                                        props.history.replace("./login")

                                                    }}
                                                />
                                            </div>
                                        </div>)
                                }
                            </div>
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Head)