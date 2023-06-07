import React from "react"
import s from './New.module.css'

const New = (props) => {
    return (
        <div className={s.item}>
            <div className={s.flex}>
                <p className={s.title}>{props.news.title}</p>
                <span/>
                <p className={s.text}>{props.news.text}</p>
            </div>
            <img className={s.img} src={props.news.img} />
        </div>
    )
}

export default New