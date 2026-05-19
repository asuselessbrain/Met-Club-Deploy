import axios from "axios";
import toast from "react-hot-toast";


const handleLogout = async () => {
    const res = await axios("http://localhost:5000/api/v1/auth/logout", {
        withCredentials: true,
    });
    if (res.data.success) {
        toast.success("সফলভাবে লগআউট হয়েছে!", { id: "error" });
        localStorage.removeItem("token");
        window.location.href = "/";
    }
    else {
        toast.error("লগআউট করতে সমস্যা হয়েছে, আবার চেষ্টা করুন!", { id: "error" });
    }
};

const instance = axios.create({
    baseURL: "http://localhost:5000/api/v1",
    withCredentials: true,
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        const isFormData = typeof FormData !== "undefined" && config.data instanceof FormData;
        if (isFormData) {
            delete config.headers["Content-Type"];
        } else {
            config.headers["Content-Type"] = "application/json"
        }

        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config;


        const isRefreshRequest = originalRequest.url.includes("/auth/refresh-token");

        console.log(error.response?.status);
        if (error.response?.status === 401) {

            if (isRefreshRequest) {
                handleLogout()
                return Promise.reject(error);
            }

            if (!originalRequest._retry) {
                originalRequest._retry = true;

                console.log(originalRequest._retry);


                const response = await instance("/auth/refresh-token")

                if (response.data.success) {
                    localStorage.setItem("token", response.data.data.accessToken);

                    originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`;

                    return instance(originalRequest);
                }
                else {
                    handleLogout();
                    return Promise.reject(error);
                }
            }
        }

        return Promise.reject(error);
    }
);

const axiosProtected = () => {
    return instance;
};

export default axiosProtected;