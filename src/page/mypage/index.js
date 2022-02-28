import React, {useState} from "react";
import "./index.css"
import Myzone from "./myzone"
import Mypost from "./mypost"
// import PageBtn2 from "./pageBtn2"
// import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../app"


function Mypage(props) {
    const [myzoneState, setMyzoneState] = useState("0")

    return (

        <AuthContext.Consumer>
            {(value) => {
                return (
                    // 顶部横幅样式
                    <div className="mypage">
                        <div className="content">
                            <div className="left">
                                <Myzone myzoneState={myzoneState} setMyzoneState={setMyzoneState}/>
                            </div>

                            <Mypost
                                myzoneState={myzoneState}
                            />

                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Mypage)