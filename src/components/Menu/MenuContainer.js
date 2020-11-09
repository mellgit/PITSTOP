import { connect } from "react-redux";
import MenuClassContainer from "./MenuClassContainer";
import { selector } from "../../bll/selector"
import { actionCreatorChangeIsActiveByPath, actionCreatorToggleActiveSubElement, actionCreatorToggleOpen } from "../../bll/reducers/reducerMenu";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

const mapStateToProps = (state) => ({
    menu: selector.menu.getMenu(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleOpen(id) {
        dispatch(actionCreatorToggleOpen(id))
    },

    toggleActiveSubElement(parentId) {
        return (id) => {
            dispatch(actionCreatorToggleActiveSubElement(id, parentId))
        }
    },
    
    setUpMenuByPath(path) {
        dispatch(actionCreatorChangeIsActiveByPath(path))
    }
})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
) (MenuClassContainer)