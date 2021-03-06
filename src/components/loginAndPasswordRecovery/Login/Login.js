import React, { useState } from 'react'
import style from '../Login.module.css'
import image from '../../../public/Group.svg'
import { Link } from 'react-router-dom'
import { path } from '../../../path'
import svgHiddenPassword from '../../../assets/images/visibility_off_24px_outlined.svg'
import svgVisiblePassword from '../../../assets/images/visible_password.svg'
import { connect } from 'react-redux'
import { actionCreatorToggleError, thunkCreatorSendLoginAndPassword } from "../../../bll/reducers/reducerLogin"
import { selector } from '../../../bll/selector'

const Login = (props) => {
    const [password, setPassword] = useState("")

    const hadlerPasswordInput = (e) => {
        if (props.isError) {
            props.disableError()
        }

        setPassword(e.target.value);
    }

    const [login, setLogin] = useState("")

    const hadlerLoginInput = (e) => {
        if (props.isError) {
            props.disableError()
        }

        setLogin(e.target.value);
    }

    const [isRememberMe, setRememberMe] = useState(false)

    const handlerRememberMe = (e) => {
        setRememberMe(e.target.checked)
    }

    const handlerSubmit = () => {
        props.sendLoginAndPassword(login, password)
    }

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

            {
                props.isError
                    ? <div className={style.error_message}>
                        <p>{props.errorMessage}</p>
                    </div>
                    : null
            }

            <div className={style.wrap_inputs}>
                <input
                    onChange={hadlerLoginInput}
                    className={`${style.my_text_input} ${style.input_login} ${props.isError ? style.error_field : ""}`}
                    type="text"
                    placeholder="Логин"
                    value={login}
                />

                <div className={style.wrap_password}>
                    <input
                        onChange={hadlerPasswordInput}
                        className={`${style.my_text_input} ${style.input_password} ${props.isError ? style.error_field : ""}`}
                        type={
                            isVisiblePassword
                                ? "text"
                                : "password"
                        }
                        placeholder="Пароль"
                        value={password}
                    />
                    <img
                        onMouseDown={showPassword}
                        onMouseUp={hidePassword}
                        onMouseLeave={hidePassword}
                        onDrag={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                        src={isVisiblePassword
                            ? svgVisiblePassword
                            : svgHiddenPassword}
                        className={style.visiability_password}
                    />
                </div>
            </div>

            <label className={style.checkbox_remember_me}>
                <input type="checkbox" onChange={handlerRememberMe} checked={isRememberMe} />
                Запомнить меня
            </label>

            <button className={style.my_button} onClick={handlerSubmit}>Вход</button>

            <Link to={{ pathname: path.PASSWORD_RECOVERY }}>
                Забыли пароль?
            </Link>
        </div>
    </div>
}


const mapStateToProps = (state) => ({
    isError: selector.login.isError(state),
    errorMessage: selector.login.getErrorMessage(state)
})

const mapDispatchToProps = (dispatch) => ({
    sendLoginAndPassword(login, password) {
        dispatch(thunkCreatorSendLoginAndPassword(login, password))
    },

    disableError() {
        dispatch(actionCreatorToggleError(false))
    }
})


export default connect(mapStateToProps, mapDispatchToProps)(Login)