//组件导入区
import "./app.css"
import Head from "./compoents/head";
import Home from "./page/home";
import Login from "./page/login";
import Regist from "./page/regist";
import Mypage from "./page/mypage";
import Detail from "./page/detail";
// import Detail from "./page/detail";
// import Post from "./components/post";

//路由调用
import {HashRouter, Switch, Route} from "react-router-dom";
//导入React,方法
import React, {useState, useEffect} from "react"
import axios from "axios";
import Post from "./page/post";


//导入上下文
export const AuthContext = React.createContext(undefined, undefined)

export default function App(props) {
    // 本地缓存
    const [token, setToken] = useState(window.localStorage.token ? window.localStorage.token : "")
    // 个人信息获取并储存
    const [auth, setAuth] = useState({
        avatar: "",
        createdAt: "",
        id: "",
        mobile: null,
        nickname: "",
        username: "",
    })
    const getData = (token) => {
        axios({
            method: "GET",
            url: `http://localhost:8000/api/user/whoami?token=${token}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},

        }).then((response) => {
            response.data.code === "ERROR" ? alert(response.data.message) :

                setAuth({...response.data.data})
            // console.log("获取成功,个人信息为：",response.data.data)
        }).catch((error) => {
            console.log("出错了", error)
        })
    }
    useEffect(() => {
        if (token === "" || token === undefined) {
            setAuth({
                avatar: "",
                createdAt: "",
                id: "",
                mobile: null,
                nickname: "",
                username: "",
            })
        } else {
            getData(token)
        }
        return () => {
        }
    }, [token])
    const [category, setCategory] = useState([])
    useEffect(() => {
        let token = window.localStorage.token
        axios({
            method: "GET",
            url: `http://localhost:8000/api/post/categories?token=${token}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then((response) => {
            if (response.data.code === "SUCCESS") {
                // setCategory(response.data.data)
                // console.log("getnavs获取成功,热门信息为：", response.data.data)
                setCategory(response.data.data.map((obj) => {
                    return obj.name;
                }))
                // console.log("response.data.data.id：", typeof response.data.data[1].id)
            } else {
                alert(response.data.message)
            }
        }).catch((error) => {
            console.log("出错了", error)
        })
        return () => {
        }
    }, [])
    return (
        // 导出生产者方便组件之间的通信
        <AuthContext.Provider value={{token, setToken, auth, setAuth, getData, category}}>
            <HashRouter>
                <Head><title>hello</title></Head>
                <Switch>
                    <Route exact path="/"> <Home/></Route>
                    <Route path="/login"><Login/></Route>
                    <Route path="/regist"><Regist/></Route>
                    <Route path="/mypage"><Mypage/></Route>
                    <Route path="/post"><Post/></Route>
                    <Route path="/detail/:id"><Detail/></Route>
                </Switch>
            </HashRouter>
        </AuthContext.Provider>

    )
}









