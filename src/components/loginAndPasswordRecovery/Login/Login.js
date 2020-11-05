import React, { useState } from 'react'
import style from '../Login.module.css'
import image from '../../../public/Group.svg'
import { Link } from 'react-router-dom'
import { path } from '../../../path'
import svgHiddenPassword from '../../../assets/images/visibility_off_24px_outlined.svg'
import svgVisiblePassword from '../../../assets/images/visible_password.svg'

const Login = () => {
    const [isVisiblePassword, setPasswordVisibility] = useState(false)

    const hidePassword = () => setPasswordVisibility(false)

    const showPassword = () => setPasswordVisibility(true)

    return <div className={style.wrap}>
        <div className={style.content}>
            <div className={style.title}>
                <img src={image} />
                <p className={style.title}>
                    Доброго времени суток
                </p>
            </div>

            <div className={style.wrap_inputs}>
                <input className={`${style.my_text_input} ${style.input_login} hide`} type="text" placeholder="Логин" />
                <div className={style.wrap_password}>
                    <input 
                        className={`${style.my_text_input} ${style.input_password}`} 
                        type={
                            isVisiblePassword
                            ?"text"
                            :"password"
                        }
                        placeholder="Пароль"
                    />
                    <img 
                        onMouseDown={showPassword}
                        onMouseUp={hidePassword}
                        onMouseLeave={hidePassword}
                        onDrag={(e)=>e.preventDefault()}
                        onDragStart={(e)=>e.preventDefault()}
                        src={isVisiblePassword 
                            ?svgVisiblePassword
                            :svgHiddenPassword} 
                        className={style.visiability_password} 
                    />
                </div>
            </div>

            <label className={style.checkbox_remember_me}>
                <input type="checkbox" />
                Запомнить меня
            </label>

            <button className={style.my_button}>Вход</button>

            <Link to={{ pathname: path.PASSWORD_RECOVERY }}>
                Забыли пароль?
            </Link>
        </div>
    </div>
}

export default Login