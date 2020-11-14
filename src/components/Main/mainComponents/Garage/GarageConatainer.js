import { connect } from "react-redux";
import { actionCreatorToggleAddCarWindow } from "../../../../bll/reducers/reducerGarage";
import { selector } from "../../../../bll/selector";
import Garage from "./Garage";

const mapStateToProps = (state) => ({
    isOpenAddCarWindow: selector.profile.isOpenAddCarWindow(state)
})


const mapDispatchToProps = (dispatch) => ({
    toggleAddCarWindow(isOpen) {
        dispatch(actionCreatorToggleAddCarWindow(isOpen))
    }
})

export default connect(mapStateToProps, mapDispatchToProps) (Garage)