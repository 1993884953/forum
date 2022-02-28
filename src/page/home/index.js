import React, {useState} from "react";
import "./index.css"
// import { Link } from "react-router-dom";
// import {Link ,HashRouter, Switch, Route} from "react-router-dom";
import Nav from "./nav";
import Hottopic from "./hottopic";
import Vistors from "./vistors";
import Ranklist from "./ranklist";
import Allposts from "./allposts";


import Adv from "../../compoents/adv";
import Code from "../../compoents/code";
import PageBtn from "../../compoents/pageBtn";
// import Left from "./left";
// import Right from "./right";

import {AuthContext} from "../../app"


export default function Home() {
    // 导航栏状态
    const [categoryId, setCategoryId] = useState(0)
    const [navs, setNavs] = useState([])
    // 排行榜状态
    const [rankstate, setRankstate] = useState("home")
    // 页面尺寸
    const [limitpage, setLimitpage] = useState({
        limit: 5,
        page: 1
    })
    //获取输入标题
    const [titles, setTitles] = useState("")
    const [total, setTotal] = useState(0)
    return (

        <AuthContext.Consumer>
            {(value) => {
                // console.log("home",value.auth)
                return (
                    <div className="home">
                        <Nav
                            navs={navs}
                            setNavs={setNavs}
                            setTitles={setTitles}
                            categoryId={categoryId}
                            setCategoryId={setCategoryId}
                            limitpage={limitpage}
                            setLimitpage={setLimitpage}
                        />
                        <div className="content">
                            <div className="left">
                                <div className="welcome">欢迎您的到来</div>
                                <div>
                                    <div><Ranklist
                                        rankstate={rankstate}
                                        setRankstate={setRankstate}
                                    /></div>
                                    <div><Allposts
                                        titles={titles}
                                        categoryId={categoryId}
                                        rankstate={rankstate}
                                        limitpage={limitpage}
                                        setTotal={setTotal}
                                    /></div>

                                    {rankstate === "home" ? <PageBtn
                                        setLimitpage={setLimitpage}
                                        limitpage={{
                                            ...limitpage,
                                            total: total
                                        }}
                                    /> : <div className="alreadyBottom">已经到底了~~</div>}   </div>
                            </div>
                            <div className="right">
                                <div><Hottopic/></div>
                                <div><Vistors/></div>
                                <div><Adv/></div>
                                <div><Code/></div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}