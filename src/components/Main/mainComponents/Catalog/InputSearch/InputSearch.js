import React from 'react'
import style from './InputSearch.module.css'
import loupe from '../../../../../assets/images/loupe.svg'

const InputSearch = (props) => {
    return (
        <div className={style.search}>
            <input 
                type="text" 
                className={style.search_input} 
                placeholder="Введите запрос" 
                onChange={props.onChange} 
                value={props.value} />
            <img src={loupe} className={style.search_loupe} />
        </div>
    )
}

export default InputSearch