import React from 'react'
import AddCarWindow from './AddCarWindow/AddCarWindow'
import style from './Garage.module.css'

const Garage = (props) => {
    const openAddCarWindow = () => props.toggleAddCarWindow(true)
    const closeAddCarWindow = () => props.toggleAddCarWindow(false)

    return (
        <div className={style.garage}>
            {
                props.isOpenAddCarWindow
                    ?<AddCarWindow closeAddCarWindow={closeAddCarWindow}/>
                    :null
            }

            <button 
                onClick={openAddCarWindow} 
                className={style.added_car}
            >Добавить транспортное средство</button>
        </div>
    )
}

export default Garage