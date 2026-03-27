import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import bgImage from "../../../assets/images/chapter-bg.png";
import TopNav from "../../../components/Shared/TopBar";

export default function StartInterface() {
    const [btnHover, setBtnHover] = useState(false);
    const navigate = useNavigate();
    const { chapterId } = useParams();

    const startQuiz = () => {
        navigate(`/select-difficulty/${chapterId}`);
    }
    return (
        <>
            <div
                className="fixed inset-0 z-50 flex flex-col"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                }}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(255,255,255,0.50) 0%, rgba(255,255,255,0.20) 55%, rgba(255,255,255,0.06) 100%)",
                    }}
                />

                {/* ── Top Bar ── */}
                <TopNav />

                <div className="px-4 py-4 flex flex-col items-center justify-start lg:justify-center min-h-[calc(100%-150px)] custom-scrollbar overflow-auto custom-scrollbar">
                    <div className="flex flex-1 items-center justify-center w-full max-w-md sm:max-w-lg py-3 sm:py-5">
                        {/* Card */}
                        <div
                            className="rounded-2xl sm:rounded-3xl overflow-visible pt-12 sm:pt-16 w-full relative z-10 flex flex-col items-center justify-center"
                            style={{
                                background: "linear-gradient(160deg,#e0f0ff 0%,#f0e8ff 50%,#fff0e8 100%)",
                                border: "3px solid rgba(255,255,255,0.9)",
                                boxShadow: "0 20px 60px rgba(100,120,200,0.22), 0 4px 16px rgba(0,0,0,0.10), inset 0 0 0 1px rgba(255,255,255,0.6)",
                            }}
                        >
                            {/* ── Ribbon banner ── */}
                            <div className="banner-pop relative flex items-center justify-center -mt-3 sm:-mt-4 mb-1 px-3 sm:px-4">
                                <div
                                    className="relative px-5 sm:px-8 py-2.5 sm:py-3 rounded-2xl text-center"
                                    style={{
                                        background: "linear-gradient(135deg,#f59e0b 0%,#fbbf24 40%,#f97316 100%)",
                                        boxShadow: "0 6px 0 #b45309, 0 8px 20px rgba(245,158,11,0.40)",
                                        border: "3px solid #fef3c7",
                                    }}
                                >
                                    {/* Ribbon tails */}
                                    <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-0 h-0"
                                        style={{ borderTop: "18px solid transparent", borderBottom: "18px solid transparent", borderRight: "16px solid #d97706" }} />
                                    <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-0 h-0"
                                        style={{ borderTop: "18px solid transparent", borderBottom: "18px solid transparent", borderLeft: "16px solid #d97706" }} />

                                    <h1 className="font-bold text-white leading-tight text-2xl sm:text-[1.9rem]"
                                        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.20)", letterSpacing: "0.02em" }}>
                                        মজার মূল্যায়ন
                                    </h1>
                                </div>
                            </div>

                            {/* ── Body ── */}
                            <div className="body-fade flex flex-col items-center gap-4 sm:gap-5 px-4 sm:px-7 py-4 sm:py-5">

                                {/* Description text */}
                                <p className="text-center text-gray-700 leading-relaxed font-medium text-sm sm:text-[1.05rem]">
                                    এখানে প্রতিটি প্রশ্ন সঠিক উত্তর দেওয়ার জন্য তুমি পাবে
                                    <br />
                                    <span className="font-bold text-gray-800">১০ পয়েন্ট!</span> আর ভুল উত্তর দিলে জিরো পয়েন্ট।
                                </p>

                                {/* Point pills */}
                                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 w-full">
                                    {/* Correct pill */}
                                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm"
                                        style={{ background: "#dcfce7", border: "2px solid #4ade80", color: "#166534" }}>
                                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-green-500 text-white text-xs font-black">✓</span>
                                        <span className="coin-spin">🪙</span>
                                        <span>+10 pts</span>
                                    </div>
                                    {/* Wrong pill */}
                                    <div className="flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-sm"
                                        style={{ background: "#fee2e2", border: "2px solid #f87171", color: "#991b1b" }}>
                                        <span className="w-6 h-6 flex items-center justify-center rounded-full bg-red-500 text-white text-xs font-black">✗</span>
                                        <span>0 pts</span>
                                    </div>
                                </div>

                                {/* Champion text + trophy */}
                                <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                                    <p className="text-center text-gray-700 font-medium leading-relaxed text-sm sm:text-base">
                                        তোমার স্কোর যত বেশি হবে চ্যাম্পিয়ন
                                        <br />হওয়ার সম্ভাবনা তত বেড়ে যাবে।
                                    </p>
                                </div>

                                {/* Let's go text */}
                                <p className="font-bold text-gray-600 text-sm sm:text-base">
                                    দেখা যাক কি হয়!
                                </p>

                                {/* ── Start button ── */}
                                <button
                                    onClick={startQuiz}
                                    onMouseEnter={() => setBtnHover(true)}
                                    onMouseLeave={() => setBtnHover(false)}
                                    className="w-full flex items-center justify-center gap-2 sm:gap-3 py-3 sm:py-4 rounded-2xl font-bold text-white text-base sm:text-xl transition-all duration-200 active:scale-95"
                                    style={{
                                        background: btnHover
                                            ? "linear-gradient(135deg,#16a34a,#15803d)"
                                            : "linear-gradient(135deg,#22c55e,#16a34a)",
                                        boxShadow: btnHover
                                            ? "0 3px 0 #14532d, 0 6px 24px rgba(34,197,94,0.45)"
                                            : "0 5px 0 #14532d, 0 8px 28px rgba(34,197,94,0.35)",
                                        transform: btnHover ? "translateY(2px)" : "translateY(0)",
                                        border: "2px solid rgba(255,255,255,0.30)",
                                        letterSpacing: "0.03em",
                                    }}
                                >
                                    এখনই শুরু করুন
                                    <span className="arrow-pulse font-black text-xl sm:text-2xl">›</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
