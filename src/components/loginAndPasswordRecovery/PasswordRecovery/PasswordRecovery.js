import React from 'react'
import style from '../Login.module.css'
import image from '../../../public/Group.svg'
import imageArrow from '../../../assets/images/arrow_back_24px.svg'

const PasswordRecovery = () => {
    return (
        <div className={style.wrap}>
            <div className={style.content}>
                <img src={imageArrow} className={style.arrow}/>

                <div className={style.title}>
                    <img src={image} />
                    <p className={style.title}>
                        Восстановить пароль
                    </p>
                </div>

                <div className={style.wrap_inputs}>
                    <input className={style.my_text_input} type="email" placeholder="ваш email" />
                </div>

                <button className={style.my_button}>Восстановить</button>
            </div>
        </div>
    )
}

export default PasswordRecovery