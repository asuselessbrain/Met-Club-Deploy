import { useNavigate } from "react-router";
import axiosPublic from "./axiosPublic";
import toast from "react-hot-toast";

export default function useLogout() {
    const axios = axiosPublic();
    const navigate = useNavigate();

    const logout = async () => {
        try {
            const res = await axios("/auth/logout");
            if (res.data.success) {
                toast.success("সফলভাবে লগআউট হয়েছে!", { id: "logout" });
                localStorage.removeItem("token");
                navigate("/");
            } else {
                toast.error("লগআউট করতে সমস্যা হয়েছে, আবার চেষ্টা করুন!", { id: "logout" });
            }
        } catch (error) {
            toast.error("লগআউট করতে সমস্যা হয়েছে!", { id: "logout" });
            console.error("Logout error:", error);
        }
    };

    return logout
}
