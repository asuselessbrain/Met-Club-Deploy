import axios from "axios";

const instance = axios.create({
    baseURL: "http://meteorologyclub.com/api/api/v1",
    withCredentials: true,
});

const axiosPublic = () => {
    return instance
}

export default axiosPublic;