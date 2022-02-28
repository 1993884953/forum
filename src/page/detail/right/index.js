import React from "react";
import "./index.css"
import Adv from "../../../compoents/adv";
import Code from "../../../compoents/code"
// import { Link } from "react-router-dom";

import {AuthContext} from "../../../app"

export default function Right(props) {

    return (

        <AuthContext.Consumer>
            {(value) => {
                // console.log("left", value.auth)
                return (
                    <div className="right">
                        <div>
                            <div className="relatedpost">相关帖子</div>
                        </div>
                        <div>
                            <Adv/>
                        </div>
                        <div>
                            <Code/>
                        </div>
                        <div>
                            <div className="blogroll">
                                <div className="friendlink">友情链接</div>
                                <div className="daimaku"><span>代码酷</span><span>官方Q群</span><span
                                    className="active">申请友链</span></div>
                            </div>
                        </div>
                    </div>

                )
            }}
        </AuthContext.Consumer>
    )
}