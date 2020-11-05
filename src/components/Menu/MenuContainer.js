import { connect } from "react-redux";
import MenuClassContainer from "./MenuClassContainer";
import { selector } from "../../bll/selector"
import { actionCreatorToggleActiveSubElement, actionCreatorToggleOpen } from "../../bll/reducers/reducerMenu";

const mapStateToProps = (state) => ({
    menu: selector.getMenu(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleOpen(id) {
        dispatch(actionCreatorToggleOpen(id))
    },

    toggleActiveSubElement(parentId) {
        return (id) => {
            dispatch(actionCreatorToggleActiveSubElement(id, parentId))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuClassContainer)