import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import App from "./App";
import { selector } from "./bll/selector";

const mapStateToProps = (state) => ({
    isAuthorized: selector.login.isAuthorized(state)
})

const mapDispatchToProps = (dispatch) => ({})

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(App)