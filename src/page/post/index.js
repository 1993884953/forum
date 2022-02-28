import React, {useEffect, useState} from "react";
import "./index.css"
// import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../app"
import axios from "axios";
import qs from "qs"
// import Left from "./left";
// import Right from "./right";

function Post(props) {
    // 获取标签属性
    const [category, setCategory] = useState([])
    useEffect(() => {
        let token = window.localStorage.token
        axios({
            method: "GET",
            url: `http://localhost:8000/api/post/categories?token=${token}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then((response) => {
            if (response.data.code === "SUCCESS") {
                setCategory(response.data.data)
                console.log("getnavs获取成功,热门信息为：", response.data.data)
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
    // 内容信息
    const [content, setContent] = useState("")
    const [tag, setTag] = useState("")
    const [title, setTitle] = useState("")
    const [categoryId, setCategoryId] = useState("0")
    const [status, setStatus] = useState("1")
    const UploadData = () => {
        let token = window.localStorage.token

        axios({
            method: "POST",
            url: `http://localhost:8000/api/post/create?token=${token}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: qs.stringify(
                {
                    content: content,
                    tag: tag,
                    title: title,
                    categoryId: categoryId,
                    status: status,
                })
        }).then((response) => {
            console.log(response.data)
            if (response.data.code === "SUCCESS") {
                alert("帖子上传成功")
                props.history.push("./")
            } else {
                alert(response.data.message)
            }
        }).catch((error) => {
            console.log("出错了", error)
            alert("出错了")
        })
    }

    return (
        <AuthContext.Consumer>
            {(value) => {
                // console.log("post", value.auth)
                return (
                    <div className="post">
                        <div className="content">
                            <div className="postnew">
                                <div className="postnew2">
                                    <div className="posthead"><span>发表新帖</span></div>
                                    <div className="title"><span>标题</span>
                                        <input type="text"
                                               value={title}
                                               onChange={(e) => {
                                                   setTitle(e.target.value)
                                               }}
                                        /></div>
                                    <div>
                                        <textarea name="" id=""
                                                  value={content}
                                                  onChange={(e) => {
                                                      setContent(e.target.value)
                                                  }}
                                        /></div>
                                    <div className="addtitle">添加标签：</div>
                                    <div className="label">
                                        <input type="text" placeholder="输入标签，多个标签以空格割开"
                                               value={tag}
                                               onChange={(e) => {
                                                   setTag(e.target.value)
                                               }}
                                        /></div>
                                    <div className="select"><span className="selecttitle">所在专栏</span>
                                        <select name="" id="category"
                                                onChange={(e) => {
                                                    setCategoryId(e.target.value)
                                                    console.log(e.target.value)
                                                }}
                                        >
                                            <option value="0">请选择</option>

                                            {
                                                category.map((item) => {
                                                    return (
                                                        <option value={item.id} key={item.id}>{item.name}</option>
                                                    )
                                                })
                                            }

                                        </select></div>
                                    <div className="select"><span className="selecttitle">阅读权限</span>
                                        <select name="" id=""
                                                onChange={(e) => {
                                                    // console.log('====================================');
                                                    console.log(e.target.value);
                                                    // console.log('====================================');
                                                    setStatus(e.target.value)
                                                }}
                                        >
                                            <option value="1">默认，所有用户可见</option>
                                            <option value="2">隐藏，仅个人空间中可见</option>
                                        </select><span
                                            className="text">除非有重要信息，不然建议设置所有用户可见，这样不会影响您帖子的人气，点击查看用户权限</span>
                                    </div>
                                    <div className="post"
                                         onClick={() => {
                                             UploadData()
                                         }}
                                    >立即发布
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Post)