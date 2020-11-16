import React from 'react';
import "./App.css";
import style from "./App.module.css"
import Head from './Head';
import Main from './components/Main/Main';
import { path } from './path';
import Login from './components/loginAndPasswordRecovery/Login/Login';
import PasswordRecovery from './components/loginAndPasswordRecovery/PasswordRecovery/PasswordRecovery';
import HeaderContainer from './components/Header/HeaderContainer';
import MenuContainer from './components/Menu/MenuContainer';
import { Redirect, Router } from 'react-router-dom';

const App = (props) => {
    if (!props.isAuthorized && props.location.pathname === path.LOGIN) {
        return <Login />
    }

    if (!props.isAuthorized) {
        return <Redirect to={path.LOGIN} />
    } else if (props.location.pathname === path.LOGIN) {
        return <Redirect to={path.PROFILE_PERSONAL_DATA} />
    }

    if (props.location.pathname === path.PASSWORD_RECOVERY) {
        return <PasswordRecovery />
    }

    return (
        <div className={style.app}>
            <Head />
            <HeaderContainer className={style.header} />
            <MenuContainer className={style.menu} />
            <Main className={style.main} />
        </div>
    );
}

export default App;