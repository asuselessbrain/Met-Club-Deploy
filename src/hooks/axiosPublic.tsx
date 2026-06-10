import axios from "axios";

const instance = axios.create({
    baseURL: "http://119.15.153.74/api/v1",
    withCredentials: true,
});

const axiosPublic = () => {
    return instance
}

export default axiosPublic;