import React from 'react'
import MenuItem from './MenuItem/MenuItem'
import style from "./Menu.module.css"

const Menu = (props) => {
    return (
        <div className={`${style.wrap} ${props.className}`}>
            <div className={style.menu}>
                {
                    props.menu.map(item => <MenuItem
                        {...item}
                        key={item.id}
                        toggleOpen={() => { props.toggleOpen(item.id) }}
                        toggleActiveSubElement={props.toggleActiveSubElement(item.id)}
                    />
                    )
                }
            </div>
        </div>
    )
}

export default Menu