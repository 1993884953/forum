import React, {useEffect, useState} from "react";
import "./index.css"
// import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../app"

import Right from "./right";
import ReplyCount from "./replyCount";
import Postreply from "./postreply";
import Postdetail from "./postdetail";
import axios from "axios";
import qs from "qs";
import PageBtn from "../../compoents/pageBtn";


function Detail(props) {
    //帖子回复相关
    const [texts, setTexts] = useState("")
    //回复axios
    const textsstate = () => {
        if (texts === "") {
            alert("请输入内容")
            return false
        }
        let id = props.match.params.id;
        let token = window.localStorage.getItem("token")
        let urls = `http://localhost:8000/api/post/reply?token=${token}`
        axios({
            method: "POST",
            url: urls,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: qs.stringify({
                "id": id,
                "content": texts,
            })
        }).then((response) => {
            if (response.data.code === "SUCCESS") {
                setTexts("")
                alert("回帖成功")
                getPostreply()
            } else {
                alert(response.data.message)
            }
        }).catch((error) => {
            alert("出错awdwa了")
        })
    }
    //帖子评论、
    const [postreply, setPostreply] = useState([])
    const [limitpage, setLimitpage] = useState({
        limit: 5,
        page: 1,
    })
    const [total, setTotal] = useState(0)
    const getPostreply = () => {
        let id = props.match.params.id;
        let token = window.localStorage.getItem("token")
        let urls = `http://localhost:8000/api/post/replyList?id=${id}&limit=${limitpage.limit}&page=${limitpage.page}&token=${token}`
        axios({
            method: "get",
            url: urls,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then((response) => {
            console.log("获取AAAA成功", response.data.data)
            // // setDetail(response.data.data.postDto)
            setPostreply(response.data.data.postDtoList)
            setTotal(response.data.data.postSearchDto.total)
        }).catch((error) => {
            alert("出错了")
        })
    }
    useEffect(() => {
        getPostreply()
        return () => {
        }
    }, [])// eslint-disable-line
    //帖子隐藏
    const [parentId, setParentId] = useState(0)

    return (
        <AuthContext.Consumer>
            {(value) => {

                return (
                    <div className="detail">
                        <div className="content">
                            <div className="left">
                                <Postdetail
                                    texts={texts}
                                    setTexts={setTexts}
                                    textsstate={textsstate}
                                    setParentId={setParentId}

                                />
                                <ReplyCount total={total}/>
                                <Postreply
                                    parentId={parentId}
                                    postreply={postreply}
                                    getPostreply={getPostreply}
                                />
                                {
                                    total === 0 ? "" : <PageBtn
                                        setLimitpage={setLimitpage}
                                        limitpage={{
                                            ...limitpage,
                                            total: total
                                        }}
                                    />
                                }
                            </div>
                            <Right/>
                        </div>
                    </div>

                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Detail)