import React, {useEffect, useState} from "react";
import "./index.css"
import {withRouter} from "react-router-dom";
import {AuthContext} from "../../../app"
import seepng from "../imgs/seepng.png"
import messagepng from "../imgs/messagepng.png"
import liketruepng from "../imgs/liketruepng.png"
import likefalsepng from "../imgs/likefalsepng.png"
import favoritetruepng from "../imgs/favoritetruepng.png"
import favoritefalsepng from "../imgs/favoritefalsepng.png"
import deletepng from "../imgs/deletepng.png"
import sharepng from "../imgs/sharepng.png"
import axios from "axios";

function Postdetail(props) {

    // 帖子详情
    const [detail, setDetail] = useState({post: {}})
    //帖子状态
    const [detailstate, setDetailstate] = useState({
        tagList: [],
        favorite: false,
        like: false,
        postDto: []
    })
    //帖子标题
    const [contents, setContents] = useState(0)
    // 获取帖子数据
    useEffect(() => {
        if (window.localStorage.getItem("token")) {
            let id = props.match.params.id;
            let token = window.localStorage.getItem("token")
            axios({
                method: "get",
                url: `http://localhost:8000/api/post/view?id=${id}&limit=5&page=1&token=${token}`,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            }).then((response) => {
                console.log("获取awdawwd成功", response.data.data)
                setDetail(response.data.data.postDto)
                setDetailstate(response.data.data)
                props.setParentId(response.data.data.postDto.post.parentId)
                setContents(response.data.data.postDto.post.content)
            }).catch((error) => {
                alert("出错了")

            })
        } else {
            props.history.replace("../login")

        }

        return () => {

        }
    }, [props.match.params.id, detailstate.like, detailstate.favorite])// eslint-disable-line
    // 删除axios
    const Deletepost = (value) => {
        if (window.confirm("确认删除")) {
            let id = props.match.params.id;
            let token = window.localStorage.getItem("token")
            axios({
                method: "POST",
                url: `http://localhost:8000/api/post/delete?token=${token}`,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: {"id": id}
            }).then((response) => {
                if (response.data.code === "SUCCESS") {
                    alert("删除成功", response.data)
                    props.history.replace("../")
                } else {
                    alert(response.data.message)
                }

            }).catch((error) => {
                alert("出错了")
            })
        }
    }
    //点赞axios
    const likestate = () => {
        let id = props.match.params.id;
        let token = window.localStorage.getItem("token")
        let urls = `http://localhost:8000/api/post/like?token=${token}`
        axios({
            method: "POST",
            url: urls,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            params: {"id": id}
        }).then((response) => {
            if (response.data.code === "SUCCESS") {
                // console.log("点赞成功", response.data.data.likeBool)
                setDetailstate({...detailstate, like: response.data.data.likeBool})
            } else {
                alert(response.data.message)
            }

        }).catch((error) => {
            alert("出错awdwa了")
        })

    }
    // 收藏axios
    const favoritestate = () => {
        let id = props.match.params.id;
        let token = window.localStorage.getItem("token")
        let urls = `http://localhost:8000/api/post/favorite?token=${token}`
        axios({
            method: "POST",
            url: urls,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            params: {"id": id}
        }).then((response) => {
            if (response.data.code === "SUCCESS") {
                setDetailstate({...detailstate, favorite: response.data.data.favoriteBool})
            } else {
                alert(response.data.message)
            }
        }).catch((error) => {
            alert("出错awdwa了")
        })

    }


    return (
        <AuthContext.Consumer>
            {(value) => {
                // console.log("like", detail.like)
                // console.log("favorite.", detail.favorite)
                return (
                    // 顶部横幅样式
                    <div className="postdetail">
                        <div className="row1">
                            {detail.post.title ? detail.post.title : "回复" + contents}
                        </div>
                        <div className="row2">
                            <div className="left">水至清则无鱼</div>
                            <div className="right">
                                <img
                                    src={deletepng} alt="删除" className="delete"
                                    hidden={detail.userId !== value.auth.id}
                                    onClick={() => {
                                        Deletepost()
                                    }}/>
                                <span className="dialogue">
                                    <img src={messagepng} alt=""/>{detail.post.replyCount}
                                    <img src={seepng} alt=""/>{detail.post.viewCount}
                                </span>
                            </div>
                        </div>
                        <div className="row3">
                            <div className="left">
                                <div>
                                    <div className="avatar"
                                         style={{backgroundImage: `url(${detail.avatar})`}}>
                                    </div>
                                </div>
                            </div>
                            <div className="right">
                                <div className="up"><span className="username">{detail.nickname}</span><span
                                    className="lv">LV{detail.level}</span><span
                                    className="date">{detail.post.createdAt}发表</span></div>
                                <div className="down"><span className="adv">点击群号免费加入社区交流群：</span><span>888888888</span>
                                </div>
                            </div>
                        </div>
                        <div className="row4"><span>{detail.post.content}</span></div>
                        <div className="row5"><span className="like"
                                                    onClick={() => {
                                                        likestate()
                                                    }}

                        ><img
                            src={detailstate.like === true ? liketruepng : likefalsepng}
                            alt=""/>点赞({detail.post.likeCount})</span>
                            <span className="star"
                                  hidden={detail.post.parentId !== 0}
                                  onClick={() => {
                                      favoritestate()

                                  }}
                            ><img
                                src={detailstate.favorite === true ? favoritetruepng : favoritefalsepng}
                                alt=""
                            />收藏({detail.post.favoriteCount})</span><span className="share"><img
                                src={sharepng} alt=""/>分享</span></div>
                        <div className="row6">相关标签：
                            {
                                detailstate.tagList.map((item) => {
                                    return <span key={item.id}>{item.name}</span>
                                })
                            }

                        </div>
                        <div className="row7">
                            <textarea name="" id="" value={props.texts}
                                      onChange={(e) => {
                                          props.setTexts(e.target.value)
                                      }}
                            />
                            <div className="postReply">
                                <button
                                    onClick={() => {
                                        props.textsstate()
                                    }}
                                >回复
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Postdetail)