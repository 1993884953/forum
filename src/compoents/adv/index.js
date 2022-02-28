import React from "react";
import "./index.css"

import {AuthContext} from "../../app"


export default function Adv() {

    return (

        <AuthContext.Consumer>
            {(value) => {
                // console.log("home",value.auth)
                return (
                    <div className="adv">
                        <div className="wantadv">广告招募哦~</div>
                        <div className="daimaku"><span>代码酷</span></div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}