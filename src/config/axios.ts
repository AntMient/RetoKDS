import axios from "axios";
import CONSTANTS from "./constants";

const { DEFAULT_REQUEST_TIMEOUT, BASE_URL } = CONSTANTS.AXIOS;

const axiosParams = {
    timeout: DEFAULT_REQUEST_TIMEOUT,
    baseURL: BASE_URL,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
};

const axiosDefault = axios.create({
    ...axiosParams,
});

export default axiosDefault;