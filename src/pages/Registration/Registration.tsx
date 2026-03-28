import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";

type RegistrationFormValues = {
    fullName: string;
    studentId: string;
    institution: string;
    className: string;
    guardianPhone: string;
    district: string;
    password: string;
    confirmPassword: string;
    consent: boolean;
};

export default function Registration() {
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors, isSubmitting },
    } = useForm<RegistrationFormValues>();
    const onSubmit = async (data: RegistrationFormValues) => {
        const payload = {
            fullName: data.fullName,
            studentId: data.studentId,
            institution: data.institution,
            className: parseInt(data.className, 10) || data.className,
            guardianPhone: data.guardianPhone,
            district: data.district,
            password: data.password,
        };

        const res = await fetch("https://meet-club.vercel.app/api/v1/students", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(payload),
        });

        const resData = await res.json();
        if (resData.success) {
            navigate("/start-journey");
            toast.success("নিবন্ধন সফল! এখন যাত্রা শুরু করুন।");
            localStorage.setItem("token", resData.data.token)
        } else {
            toast.error(resData.message || "নিবন্ধন ব্যর্থ হয়েছে।");
        }
    };

    return (
        <div className="relative overflow-hidden min-h-screen bg-linear-to-br from-red-500 via-rose-500 to-orange-500 text-white">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-24 -left-16 h-72 w-72 rounded-full bg-white/18 blur-3xl" />
                <div className="absolute top-1/3 right-0 h-80 w-80 rounded-full bg-rose-200/25 blur-3xl" />
                <div className="absolute bottom-0 left-1/3 h-64 w-64 rounded-full bg-orange-100/20 blur-3xl" />
            </div>

            <div className="relative z-10 flex min-h-screen items-center justify-center px-4 py-8 sm:px-8 md:px-12">
                <div className="w-full max-w-3xl rounded-4xl border border-white/35 bg-white/82 p-6 text-gray-900 shadow-[0_20px_70px_rgba(185,28,28,0.24)] backdrop-blur-xl sm:p-8 md:p-10">
                    <div className="mb-8 flex flex-col gap-3">
                        <div className="inline-flex w-fit rounded-full bg-red-100 px-4 py-1 text-xs font-bold tracking-[0.18em] text-red-700">
                            নতুন সদস্য নিবন্ধন
                        </div>
                        <h1 className="text-3xl font-black leading-tight text-slate-900 sm:text-4xl">
                            মেট ক্লাবে আপনার প্রোফাইল তৈরি করুন
                        </h1>
                        <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
                            কয়েকটি তথ্য দিন, তারপর শেখা ও খেলার যাত্রা শুরু করুন।
                        </p>
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="grid gap-5 sm:grid-cols-2">
                            <div>
                                <label htmlFor="fullName" className="mb-2 block text-sm font-semibold text-slate-800">
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
                                <label htmlFor="studentId" className="mb-2 block text-sm font-semibold text-slate-800">
                                    আইডি / ইউজারনেম
                                </label>
                                <input
                                    type="text"
                                    id="studentId"
                                    placeholder="একটি আইডি নির্বাচন করুন"
                                    {...register("studentId", {
                                        required: "আইডি আবশ্যক",
                                        minLength: { value: 3, message: "কমপক্ষে ৩ অক্ষর" },
                                        pattern: { value: /^[a-zA-Z0-9_]+$/, message: "শুধু অক্ষর, সংখ্যা ও _ ব্যবহার করুন" },
                                    })}
                                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-red-100 ${errors.studentId ? "border-red-400 focus:border-red-400" : "border-red-100 focus:border-red-400"}`}
                                />
                                {errors.studentId && <p className="mt-1 text-xs text-red-500">{errors.studentId.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="institution" className="mb-2 block text-sm font-semibold text-slate-800">
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
                                <label htmlFor="className" className="mb-2 block text-sm font-semibold text-slate-800">
                                    শ্রেণি / গ্রুপ
                                </label>
                                <select
                                    id="className"
                                    {...register("className", { required: "শ্রেণি নির্বাচন করুন" })}
                                    defaultValue=""
                                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition focus:ring-4 focus:ring-red-100 ${errors.className ? "border-red-400 focus:border-red-400" : "border-red-100 focus:border-red-400"}`}
                                >
                                    <option value="" disabled>
                                        শ্রেণি নির্বাচন করুন
                                    </option>
                                    <option value="3">তৃতীয় শ্রেণি</option>
                                    <option value="4">চতুর্থ শ্রেণি</option>
                                    <option value="5">পঞ্চম শ্রেণি</option>
                                    <option value="club">মেট ক্লাব গ্রুপ</option>
                                </select>
                                {errors.className && <p className="mt-1 text-xs text-red-500">{errors.className.message}</p>}
                            </div>

                            <div>
                                <label htmlFor="guardianPhone" className="mb-2 block text-sm font-semibold text-slate-800">
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
                                <label htmlFor="district" className="mb-2 block text-sm font-semibold text-slate-800">
                                    জেলা
                                </label>
                                <input
                                    type="text"
                                    id="district"
                                    placeholder="আপনার জেলা লিখুন"
                                    {...register("district")}
                                    className="w-full rounded-2xl border border-red-100 bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-400 focus:ring-4 focus:ring-red-100"
                                />
                            </div>

                            <div>
                                <label htmlFor="password" className="mb-2 block text-sm font-semibold text-slate-800">
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

                            <div>
                                <label htmlFor="confirmPassword" className="mb-2 block text-sm font-semibold text-slate-800">
                                    পাসওয়ার্ড নিশ্চিত করুন
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    placeholder="আবার লিখুন"
                                    {...register("confirmPassword", {
                                        required: "পাসওয়ার্ড নিশ্চিত করুন",
                                        validate: (val: string) => val === getValues("password") || "পাসওয়ার্ড মিলছে না",
                                    })}
                                    className={`w-full rounded-2xl border bg-white px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:ring-4 focus:ring-red-100 ${errors.confirmPassword ? "border-red-400 focus:border-red-400" : "border-red-100 focus:border-red-400"}`}
                                />
                                {errors.confirmPassword && <p className="mt-1 text-xs text-red-500">{errors.confirmPassword.message}</p>}
                            </div>
                        </div>

                        <div className="rounded-2xl border border-red-100 bg-red-50 px-4 py-3 text-sm leading-6 text-red-800">
                            আবহাওয়া, জলবায়ু ও দুর্যোগ বিষয়ে শেখার জন্য এই প্রোফাইল ব্যবহার হবে। তথ্য সংরক্ষণের আগে অভিভাবকের অনুমতি নিয়ে নিন।
                        </div>

                        <label className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
                            <input
                                type="checkbox"
                                {...register("consent", { required: "সম্মতি দেওয়া আবশ্যক" })}
                                className="mt-1 h-4 w-4 rounded border-slate-300 text-red-600 focus:ring-red-500"
                            />
                            <span>আমি প্রদত্ত তথ্য সঠিক এবং শেখার কার্যক্রমের জন্য এটি ব্যবহারে সম্মত।</span>
                        </label>
                        {errors.consent && <p className="-mt-3 text-xs text-red-500">{errors.consent.message}</p>}

                        <div className="flex flex-col gap-3 pt-2 sm:flex-row">
                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="flex-1 rounded-2xl bg-linear-to-r from-red-600 to-rose-700 px-6 py-3.5 text-base font-bold text-white shadow-[0_10px_24px_rgba(185,28,28,0.32)] transition hover:scale-[1.01] hover:from-red-700 hover:to-rose-800 active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                            >
                                {isSubmitting ? "অনুগ্রহ করে অপেক্ষা করুন..." : "নিবন্ধন সম্পন্ন করুন"}
                            </button>
                            <Link
                                to="/"
                                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-red-200 bg-red-50 px-6 py-3.5 text-base font-bold text-red-700 transition hover:bg-red-100"
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
