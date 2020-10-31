import React from 'react';
import "./App.css";
import Head from './Head';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

const App = () => {
    return (
        <>
            <Head/>
            <Header/>
            <Main/>
        </>
    );
}

export default App;