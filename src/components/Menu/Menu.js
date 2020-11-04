import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import style from "./Menu.module.css"

const Menu = (props) => {
    return (
        <div className={`${style.menu} ${props.className}`}>
            {
                props.menu.map(item => <MenuItem 
                        {...item} 
                        key={item.name} 
                        toggleOpen={() => { props.toggleOpen(item.name) }}
                    />
                )
            }
        </div>
    )
}

export default Menu