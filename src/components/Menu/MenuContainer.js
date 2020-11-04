import { connect } from "react-redux";
import MenuClassContainer from "./MenuClassContainer";
import { selector } from "../../bll/selector"
import { actionCreatorToggleOpen } from "../../bll/reducers/reducerMenu";

const mapStateToProps = (state) => ({
    menu: selector.getMenu(state)
})

const mapDispatchToProps = (dispatch) => ({
    toggleOpen(name) {
        dispatch(actionCreatorToggleOpen(name))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuClassContainer)