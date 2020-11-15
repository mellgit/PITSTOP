import React from 'react'
import AddCarWindow from './AddCarWindow/AddCarWindow'
import CardCar from './CardCar/CardCar'
import style from './Garage.module.css'
import {scroll_bar} from '../../../../App.module.css'

const Garage = (props) => {
    const openAddCarWindow = () => props.toggleAddCarWindow(true)
    const closeAddCarWindow = () => props.toggleAddCarWindow(false)

    return (
        <div className={style.garage}>
            {
                props.isOpenAddCarWindow
                    ? <AddCarWindow closeAddCarWindow={closeAddCarWindow} />
                    : null
            }

            <div className={`${style.cars} ${scroll_bar}`}>
                {
                    props.cars.map(car => (
                        <CardCar key={car.id} car={car} />
                    ))
                }
            </div>

            <div className={style.added_car}>
                <button onClick={openAddCarWindow}>
                    Добавить транспортное средство
                </button>
            </div>
        </div>
    )
}

export default Garage