import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

type LoginFormValues = {
    studentId: string;
    password: string;
};

export default function Login() {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<LoginFormValues>();

    const onSubmit = async(data: LoginFormValues) => {
        console.log(data)
       const res = await fetch("https://meet-club.vercel.app/api/v1/auth", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });

        const resData = await res.json();
        if (resData.success) {
            localStorage.setItem("token", resData.data.token);
            toast.success("লগইন সফল! এখন যাত্রা শুরু করুন।");
            navigate("/start-journey");
        } else {
            toast.error(resData.message || "লগইন ব্যর্থ হয়েছে।");
        }
    };

    return (
        <div className="w-full max-w-md p-6 sm:p-8 lg:p-4 xl:p-8 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg space-y-4 md:space-y-6 mx-auto">
            <h1 className="text-xl font-bold leading-tight text-center tracking-tight text-gray-900 md:text-2xl">
                লগইন করুন
            </h1>

            <form className="space-y-4 md:space-y-6 lg:space-y-2 xl:space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                        আইডি / নাম
                    </label>
                    <input
                        type="text"
                        id="username"
                        placeholder="আপনার আইডি লিখুন"
                        {...register("studentId", {
                            required: "আইডি / নাম আবশ্যক",
                        })}
                        className={`bg-white/90 border text-gray-900 rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${errors.studentId ? "border-red-400" : "border-gray-300"}`}
                    />
                    {errors.studentId && <p className="mt-1 text-xs text-red-500">{errors.studentId.message}</p>}
                </div>

                <div>
                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
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
                        className={`bg-white/90 border text-gray-900 rounded-lg block w-full p-2.5 focus:ring-blue-500 focus:border-blue-500 ${errors.password ? "border-red-400" : "border-gray-300"}`}
                    />
                    {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                </div>

                <div className="flex items-center justify-end">
                    <p className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
                        পাসওয়ার্ড ভুলে গেছেন?
                    </p>
                </div>

                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full text-white cursor-pointer bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center disabled:cursor-not-allowed disabled:opacity-60"
                >
                    {isSubmitting ? "অপেক্ষা করুন..." : "লগইন"}
                </button>

                <p className="text-sm font-light text-gray-600 text-center mt-6">
                    অ্যাকাউন্ট নেই? <Link to="/registration" className="font-medium text-blue-600 hover:underline">নিবন্ধন করুন</Link>
                </p>
            </form>
        </div>
    )
}
