import React from "react";
import ReactDOM from 'react-dom'
import { Provider } from "react-redux";
import store from "./bll/store";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./AppContainer";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
