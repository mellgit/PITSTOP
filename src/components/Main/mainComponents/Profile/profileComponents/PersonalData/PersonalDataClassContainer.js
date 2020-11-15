import React, { Component } from "react";
import PersonalData from "./PersonalData";


export default class PersonalDataClassContainer extends Component {
    render() {
        return (
            <PersonalData {...this.props}/>
        )
    }
}