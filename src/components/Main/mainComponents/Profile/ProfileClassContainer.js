import React from "react"
import { Redirect } from "react-router-dom"
import { path } from "../../../../path"
import Clients from "./Profile"

class ProfileClassContainer extends React.Component {
    // constructor(props) {
    //     super(props)

    //     props.setUpHorizontalMenu(this.props.location.pathname === path.PROFILE 
    //         ?path.PROFILE_PERSONAL_DATA 
    //         :this.props.location.pathname
    //     )
    // }

    componentDidMount() {
        this.props.setUpHorizontalMenu(this.props.location.pathname === path.PROFILE 
            ?path.PROFILE_PERSONAL_DATA 
            :this.props.location.pathname
        )
    }

    render() {
        if (this.props.location.pathname === path.PROFILE) {
            return <Redirect to={path.PROFILE_PERSONAL_DATA}/>
        }

        return <Clients {...this.props} />
    }
}

export default ProfileClassContainer