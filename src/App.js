import React from 'react';
import "./App.css";
import Head from './Head';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Path } from './path';
import Login from './components/loginAndPasswordRecovery/Login/Login';
import PasswordRecovery from './components/loginAndPasswordRecovery/PasswordRecovery/PasswordRecovery';

const App = (props) => {
    if (props.location.pathname === Path.LOGIN) {
        return <Login/>
    }

    if (props.location.pathname === Path.PASSWORD_RECOVERY) {
        return <PasswordRecovery/>
    }

    return (
        <>
            <Head/>
            <Header/>
            <Main/>
        </>
    );
}

export default App;