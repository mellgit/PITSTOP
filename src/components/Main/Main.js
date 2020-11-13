import React from "react";
import { Route } from "react-router-dom";
import { path } from "../../path";
import Profile from "./mainComponents/Profile/ProfileContainer";

const Main = (props) => {
    return (
        <main className={props.className}>
            <Route path={path.PROFILE} render={() => <Profile/>}/>
        </main>
    )
}

export default Main;