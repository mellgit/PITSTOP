import React from "react";
import { Route } from "react-router-dom";
import img from "../../assets/images/2019-09-17_17-11-17.png";
import Clients from "./mainComponents/Clients/ClientsContainer";

const Main = (props) => {
    return (
        <main className={props.className}>
            <Route path="/clients" render={() => <Clients/>}/>
        </main>
    )
}

export default Main;