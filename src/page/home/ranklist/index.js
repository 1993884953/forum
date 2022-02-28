import React from "react";
import "./index.css"

import {withRouter} from "react-router-dom";
import {AuthContext} from "../../../app"


function Ranklist(props) {

    return (

        <AuthContext.Consumer>
            {(value) => {
                // console.log("top", value.auth)
                return (
                    // 顶部横幅样式
                    <div className="ranklist">
                        <div className="left">
                            <div className={props.rankstate === "home" ? "active" : ""}
                                 onClick={() => {
                                     props.setRankstate("home")
                                 }}
                            >综合
                            </div>
                            <div>|</div>
                            <div className={props.rankstate === "week" ? "active" : ""}
                                 onClick={() => {
                                     props.setRankstate("week")
                                 }}
                            >周榜
                            </div>
                            <div>|</div>
                            <div className={props.rankstate === "month" ? "active" : ""}
                                 onClick={() => {
                                     props.setRankstate("month")
                                 }}
                            >月榜
                            </div>
                            <div>|</div>
                            <div className={props.rankstate === "recommend" ? "active" : ""}
                                 onClick={() => {
                                     props.setRankstate("recommend")
                                 }}
                            >精华
                            </div>
                        </div>
                        <div className="right">
                            <div>抢沙发</div>
                            <div>|</div>
                            <div className="active">按最新</div>
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Ranklist)