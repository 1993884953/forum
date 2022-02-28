import React, {useState, useEffect} from "react";
import "./index.css"
// import { Link } from "react-router-dom";
// import {Link ,HashRouter, Switch, Route} from "react-router-dom";
// import Nav from "./nav";
// import Left from "./left";
// import Right from "./right";

import {AuthContext} from "../../../app"
import axios from "axios";


export default function Hottopic() {
    const [hottopics, setHottopics] = useState([])
    const getData = () => {
        let token = window.localStorage.token
        axios({
            method: "GET",
            url: `http://localhost:8000/api/post/getTagOrder?hotTagNumber=5&token=${token}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then((response) => {
            if (response.data.code === "SUCCESS") {
                setHottopics(response.data.data)
                // console.log("获取成功,热门信息为：", response.data.data)
            } else {
                alert(response.data.message)
            }
        }).catch((error) => {
            console.log("出错了", error)
        })
    }
    useEffect(() => {
        getData()
        return () => {
        }
    }, [])

    return (
        <AuthContext.Consumer>
            {(value) => {
                return (
                    <div className="hottopic">
                        <div className="topic">热门话题</div>
                        <div className="tags">
                            {
                                hottopics.map((item) => {
                                    return (
                                        <span key={item.id}>
                                           {item.name}
                                        </span>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}