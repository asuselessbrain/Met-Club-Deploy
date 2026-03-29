import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import useAxios from "../../hooks/useAxios";

type LoginFormValues = {
    email: string;
    password: string;
};

export default function Login() {
    const navigate = useNavigate();
    const axios = useAxios();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>();

    const onSubmit = async (data: LoginFormValues) => {
        const res = await axios.post("/auth/login", data);
        if (res.data.success) {
            localStorage.setItem("token", res.data.data);
            toast.success("লগইন সফল! এখন যাত্রা শুরু করুন।");
            navigate("/start-journey");
        } else {
            toast.error(res.data.errorMessage || "লগইন ব্যর্থ হয়েছে।");
        }
    };

    return (
        <div className="relative overflow-hidden w-full max-w-md p-6 sm:p-8 lg:p-4 xl:p-8 bg-[linear-gradient(140deg,rgba(255,255,255,0.52),rgba(255,255,255,0.34))] rounded-3xl shadow-[0_12px_34px_rgba(15,23,42,0.28)] space-y-4 md:space-y-6 mx-auto border border-white/50">
            <div className="pointer-events-none absolute -top-16 -right-12 h-36 w-36 rounded-full bg-red-300/16 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-12 h-36 w-36 rounded-full bg-rose-200/14 blur-3xl" />

            <div className="relative z-10">
                <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-slate-900 md:text-2xl drop-shadow-sm">
                    লগইন করুন
                </h1>

                <form className="space-y-4 md:space-y-6 lg:space-y-2 xl:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-slate-800">
                            আইডি / নাম
                        </label>
                        <input
                            type="text"
                            id="username"
                            placeholder="আপনার আইডি লিখুন"
                            {...register("email", {
                                required: "আইডি / নাম আবশ্যক",
                            })}
                            className={`bg-white/40 border border-slate-300/70 text-slate-900 rounded-xl block w-full p-3 focus:ring-2 focus:ring-red-300 focus:border-red-300 focus:outline-none placeholder:text-slate-500 ${errors.email ? "border-red-500" : "border-slate-300/70"}`}
                        />
                        {errors.email && <p className="mt-1 text-xs text-red-500 font-medium">{errors.email.message}</p>}
                    </div>

                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-slate-800">
                            পাসওয়ার্ড
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="••••••••"
                            {...register("password", {
                                required: "পাসওয়ার্ড আবশ্যক",
                                minLength: {
                                    value: 6,
                                    message: "কমপক্ষে ৬ অক্ষর দিন",
                                },
                            })}
                            className={`bg-white/40 border border-slate-300/70 text-slate-900 rounded-xl block w-full p-3 focus:ring-2 focus:ring-red-300 focus:border-red-300 focus:outline-none placeholder:text-slate-500 ${errors.password ? "border-red-500" : "border-slate-300/70"}`}
                        />
                        {errors.password && <p className="mt-1 text-xs text-red-500 font-medium">{errors.password.message}</p>}
                    </div>

                    <div className="flex items-center justify-end">
                        <p className="text-sm font-semibold text-red-700 hover:text-red-800 hover:underline cursor-pointer">
                            পাসওয়ার্ড ভুলে গেছেন?
                        </p>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-white cursor-pointer bg-red-600 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-red-300 font-semibold rounded-xl text-sm px-5 py-3 text-center disabled:cursor-not-allowed disabled:opacity-60 shadow-[0_4px_12px_0_rgba(0,0,0,0.1)] transition-all duration-200 active:scale-95"
                    >
                        {isSubmitting ? "অপেক্ষা করুন..." : "লগইন"}
                    </button>

                    <p className="text-sm font-normal text-slate-700 text-center mt-6">
                        অ্যাকাউন্ট নেই? <Link to="/registration" className="font-semibold text-red-700 hover:text-red-800 hover:underline">নিবন্ধন করুন</Link>
                    </p>
                </form>
            </div>
        </div>
    )
}
