import React, {useEffect, useState} from "react";
import "./index.css"

import {withRouter} from "react-router-dom";
import {AuthContext} from "../../app"


function PageBtn(props) {
    const [newpage, setNewpage] = useState(props.limitpage.page)

    useEffect(() => {
        setNewpage(props.limitpage.page)
        return () => {
        }
    }, [props.limitpage])
    let pageBtns = () => {
        let el = []
        if (props.limitpage.total) {
            //最大页数
            let maxpage = Math.ceil(props.limitpage.total / props.limitpage.limit)
            // 判断需要生成几个div，不需要就跳过
            for (let i = 1; i <= maxpage; i++) {
                // if (i > props.limitpage.page - 4&&i < props.limitpage.page + 4) {
                //     el.push(<span
                //         onClick={() => {
                //             props.setLimitpage({
                //                 ...props.limitpage, page: i
                //             })
                //         }}
                //         className={i === props.limitpage.page ? "active" : ""} key={i}>{i}</span>)
                // }
                if (i < 8 && props.limitpage.page < 5) {
                    el.push(<span
                        onClick={() => {
                            props.setLimitpage({
                                ...props.limitpage, page: i
                            })
                        }}
                        className={i === props.limitpage.page ? "active" : ""} key={i}>{i}</span>)
                } else if (i > maxpage - 7 && props.limitpage.page > maxpage - 4) {
                    el.push(<span
                        onClick={() => {
                            props.setLimitpage({
                                ...props.limitpage, page: i
                            })
                        }}
                        className={i === props.limitpage.page ? "active" : ""} key={i}>{i}</span>)
                } else if (i > props.limitpage.page - 4 && i < props.limitpage.page + 4) {
                    el.push(<span
                        onClick={() => {
                            props.setLimitpage({
                                ...props.limitpage, page: i
                            })
                        }}
                        className={i === props.limitpage.page ? "active" : ""} key={i}>{i}</span>)
                }

            }
            return el
        }
    }

    return (

        <AuthContext.Consumer>
            {(value) => {
                // console.log("top", value.auth)
                return (
                    // 顶部横幅样式
                    <div className="pageBtn">共{props.limitpage.total}条
                        <span className={props.limitpage.page === 1 ? "dead" : ""}
                              onClick={(e) => {
                                  if (props.limitpage.page > 1) {
                                      props.setLimitpage({...props.limitpage, page: props.limitpage.page - 1})

                                  }
                              }}
                        >&lt;</span>
                        {
                            pageBtns()
                        }
                        <span
                            className={props.limitpage.page === Math.ceil(props.limitpage.total / props.limitpage.limit) ? "dead" : ""}
                            onClick={() => {
                                if (props.limitpage.page < Math.ceil(props.limitpage.total / props.limitpage.limit)) {
                                    props.setLimitpage({...props.limitpage, page: props.limitpage.page + 1})

                                }
                            }}
                        >&gt;</span>
                        <select name="" id=""
                                onChange={
                                    (e) => {
                                        props.setLimitpage({page: 1, limit: e.target.value})
                                        setNewpage(1)
                                    }
                                }
                        >
                            <option value="5">5条/页</option>
                            <option value="10">10条/页</option>
                            <option value="15">15条/页</option>
                        </select>
                        &nbsp;&nbsp;跳至&nbsp;&nbsp;
                        <input type="number"
                               value={newpage}
                               onChange={(e) => {

                                   setNewpage(e.target.value)

                               }}
                               onKeyDown={(e) => {
                                   if (e.keyCode === 13) {
                                       let maxpage = Math.ceil(props.limitpage.total / props.limitpage.limit)
                                       // console.log(typeof newpage)
                                       if (newpage >= 1 && newpage <= maxpage) {
                                           props.setLimitpage({...props.limitpage, page: parseInt(newpage)})
                                       } else if (newpage >= maxpage) {
                                           props.setLimitpage({...props.limitpage, page: maxpage})

                                       } else {
                                           props.setLimitpage({...props.limitpage, page: 1})

                                       }
                                   }
                               }}
                        />&nbsp;&nbsp;页
                    </div>

                )
            }}
        </AuthContext.Consumer>
    )
}

export default withRouter(PageBtn)