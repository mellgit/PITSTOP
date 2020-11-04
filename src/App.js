import React from 'react';
import "./App.css";
import Head from './Head';
import Main from './components/Main/Main';
import { path } from './path';
import Login from './components/loginAndPasswordRecovery/Login/Login';
import PasswordRecovery from './components/loginAndPasswordRecovery/PasswordRecovery/PasswordRecovery';
import HeaderContainer from './components/Header/HeaderContainer';

const App = (props) => {
    if (props.location.pathname === path.LOGIN) {
        return <Login/>
    }

    if (props.location.pathname === path.PASSWORD_RECOVERY) {
        return <PasswordRecovery/>
    }

    return (
        <>
            <Head/>
            <HeaderContainer/>
            <Main/>
        </>
    );
}

export default App;