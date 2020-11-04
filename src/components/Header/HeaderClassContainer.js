import React from 'react'
import Header from './Header'

export default class HeaderClassContainer extends React.Component {
    render() {
        return <Header {...this.props}/>
    }
}