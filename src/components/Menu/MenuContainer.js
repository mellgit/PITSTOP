import { connect } from "react-redux";
import MenuClassContainer from "./MenuClassContainer";
import { selector } from "../../bll/selector"
import { actionCreatorToggleActiveSubElement, actionCreatorToggleOpen } from "../../bll/reducers/reducerMenu";

const mapStateToProps = (state) => ({
    menu: selector.getMenu(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleOpen(name) {
        dispatch(actionCreatorToggleOpen(name))
    },

    toggleActiveSubElement(parentName) {
        return (name) => {
            dispatch(actionCreatorToggleActiveSubElement(name, parentName))
        }
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuClassContainer)