import React from "react"
import { Link } from "react-router-dom"
import style from "./SubElement.module.css"

const SubElement = (props) => {
    return (
        <Link to={props.url} className={style.item}>
            <img src={props.icon}/>
            <span className={style.name}>{props.name}</span>
        </Link>
    )
}

export default SubElement