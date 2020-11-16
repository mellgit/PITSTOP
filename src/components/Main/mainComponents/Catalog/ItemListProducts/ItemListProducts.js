import React from 'react'
import style from './ItemListProducts.module.css'

const ItemListProducts = (props) => {
    return (
        <div className={style.product}>
            <div className={style.image}>
                <img src={props.img}/>
            </div>

            <div className={style.data}>
                <p className={style.name}>
                    {props.name}
                </p>
                <p className={style.priceWithoutDiscount}>
                    {props.priceWithoutDiscount}  ₽
                </p>
                <p className={style.price}>
                    {props.price}  ₽
                </p>
                <button 
                    className={`${style.addToBasket} ${props.isAdded ?style.is_added :""}`} 
                    onClick={props.isAdded ?()=>{} :props.onClick}
                >
                    {props.isAdded ?"Добавлено" :"В корзину"}
                </button>
            </div>
        </div>
    )
}

export default ItemListProducts