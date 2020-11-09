import React from 'react'
import Menu from './Menu'

export default class MenuClassContainer extends React.Component {
    componentDidMount() {
        this.props.setUpMenuByPath(this.props.location.pathname)
    }

    render() {
        return <Menu {...this.props}/>
    }
}