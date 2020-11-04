import React from "react"
import { Link } from "react-router-dom"
import style from "./MenuItem.module.css"
import arrowDown from "../../../assets/images/arrow_down.svg"
import arrowUp from "../../../assets/images/arrow_up.svg"
import SubElement from "./SubElement/SubElement"

const MenuItem = (props) => {
    return (
        <div className={`${style.menu_item} ${props.isOpen ? `${style.active}` : null}`}>
            {
                props.isNeedToGoByUrl
                    ? <Link to={props.url} className={style.title} onClick={props.toggleOpen}>
                        <img src={props.iconHover} />
                        <span className={style.name}>{props.name}</span>
                        { 
                            props.children.length > 0
                                ? <img src={props.isOpen ? arrowUp : arrowDown} className={style.arrow} />
                                : null
                        }
                    </Link>
                    : <span className={style.title} onClick={props.toggleOpen}>
                        <img src={props.icon} />
                        <span className={style.name}>{props.name}</span>
                        { 
                            props.children.length > 0
                                ? <img src={props.isOpen ? arrowUp : arrowDown} className={style.arrow} />
                                : null
                        }
                    </span>
            }

            {
                props.isOpen && props.children.length > 0
                    ? <div className={style.list_items}>
                        {
                            props.children.map(item => <SubElement {...item} key={item.name}/>)
                        }
                    </div>
                    : null
            }
        </div>
    )
}

export default MenuItem