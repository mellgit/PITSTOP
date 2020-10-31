import React from 'react';
import "./App.css";
import Head from './Head';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Path } from './path';
import Login from './components/Login/Login';

const App = (props) => {
    if (props.location.pathname === Path.LOGIN) {
        return <Login/>
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