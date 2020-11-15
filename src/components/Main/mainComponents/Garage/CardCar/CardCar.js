import React from 'react'
import style from './CardCar.module.css'
import Fields from './Fields/Fields'
import Order from './Order/Order'
import {scroll_bar} from '../../../../../App.module.css'

const CardCar = (props) => {
    return (
        <div className={style.card_car}>
            <Fields car={props.car}/>

            <div className={style.orders}>
                <p className={style.title}>Текущие заказы</p>

                <div className={`${style.list_orders} ${scroll_bar}`}>
                    {
                        props.car.orders.length === 0
                            ?<p className={style.message}>Вы ничего не заказали :)</p>
                            :props.car.orders.map(order => <Order key={order.id} order={order}/>)
                    }
                </div>

                <div className={style.buttons}>
                    <button>Каталог</button>
                    <button>История заказов</button>
                </div>
            </div>
        </div>
    )
}

export default CardCar