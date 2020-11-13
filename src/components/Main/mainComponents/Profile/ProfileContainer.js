import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { reducerClientActionCreator } from "../../../../bll/reducers/reducerProfile";
import { selector } from "../../../../bll/selector";
import ClientClass from "./ProfileClassContainer";

const mapStateToProps = (state) => ({
    menu: selector.profile.getMenuData(state)
})

const mapDispatchToProps = (dispatch) => ({
    setUpHorizontalMenu(path) {
        dispatch(reducerClientActionCreator.changeIsActiveByPath(path))
    }
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ClientClass)