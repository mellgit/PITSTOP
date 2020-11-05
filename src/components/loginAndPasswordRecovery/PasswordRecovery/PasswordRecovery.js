import React from 'react'
import style from '../Login.module.css'
import image from '../../../public/Group.svg'
import imageArrow from '../../../assets/images/arrow_back_24px.svg'
import { Link } from 'react-router-dom'
import { path } from '../../../path'
import helpOutline from '../../../assets/images/help_outline_24px.svg'

const PasswordRecovery = () => {
    return (
        <div className={style.wrap}>
            <div className={style.content}>
                <Link to={{ pathname: path.LOGIN }} className={style.arrow}>
                    <img src={imageArrow}/>
                </Link>

                <div className={style.title}>
                    <img src={image} />
                    <p className={style.title}>
                        Восстановить пароль
                    </p>
                </div>

                <div className={style.wrap_inputs}>
                    <div className={style.wrap_my_email_input}>
                        <input className={style.my_text_input} type="email" placeholder="ваш email" />
                        <img src={helpOutline} className={style.help_outline}/>
                        <p className={style.help_message}>Укажите email, для которого вы хотите восстановить пароль для доступа в “Панель управления”. На ваш email придёт ссылка, по которой необходимо будет перейти.</p>
                    </div>
                </div>

                <div className={style.wrap_my_button}>
                    <button className={style.my_button}>Восстановить</button>
                </div>
            </div>
        </div>
    )
}

export default PasswordRecovery