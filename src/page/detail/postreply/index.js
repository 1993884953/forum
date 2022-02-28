import React from "react";
import "./index.css"
import {withRouter} from "react-router-dom";
import {AuthContext} from "../../../app"
import axios from "axios";


import messagepng from "../imgs/messagepng.png"
import liketruepng from "../imgs/liketruepng.png"
import likefalsepng from "../imgs/likefalsepng.png"
import deletepng from "../imgs/deletepng.png"

function Postreply(props) {
    //删除axios
    // console.log("props.history",props.history)
    const Deletepost = (id) => {
        if (window.confirm("确认删除")) {

            let token = window.localStorage.getItem("token")
            axios({
                method: "POST",
                url: `http://localhost:8000/api/post/delete?token=${token}`,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                params: {"id": id}
            }).then((response) => {
                if (response.data.code === "SUCCESS") {

                    alert("删除成功", response.data)
                    props.getPostreply()
                } else {
                    alert(response.data.message)
                }

            }).catch((error) => {
                alert("出错了")
            })
        }
    }
    //点赞axios
    const likestate = (id) => {
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
                props.getPostreply()
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
                // console.log("props.parentId",props.parentId)
                return (
                    // 顶部横幅样式
                    props.postreply.map((item) => {
                        return (
                            <div className="postreply" key={item.post.id}>
                                <div className="reply">
                                    <div className="user">
                                        <div className="left">
                                            <div><img
                                                src={item.avatar} alt=""/></div>
                                        </div>
                                        <div className="right">
                                            <div className="up"><span className="username">{item.nickname}</span><span
                                                className="lv">LV0</span></div>
                                            <div className="down"><span className="date">{item.post.createdAt}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="replyContent">{item.post.content}</div>
                                    <div className="likeAndReply">
                                        <span><img
                                            src={item.like === true ? liketruepng : likefalsepng} alt=""
                                            onClick={() => {
                                                likestate(item.post.id)

                                            }}
                                        />{item.post.likeCount}</span>
                                        <span
                                            hidden={props.parentId !== 0}

                                        ><img
                                            src={messagepng} alt=""
                                            onClick={() => {
                                                // props.history.replace(`./${item.post.id}`)
                                                window.open("/#/detail/" + item.post.id);
                                            }}

                                        />{item.post.replyCount}
                                        </span>
                                        <span><img
                                            src={deletepng} alt="" className="bin"
                                            hidden={item.userId !== value.auth.id}
                                            onClick={() => {
                                                Deletepost(item.post.id)
                                            }}
                                        />
                                        </span>
                                    </div>
                                </div>
                            </div>

                        )


                    })

                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Postreply)