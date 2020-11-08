const { default: instance } = require("./instance")

const apiLogin = {
    async sendLoginAndPassword(login, password) {
        return await instance.post("/home/", {login, password});
    }
}

export default apiLogin