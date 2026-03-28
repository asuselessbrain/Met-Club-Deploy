import axios from "axios";

const instance = axios.create({
    baseURL: "http://119.15.153.74/api/api/v1"
})

const useAxios = () => {
    return instance
};

export default useAxios;