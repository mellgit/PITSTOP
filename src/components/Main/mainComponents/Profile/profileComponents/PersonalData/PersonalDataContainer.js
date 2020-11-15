import { connect } from "react-redux";
import { selector } from "../../../../../../bll/selector";
import PersonalDataClassContainer from "./PersonalDataClassContainer";


const mapStateToProps = (state) => ({
    personalData: selector.profile.getPersonalData(state)
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(PersonalDataClassContainer)