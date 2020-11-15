import React from 'react'
import NothingHere from '../../../../../../assets/components/NothingHere/NothingHere'
import style from './Basket.module.css'
import svgCheckboxActive from '../../../../../../assets/images/checkboxActive.svg'
import svgCheckboxNoActive from '../../../../../../assets/images/checkboxNoActive.svg'
import Product from './Product/Product'
import {scroll_bar} from '../../../../../../App.module.css'

const Basket = (props) => {

    const styleNothingHere = {
        marginTop: "35px"
    }

    const buyProducts = () => {
        const arrId = props.basket.filter(product => product.isSelected)
            .map(product => product.id)

        props.buyProducts(arrId)
    }

    return (
        <div className={style.basket}>
            {
                props.basket.length === 0
                    ? <NothingHere style={styleNothingHere} />
                    : <div className={style.products}>
                        <div className={style.checkbox} onClick={() => { props.toggleIsSelected(!props.isSelectedAll) }}>
                            Выделеть всё <img src={props.isSelectedAll ? svgCheckboxActive : svgCheckboxNoActive} />
                        </div>
                        <div className={`${style.list_products} ${scroll_bar}`}>
                            {
                                props.basket.map(product => <Product key={product.id} product={product} />)
                            }
                        </div>
                    </div>
            }

            <div className={style.information}>
                <div className={style.total}>
                    <p>Итого</p>
                    <p>{props.total} ₽</p>
                </div>

                <div className={style.totalWithoutDiscount}>
                    <p>Товары, {props.count} штук</p>
                    <p>{props.totalWithoutDiscount}  ₽</p>
                </div>

                <div className={style.discount}>
                    <p>Скидка</p>
                    <p>-{props.totalWithoutDiscount - props.total} ₽</p>
                </div>

                <button
                    className={style.paidOrder}
                    disabled={props.basket.length === 0}
                    onClick={buyProducts}
                >Оплатить заказ</button>
            </div>
        </div>
    )
}

export default Basket