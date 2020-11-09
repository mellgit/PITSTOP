import React from "react"
import Clients from "./Clients"

class ClientClass extends React.Component {
    componentDidMount() {
        this.props.setUpHorizontalMenu(this.props.location.pathname)
    }

    render() {
        return <Clients {...this.props} />
    }
}

export default ClientClass