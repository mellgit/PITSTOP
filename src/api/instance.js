import Axios from "axios";

const instance = Axios.create({
    baseUrl: ""
});

export default instance;