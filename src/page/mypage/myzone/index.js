import React from "react";
import "./index.css"
// import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../../app"
import mypage1 from "../imgs/mypage1png.png";
import mypage2 from "../imgs/mypage2png.png";


function Myzone(props) {


    return <AuthContext.Consumer>
        {value => {

            return <div className="myzone">

                <div>
                    <div className={props.myzoneState === "0" ? "active" : ""}
                         onClick={() => {
                             props.setMyzoneState("0")
                         }}><img
                        src={mypage1} alt=""


                    /><span>账户中心</span></div>
                    <div className={props.myzoneState === "1" ? "active" : ""}
                         onClick={() => {
                             props.setMyzoneState("1")
                         }}><img src={mypage2} alt=""/><span>帖子管理</span></div>
                </div>
                <span className="quit"
                      onClick={() => {
                          window.localStorage.removeItem("token")
                          value.setToken("")
                          // value.getData("")
                          props.history.replace("./login")
                      }}

                >退出</span></div>
        }}
    </AuthContext.Consumer>
}

export default withRouter(Myzone)