import React from 'react'
import Menu from './Menu'

export default class MenuClassContainer extends React.Component {
    render() {
        return <Menu {...this.props}/>
    }
}