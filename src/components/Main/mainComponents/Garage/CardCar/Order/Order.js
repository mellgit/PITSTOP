import React from 'react'
import style from './Order.module.css'

const Order = (props) => {
    return (
        <div className={style.order}>
            <div className={style.image}>
                <img src={props.order.img} />
            </div>

            <div className={style.title}>
                <p>{props.order.name}</p>
            </div>

            <div className={style.status}>
                <p><span className={style.grey}>Статус: </span>{props.order.status}</p>
            </div>
        </div>
    )
}

export default Order