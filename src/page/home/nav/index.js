import React, {useState} from "react";
import "./index.css"
import searchpng from "../imgs/searchpng.png"
import {withRouter} from "react-router-dom";
import {AuthContext} from "../../../app"

function Nav(props) {

    const [title, setTitle] = useState("")


    return (

        <AuthContext.Consumer>
            {(value) => {
                // console.log("value.category",value.category)
                return (
                    // 顶部横幅样式
                    <div className="nav">
                        <div className="nav2">
                            <ul>
                                <li className={props.categoryId === 0 ? "active" : ""}
                                    onClick={() => {
                                        props.setCategoryId(0)
                                        props.setLimitpage({...props.limitpage, page: 1})
                                    }}

                                >首页
                                </li>
                                {
                                    value.category.map((item, index) => {
                                        return (
                                            <li
                                                key={index}
                                                className={props.categoryId === index + 1 ? "active" : ""}
                                                onClick={() => {
                                                    props.setCategoryId(index + 1)
                                                    props.setLimitpage({...props.limitpage, page: 1})
                                                }}
                                            >{value.category[index]}</li>
                                        )
                                    })
                                }
                            </ul>
                            <div>
                                <div className="post"
                                     onClick={() => {
                                         props.history.push("./post")
                                     }}
                                >发表新帖
                                </div>
                                <div className="magnifier">
                                    <input type="text" placeholder="搜索帖子"
                                           value={title}
                                           onChange={(e) => {
                                               setTitle(e.target.value)
                                           }}
                                    /><img
                                    onClick={() => {
                                        props.setTitles(title)
                                    }}
                                    src={searchpng} alt=""/></div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Nav)