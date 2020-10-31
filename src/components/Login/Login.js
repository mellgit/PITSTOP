import React from 'react'
import style from './Login.module.css'
import image from '../../public/Group.svg'

const Login = () => {
    return <div className={style.wrap}>
        <div className={style.content}>
            <div className={style.title}>
                <img src={image} />
                <p className={style.title}>
                    Доброго времени суток
                </p>
            </div>

            <div className={style.wrap_inputs}>
                <input className={`${style.my_text_input} ${style.input_login}`} type="text" placeholder="Логин" />
                <input className={`${style.my_text_input} ${style.input_password}`} type="password" placeholder="Пароль" />
            </div>

            <label className={style.checkbox_remember_me}>
                <input type="checkbox" />
                Запомнить меня
            </label>

            <button className={style.my_button}>Вход</button>

            <a href="/forgot_password">Забыли пароль?</a>
        </div>
    </div>
}

export default Login