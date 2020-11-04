import React from 'react'
import Header from './Header'

export default class HeaderClassContainer extends React.Component {
    render(props) {
        return <Header {...props}/>
    }
}