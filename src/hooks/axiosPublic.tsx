import axios from "axios";

const instance = axios.create({
<<<<<<< HEAD
    baseURL: "http://119.15.153.74/api/v1",
=======
    baseURL: "http://119.15.153.74/api/api/v1",
>>>>>>> 3723ddb14f3751ad8a76c2ae126e5dc27b18a8c9
    withCredentials: true,
});

const axiosPublic = () => {
    return instance
}

export default axiosPublic;