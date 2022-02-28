import React, {useEffect, useState} from "react";
import "./index.css"
import seepng from "../imgs/seepng.png"
import messagepng from "../imgs/messagepng.png"
import favoritetruepng from "../imgs/favoritetruepng.png"
import favoritefalsepng from "../imgs/favoritefalsepng.png"
import {withRouter} from "react-router-dom";
import {AuthContext} from "../../../app"
import axios from "axios";


// categoryId={categoryId}
// rankstate={rankstate}
// limitpage={limitpage}

function Allposts(props) {
    // 文章列表z
    const [postDtoList, setPostDtoList] = useState([])
    // 获取并且判断url状态，进行axios
    // console.log(props.navs)

    useEffect(() => {
        let urls = ""
        let token = window.localStorage.token

        if (props.rankstate === "home") {
            urls = `http://localhost:8000/api/post/list?title=${props.titles}&recommend=0&categoryId=${props.categoryId}&page=${props.limitpage.page}&limit=${props.limitpage.limit}&token=${token}`
        } else if (props.rankstate === "" || props.titles !== "") {
            setPostDtoList([])
            return
        } else {
            urls = `http://localhost:8000/api/post/${props.rankstate}?token=${token}`
            if (props.rankstate === "recommend") {
                urls = `http://localhost:8000/api/post/${props.rankstate}?token=${token}&recommend=1`
            }
        }

        axios({
            method: "GET",
            url: urls,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        }).then((response) => {
            if (response.data.code !== "SUCCESS") {
                // console.log(response.data)
            } else {

                // props.rankstate === "recommend" ?setPostDtoList(response.data.data.postDtoList):setPostDtoList(response.data.data)
                // props.setTotal(props.rankstate === "recommend" ? response.data.data.postSearchDto.total :  response.data.data.length)
                console.log(response.data.data)
                setPostDtoList(response.data.data.postDtoList)
                props.setTotal(response.data.data.postSearchDto.total)

            }

        }).catch((error) => {
            console.log("个人帖子获取失败", error)
        })
        return () => {
        }
    }, [props])


    return (

        <AuthContext.Consumer>
            {(value) => {
                // console.log("top", value.auth)
                // console.log(props.navs[0].name)
                return (
                    // 顶部横幅样式
                    <div>
                        {
                            postDtoList.length > 0 ? postDtoList.map((item) => {

                                return (
                                    <div className="allposts" key={item.post.id}>
                                        <div className="left">
                                            <div className="avatar"
                                                 style={{backgroundImage: `url(${item.avatar})`}}/>
                                        </div>
                                        <div className="right">
                                            <div className="essencetitle">
                                                <div className="posttitle">
                                                    <span className="share" hidden={item.post.categoryId === 0}>
                                                        {value.category ? value.category[item.post.categoryId - 1] : "其它"}
                                                    </span>
                                                    <span
                                                        className="title"
                                                        onClick={() => {
                                                            if (window.localStorage.getItem("token")) {
                                                                props.history.push(`./detail/${item.post.id}`)
                                                            } else {
                                                                props.history.replace("./login")

                                                            }

                                                        }}
                                                    >{item.post.title}</span></div>
                                            </div>
                                            <div>
                                                <div className="info"><span>{item.nickname}</span><span
                                                    className="lv">LV{item.level}</span><span
                                                    className="date">{item.post.createdAt}</span><span className="star"><img
                                                    src={item.favorite === true ? favoritetruepng : favoritefalsepng}
                                                    alt=""/>{item.post.favoriteCount}</span></div>
                                                <div className="see">
                                                <span>
                                                    <img src={seepng} alt=""/>{item.post.viewCount}
                                                </span>
                                                    <span className="dialogue">
                                                    <img src={messagepng} alt=""/>
                                                    <span className="post replyCount">  {item.post.replyCount}</span>
                                                </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) : ""
                        }
                    </div>

                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Allposts)