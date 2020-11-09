import React from 'react'
import HorizontalMenu from '../../../../assets/components/HorizontalMenu/HorizontalMenu'
import style from "./Clients.module.css"

const Clients = (props) => {
    return (
        <div className={style.clients}>
            <HorizontalMenu 
                data={props.menu} 
                setUpHorizontalMenu={props.setUpHorizontalMenu}
            />
        </div>
    )
}

export default Clients