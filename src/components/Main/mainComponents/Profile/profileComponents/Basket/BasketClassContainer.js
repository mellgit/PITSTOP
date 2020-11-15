import React from 'react'
import Basket from './Basket'

export default class BasketClassContainer extends React.Component {
    render() {
        return <Basket {...this.props}/>
    }
}