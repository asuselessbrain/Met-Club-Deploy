import axios from "axios";

const instance = axios.create({
    baseURL: "http://119.15.153.74/api/api/v1",
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
        console.log(token)

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        config.headers["Content-Type"] = "application/json";

        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            console.log("Unauthorized! লগইন করতে হবে");
        }

        return Promise.reject(error);
    }
);

const useAxios = () => {
    return instance;
};

export default useAxios;