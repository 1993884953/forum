import React, {useEffect, useState} from "react";
import "./index.css"

import {AuthContext} from "../../../app"
import axios from "axios";


export default function Vistors() {
    const [vistorss, setVistorss] = useState([])
    const getvistors = () => {
        let token = window.localStorage.token
        axios({
            method: "GET",
            url: `http://localhost:8000/api/user/visitor?token=${token}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then((response) => {
            if (response.data.code === "SUCCESS") {
                setVistorss(response.data.data)
                // console.log("访客获取成功,热门信息为：", response.data.data)
            } else {
                alert(response.data.message)
            }
        }).catch((error) => {
            console.log("出错了", error)
        })
    }
    useEffect(() => {
        getvistors()
        return () => {
        }
    }, [])
    return (

        <AuthContext.Consumer>
            {(value) => {
                // console.log("home",value.auth)
                return (
                    <div className="vistors">
                        <div className="recent">最近访客</div>
                        <div className="avatars">
                            <div>
                                {
                                    vistorss.map((item, index) => {
                                        return (
                                            <div className="mem" key={index}>
                                                <div><img src={item.avatar} alt=""/></div>
                                                <div className="memName">{item.username}</div>
                                            </div>
                                        )
                                    })
                                }

                            </div>
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}