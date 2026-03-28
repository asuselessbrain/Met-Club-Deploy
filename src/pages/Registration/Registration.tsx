import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import bgImage from "../../assets/images/bg.png";
import useAxios from "../../hooks/useAxios";

export interface IUser {
    fullName: string;
    email: string;
    institution: string;
    class: number;
    guardianPhone: string;
    password: string;
    district?: string;
    profileImg?: string;
}

type RegistrationFormValues = IUser & {
    password: string;
};

export default function Registration() {
    const navigate = useNavigate();
    const axios = useAxios()

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<RegistrationFormValues>();

    const onSubmit = async (data: RegistrationFormValues) => {
        const payload: IUser = {
            fullName: data.fullName,
            email: data.email,
            institution: data.institution,
            class: Number(data.class),
            guardianPhone: data.guardianPhone,
            password: data.password,
            district: data.district?.trim() || undefined,
            profileImg: data.profileImg?.trim() || undefined,
        };
        const res = await axios.post("/user", payload)
        if (res.data.success) {
            navigate("/start-journey");
            toast.success("নিবন্ধন সফল! এখন যাত্রা শুরু করুন।");
            localStorage.setItem("token", res.data.data.accessToken)
        } else {
            toast.error(res.data.errorMessage || "নিবন্ধন ব্যর্থ হয়েছে।");
        }
    };

    return (
        <div
            className="relative overflow-hidden min-h-screen text-white"
            style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background: "linear-gradient(140deg, rgba(127,29,29,0.38) 0%, rgba(185,28,28,0.26) 45%, rgba(249,115,22,0.22) 100%)",
                }}
            />

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/18 blur-3xl" />
                <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-rose-200/25 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange-100/20 blur-3xl" />
            </div>

            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-8 md:px-12">
                <div
                    className="relative w-full max-w-3xl rounded-4xl p-6 sm:p-8 md:p-10 text-white backdrop-blur-2xl overflow-hidden"
                    style={{
                        background: "rgba(255,255,255,0.18)",
                        backdropFilter: "blur(28px) saturate(180%)",
                        WebkitBackdropFilter: "blur(28px) saturate(180%)",
                        border: "1px solid rgba(255,255,255,0.35)",
                        boxShadow:
                            "0 24px 80px rgba(127,29,29,0.34), inset 0 1px 0 rgba(255,255,255,0.6)",
                    }}
                >
                    <div className="mb-8 flex flex-col gap-3">
                        <div className="inline-flex w-fit rounded-full bg-white/20 px-4 py-1 text-xs font-bold tracking-[0.18em] text-white border border-white/30">
                            নতুন সদস্য নিবন্ধন
                        </div>
                        <h1 className="text-3xl font-black leading-tight text-white sm:text-4xl">
                            মেট ক্লাবে আপনার প্রোফাইল তৈরি করুন
                        </h1>
                        <p className="max-w-2xl text-sm leading-6 text-white/90 sm:text-base">
                            আপনার তথ্য দিন, তারপর শেখা ও খেলার যাত্রা শুরু করুন।
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="fullName" className="mb-2 block text-sm font-normal text-white">
                                    শিক্ষার্থীর নাম
                                </label>
                                <input
                                    type="text"
                                    id="fullName"
                                    placeholder="পূর্ণ নাম লিখুন"
                                    {...register("fullName", { required: "নাম আবশ্যক" })}
                                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-red-100 ${errors.fullName ? "border-red-400 focus:border-red-400" : "border-red-100 focus:border-red-400"}`}
                                />
                                {errors.fullName && <p className="mt-1 text-xs text-red-500">{errors.fullName.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="email" className="mb-2 block text-sm font-normal text-white">
                                    ইমেইল ঠিকানা
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="example@mail.com"
                                    {...register("email", {
                                        required: "ইমেইল আবশ্যক",
                                        pattern: {
                                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                            message: "সঠিক ইমেইল দিন",
                                        },
                                    })}
                                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-red-100 ${errors.email ? "border-red-400 focus:border-red-400" : "border-red-100 focus:border-red-400"}`}
                                />
                                {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="institution" className="mb-2 block text-sm font-semibold text-white">
                                    স্কুল / প্রতিষ্ঠান
                                </label>
                                <input
                                    type="text"
                                    id="institution"
                                    placeholder="স্কুলের নাম লিখুন"
                                    {...register("institution", { required: "প্রতিষ্ঠানের নাম আবশ্যক" })}
                                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-red-100 ${errors.institution ? "border-red-400 focus:border-red-400" : "border-red-100 focus:border-red-400"}`}
                                />
                                {errors.institution && <p className="mt-1 text-xs text-red-500">{errors.institution.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="class" className="mb-2 block text-sm font-normal text-white">
                                    শ্রেণি
                                </label>
                                <select
                                    id="class"
                                    {...register("class", {
                                        required: "শ্রেণি নির্বাচন করুন",
                                        valueAsNumber: true,
                                    })}
                                    defaultValue=""
                                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-4 focus:ring-red-100 ${errors.class ? "border-red-400 focus:border-red-400" : "border-red-100 focus:border-red-400"}`}
                                >
                                    <option value="" disabled>
                                        শ্রেণি নির্বাচন করুন
                                    </option>
                                    <option value="1">প্রথম শ্রেণি</option>
                                    <option value="2">দ্বিতীয় শ্রেণি</option>
                                    <option value="3">তৃতীয় শ্রেণি</option>
                                    <option value="4">চতুর্থ শ্রেণি</option>
                                    <option value="5">পঞ্চম শ্রেণি</option>
                                    <option value="6">ষষ্ঠ শ্রেণি</option>
                                </select>
                                {errors.class && <p className="mt-1 text-xs text-red-500">{errors.class.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="guardianPhone" className="mb-2 block text-sm font-normal text-white">
                                    মোবাইল নম্বর
                                </label>
                                <input
                                    type="tel"
                                    id="guardianPhone"
                                    placeholder="01XXXXXXXXX"
                                    {...register("guardianPhone", {
                                        required: "মোবাইল নম্বর আবশ্যক",
                                        pattern: { value: /^01[3-9]\d{8}$/, message: "সঠিক বাংলাদেশি নম্বর দিন" },
                                    })}
                                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-red-100 ${errors.guardianPhone ? "border-red-400 focus:border-red-400" : "border-red-100 focus:border-red-400"}`}
                                />
                                {errors.guardianPhone && <p className="mt-1 text-xs text-red-500">{errors.guardianPhone.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="password" className="mb-2 block text-sm font-normal text-white">
                                    পাসওয়ার্ড
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    placeholder="কমপক্ষে ৬ অক্ষর"
                                    {...register("password", {
                                        required: "পাসওয়ার্ড আবশ্যক",
                                        minLength: { value: 6, message: "কমপক্ষে ৬ অক্ষর দিন" },
                                    })}
                                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-red-100 ${errors.password ? "border-red-400 focus:border-red-400" : "border-red-100 focus:border-red-400"}`}
                                />
                                {errors.password && <p className="mt-1 text-xs text-red-500">{errors.password.message}</p>}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-white/35 bg-white/12 px-4 py-3 text-sm leading-6 text-white/95">
                            আবহাওয়া, জলবায়ু ও দুর্যোগ বিষয়ে শেখার জন্য এই প্রোফাইল ব্যবহার হবে। প্রদত্ত তথ্য সঠিকভাবে পূরণ করুন।
                        </div>

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 rounded-2xl bg-linear-to-r from-red-600 to-rose-700 px-6 py-3.5 text-base font-normal text-white shadow-[0_10px_24px_rgba(185,28,28,0.32)] transition hover:scale-[1.01] hover:from-red-700 hover:to-rose-800 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isSubmitting ? "অনুগ্রহ করে অপেক্ষা করুন..." : "নিবন্ধন সম্পন্ন করুন"}
                            </button>
                            <Link
                                to="/"
                                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-white/40 bg-white/20 px-6 py-3.5 text-base font-normal text-black transition hover:bg-white/30"
                            >
                                আমার অ্যাকাউন্ট আছে
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
