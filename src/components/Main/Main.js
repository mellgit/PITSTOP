import React from "react";
import img from "../../assets/images/2019-09-17_17-11-17.png";

const Main = (props) => {
    return (
        <main className={props.className}>
            <img src={img} width="200" height="200"></img>
        </main>
    )
}

export default Main;