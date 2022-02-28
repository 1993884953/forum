import React from "react";
import "./index.css"
import {withRouter} from "react-router-dom";
import {AuthContext} from "../../../app"

function Postreply(props) {

    return (

        <AuthContext.Consumer>
            {(value) => {
                // console.log("value.category",value.category)
                return (
                    // 顶部横幅样式
                    <div className="replyCount">
                        <div className="line"/>
                        <div className="line line2"/>
                        <div className="standard"><span className="replynumbers">{props.total}个回复</span></div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Postreply)