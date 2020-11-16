const { default: apiLogin } = require("../../api/apiLogin")

const initialState = {
    isError: false,
    errorMessage: "логин/пароль неверен",
    isAuthorized: false
}

const TOGGLE_IS_AUTHORIZED = "TOGGLE_IS_AUTHORIZED"
const TOGGLE_ERROR = "TOGGLE_ERROR"

const reducerLogin = (state=initialState, action) => {
    switch (action.type) {
        case TOGGLE_ERROR:
            return {
                ...state,
                isError: action.isError
            }

        case TOGGLE_IS_AUTHORIZED:
            return {
                ...state,
                isAuthorized: action.isAuthorized
            }

        default:
            return state
    }
}

export default reducerLogin

const actionCreatorToggleIsAuthorized = (isAuthorized) => ({ type: TOGGLE_IS_AUTHORIZED, isAuthorized })

export const actionCreatorToggleError = (isError) => ({ type: TOGGLE_ERROR, isError })

export const thunkCreatorSendLoginAndPassword = (login, password) => async (dispatch) => {
    if (login === "login" && password === "password") {
        dispatch(actionCreatorToggleIsAuthorized(true))
    } else {
        dispatch(actionCreatorToggleError(true))
    }

    // const res = await apiLogin.sendLoginAndPassword(login, password)

    // console.log(res)
}