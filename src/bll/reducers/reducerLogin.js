const { default: apiLogin } = require("../../api/apiLogin")

const store = {
    isError: false,
    errorMessage: ""
}

export const thunkCreatorSendLoginAndPassword = (login, password) => async (dipatch) => {
    const res = await apiLogin.sendLoginAndPassword(login, password)

    console.log(res)
}