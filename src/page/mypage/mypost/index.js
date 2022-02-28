import React, {useEffect, useState} from "react";
import "./index.css"
import PageBtn from "../../../compoents/pageBtn"
// import { Link } from "react-router-dom";
import {withRouter} from 'react-router-dom'
import {AuthContext} from "../../../app"
import axios from "axios";
import qs from "qs";


function Mypost(props) {
    // 按钮展开状态
    const [mypostState, setMypostState] = useState("0")
    // 头像信息
    const [fileData, setFileData] = useState(null)
    const avatarUpData = (value) => {
        let formData = new FormData()
        formData.append('file', fileData); // 第一个参数file，由API决定
        axios({
            method: 'POST',
            url: `http://localhost:8000/api/upload/avatar?token=${value.token}`,
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            },
            timeout: 50000
        }).then((res) => {

            console.log("图片上传状态", res.data)
            alert("图片上传成功")
            value.getData(value.token)
        }).catch((error) => {
            console.log("出错了", error)
            // alert("出错了")
        })
    }
    //密码更改状态
    const [nickData, setNickData] = useState({})
    // 上传更新用户信息
    const userUpdate = (value) => {
        axios({
            method: "POST",
            url: `http://localhost:8000/api/user/update?token=${value.token}`,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: qs.stringify({
                ...value.auth, ...nickData
            }),
        }).then((response) => {
            if (response.data.code !== "SUCCESS") {
                alert(response.data.message)
            } else {
                console.log("上传成功,个人信息为：", response)
                alert("信息更新成功")
                value.getData(value.token)
                setMypostState("0")
            }
        }).catch((error) => {
            console.log("上传更新用户信息出错了", error)
        })
    }

    // 发布页和收藏页切换
    const [mypoststate, setMypoststate] = useState("one")
    const [limitpage, setLimitpage] = useState({
        limit: 5,
        page: 1,
    })
    //获取帖子列表
    const [postDtoList, setPostDtoList] = useState([])
    //帖子信息
    const [postSearchDto, setPostSearchDto] = useState({})
    // 获取文章数据
    useEffect(() => {
        let token = window.localStorage.token
        if (props.myzoneState === "1") {
            let myGet = mypoststate === "one" ? "my" : "myFavorite"
            axios({
                method: "GET",
                url: `http://localhost:8000/api/post/${myGet}?limit=${limitpage.limit}&page=${limitpage.page}&token=${token}`,
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            }).then((response) => {
                if (response.data.code !== "SUCCESS") {
                    alert(response.data.message)
                } else {
                    if (response.data.data) {
                        setPostDtoList(response.data.data.postDtoList)
                        setPostSearchDto(response.data.data.postSearchDto)
                        // console.log("个人帖子获取成功：", response.data.data)
                    }
                }
            }).catch((error) => {
                console.log("个人帖子获取失败", error)
            })
        }
        return () => {
        }
    }, [limitpage, mypoststate, props.myzoneState])

    return (

        <AuthContext.Consumer>
            {(value) => {
                return (
                    // 顶部横幅样式\
                    <div className="right">
                        <div className="mypost">
                            <div className="menu2" hidden={props.myzoneState !== "0"}>
                                {/*头像*/}
                                <div className="row">
                                    <div className="left">头像</div>
                                    <div className="right">
                                        <div className="avatar" style={{backgroundImage: `url(${value.auth.avatar})`}}/>
                                    </div>
                                </div>
                                {/*头像按钮*/}
                                <span className="arrow" onClick={() => {
                                    setMypostState(mypostState === "1" ? "0" : "1")
                                }}>&gt;</span>
                                {/*头像上传栏*/}
                                <div className="row" hidden={mypostState !== "1"}

                                >
                                    <input type="file" accept="image/*"
                                           onChange={(e) => {
                                               setFileData(e.target.files[0])
                                           }}
                                    />
                                    <input type="button" value="上传"
                                           onClick={() => {
                                               avatarUpData(value)
                                           }}
                                    />
                                </div>
                                {/*用户名*/}
                                <div className="row">
                                    <div className="left">用户名</div>
                                    <div className="right">{value.auth.username}</div>
                                </div>
                                {/*昵称*/}
                                <div className="row">
                                    <div className="left">昵称</div>
                                    <div className="right"
                                         style={{maxWidth: "100px", overflow: "hidden"}}>{value.auth.nickname}</div>
                                </div>
                                {/*昵称更改按钮*/}
                                <span className="arrow" onClick={() => {
                                    setMypostState(mypostState === "2" ? "0" : "2")
                                }}>&gt;</span>
                                {/*昵称更改栏*/}
                                <div className="row" hidden={mypostState !== "2"}>
                                    <div className="input">
                                        <input type="text" placeholder="请输入新的昵称" onChange={(e) => {
                                            setNickData({nickname: e.target.value})
                                        }}/>
                                        <span
                                            onClick={() => {
                                                nickData.nickname === undefined ? alert("请输入昵称") : userUpdate(value)
                                            }}>提交</span>
                                    </div>
                                </div>
                                {/*密码更改*/}
                                <div className="row">
                                    <div className="left">修改密码</div>
                                </div>
                                {/*密码更改按钮*/}
                                <span className="arrow" onClick={() => {
                                    setMypostState(mypostState === "3" ? "0" : "3")
                                }}>&gt;</span>
                                {/*密码更改遮罩层*/}
                                <div hidden={mypostState !== "3"}>
                                    <div className="mask"/>
                                    <div className="login-page"><span className="left">修改密码</span><span
                                        className="right" onClick={() => {
                                        setMypostState("0")
                                    }}>x</span>
                                        <div className="row3">
                                            <div className="input">
                                                <form>
                                                    <input type="password" placeholder="请输入原密码" autoComplete="on"
                                                           onChange={(e) => {
                                                               setNickData({...nickData, oldPassword: e.target.value})
                                                           }}/>
                                                    <input type="password" placeholder="请输入新密码" autoComplete="on"
                                                           onChange={(e) => {
                                                               setNickData({...nickData, password: e.target.value})
                                                           }}/>
                                                    <input type="password" placeholder="请再次输入新密码" autoComplete="on"
                                                           onChange={(e) => {
                                                               setNickData({...nickData, password2: e.target.value})
                                                           }}/>
                                                    <div className="button"><span onClick={() => {
                                                        if (nickData.password === "" || nickData.password === undefined) {
                                                            alert("未输入密码")
                                                            return false
                                                        }
                                                        console.log(nickData);
                                                        nickData.password === nickData.password2 ? userUpdate(value) : alert("两次密码不一致")
                                                    }}>提交</span></div>
                                                </form>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="menu4" hidden={props.myzoneState !== "1"}>
                                <div className="row1">
                                <span className={mypoststate === "one" ? "active" : ""}
                                      onClick={() => {
                                          setMypoststate("one")
                                          if (mypoststate !== "one") {
                                              setLimitpage({...limitpage, page: 1})
                                          }
                                      }}
                                >我发的帖</span>
                                    <span className={mypoststate === "two" ? "active" : ""}
                                          onClick={() => {
                                              setMypoststate("two")
                                              if (mypoststate !== "two") {
                                                  setLimitpage({...limitpage, page: 1})
                                              }
                                          }}
                                    >收藏的帖</span>
                                </div>
                                {

                                    postDtoList.map((item) => {

                                        return (<div className="row2" key={item.post.id}>
                                            <div>
                                                <div className="left">
                                             <span className="title"
                                                   onClick={() => {
                                                       props.history.push(`./detail/${item.post.id}`)
                                                   }}
                                             >{item.post.title}</span><span
                                                    className="time">{item.post.createdAt}</span></div>
                                                <div className="right">
                                                    <div>
                                                        <div className="count">{item.post.favoriteCount}</div>
                                                        人收藏
                                                    </div>
                                                    <div>
                                                        <div className="count">{item.post.viewCount}</div>
                                                        次浏览
                                                    </div>
                                                    <div>
                                                        <div className="count">{item.post.replyCount}</div>
                                                        个回复
                                                    </div>
                                                </div>
                                            </div>
                                        </div>)
                                    })
                                }

                            </div>

                        </div>
                        {props.myzoneState === "1" ?

                            // 需要文章数目，页面尺寸，页面页数，
                            // 改变页面的方法
                            <PageBtn
                                setLimitpage={setLimitpage}
                                limitpage={{
                                    ...limitpage,
                                    total: postSearchDto.total
                                }}

                            /> : ""}
                    </div>
                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(Mypost)