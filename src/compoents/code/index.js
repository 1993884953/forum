import React from "react";
import "./index.css"
// import { Link } from "react-router-dom";
// import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../app"
import code1png from "./imgs/code1png.png"

export default function Head(props) {

    return (

        <AuthContext.Consumer>
            {(value) => {

                return (
                    // 顶部横幅样式
                    <div className="code">
                        <div className="message">点击图片或者QQ扫码加社区官方交流群~</div>
                        <div className="qrcode">
                            <div><img src={code1png} alt=""/></div>
                            <div><span>扫码添加作者微信</span></div>
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

// export default withRouter(Head)