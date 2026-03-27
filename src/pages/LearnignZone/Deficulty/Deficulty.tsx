import bgImage from "../../../assets/images/chapter-bg.png";
import { Link, useParams } from "react-router";
import { use, useEffect, useState } from "react";
import type { ChapterTopic } from "../Index/Chapter";

const DIFFICULTIES = [
    {
        key: "easy",
        label: "সহজ",
        emoji: "☀️",
        border: "border-green-300",
        bg: "bg-gradient-to-br from-green-100 to-green-200",
        hoverBg: "hover:bg-gradient-to-br hover:from-green-400 hover:to-green-500",
        textColor: "text-green-900",
        hoverText: "hover:text-white",
        shadow: "shadow-[0_8px_32px_rgba(74,222,128,0.35)]",
        glow: "hover:shadow-[0_0_25px_rgba(74,222,128,0.45)]",
    },
    {
        key: "medium",
        label: "মাঝারি",
        emoji: "⛰️",
        border: "border-blue-300",
        bg: "bg-gradient-to-br from-blue-100 to-blue-200",
        hoverBg: "hover:bg-gradient-to-br hover:from-blue-400 hover:to-blue-500",
        textColor: "text-blue-900",
        hoverText: "hover:text-white",
        shadow: "shadow-[0_8px_32px_rgba(96,165,250,0.35)]",
        glow: "hover:shadow-[0_0_25px_rgba(96,165,250,0.45)]",
    },
    {
        key: "hard",
        label: "কঠিন",
        emoji: "🏔️",
        border: "border-red-300",
        bg: "bg-gradient-to-br from-red-100 to-red-200",
        hoverBg: "hover:bg-gradient-to-br hover:from-red-400 hover:to-red-500",
        textColor: "text-red-900",
        hoverText: "hover:text-white",
        shadow: "shadow-[0_8px_32px_rgba(248,113,113,0.35)]",
        glow: "hover:shadow-[0_0_25px_rgba(248,113,113,0.45)]",
    },
];

const fetchChapters = async () => {
    const response = await fetch('/chapter.json');
    return response.json() as Promise<ChapterTopic[]>;
};

const chaptersPromise = fetchChapters();

export default function Deficulty() {

    const { chapterId } = useParams();

    const chapters = use(chaptersPromise);

    const topic = chapters.find((c) => c.id === Number(chapterId));

    const [quizLevel, setQuizLevel] = useState<"easy" | "medium" | "hard" | null>(null);

    useEffect(() => {
        const quizLevel = async () => {
            const res = await fetch("https://meet-club.vercel.app/api/v1/students/quiz-completion", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `${localStorage.getItem("token")}`,
                },
            });
            const resData = await res.json();

            setQuizLevel(resData.data)
        }
        quizLevel();

    }, [])

    const isLocked = (key: string) => {
        if (quizLevel === null) return key === "medium" || key === "hard";
        if (quizLevel === "easy") return key === "hard";
        return false;
    };

    return (
        <>
            <div
                className="relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden"
                style={{
                    backgroundImage: `url(${bgImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center bottom",
                    backgroundRepeat: "no-repeat",
                }}
            >
                {/* Overlay */}
                <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                        background:
                            "linear-gradient(to bottom, rgba(255,255,255,0.52) 0%, rgba(255,255,255,0.18) 55%, rgba(255,255,255,0.04) 100%)",
                    }}
                />

                {/* ── Title ── */}
                <h1
                    className="title-anim relative z-10 text-5xl md:text-6xl text-center mt-10 font-black"
                    style={{
                        color: "#2d6a9f",
                        textShadow: "0 2px 0 rgba(45,106,159,0.12), 0 4px 20px rgba(45,106,159,0.10)",
                        letterSpacing: "0.04em",
                    }}
                >
                    লার্নিং জোন
                </h1>

                {/* ── Subtitle ── */}
                <p
                    className="sub-anim relative z-10 mt-3 text-base md:text-lg font-extrabold tracking-wide text-gray-700 text-center"
                    style={{ letterSpacing: "0.06em" }}
                >
                    কঠিনতার স্তর নির্বাচন করুন:&nbsp;
                    <span style={{ color: "#2d6a9f" }}>{topic?.title}</span>
                </p>

                {/* ── Topic card ── */}
                <div
                    className="topic-anim topic-float relative z-10 mt-10 flex flex-col items-center justify-between rounded-2xl bg-white/85 backdrop-blur-sm p-5"
                    style={{
                        border: "2.5px solid #7dd3fc",
                        width: 210,
                        minHeight: 210,
                        boxShadow: "0 8px 40px rgba(125,211,252,0.30), 0 2px 12px rgba(0,0,0,0.08)",
                        animation: "cardPop 0.65s cubic-bezier(.34,1.56,.64,1) both 0.25s, topicFloat 3.5s ease-in-out infinite 1s",
                    }}
                >
                    <p
                        className="text-center font-bold text-gray-800 text-sm leading-snug mb-3"
                    >
                        {topic?.title}
                    </p>

                    {/* Topic illustration — replace emoji with <img> when you have the asset */}
                    <div
                        className="w-32 h-32 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(125,211,252,0.12)", fontSize: 72 }}
                    >
                        {/* 👇 Swap this with your actual image:*/}
                        <img src={topic?.image} alt={topic?.title} className="w-full h-full object-contain" />
                    </div>
                </div>

                {/* ── Difficulty buttons ── */}
                <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-5 mt-10 pb-14 px-6">
                    {DIFFICULTIES.map((d, idx) => {
                        const locked = isLocked(d.key);

                        const btn = (
                            <div className="relative">
                                <button
                                    disabled={locked}
                                    className={`
                                    flex items-center justify-center gap-3
                                    px-10 py-5
                                    rounded-full
                                    font-black
                                    text-2xl md:text-3xl
                                    tracking-widest
                                    transition-all duration-200
                                    select-none
                                    border
                                    ${locked
                                            ? "cursor-not-allowed border-gray-300 bg-gray-100 text-gray-400 shadow-none opacity-60"
                                            : `cursor-pointer ${d.border} ${d.bg} ${d.hoverBg} ${d.textColor} ${d.hoverText} ${d.shadow} ${d.glow} hover:-translate-y-1.5 hover:scale-[1.06]`
                                        }
                                `}
                                >
                                    {d.label}
                                    <span className="text-[28px] leading-none">{locked ? "🔒" : d.emoji}</span>
                                </button>
                            </div>
                        );

                        return (
                            <div key={d.key} className={`btn-${idx + 1}`}>
                                {locked
                                    ? btn
                                    : <Link to={`/quiz?chapterId=${chapterId}&difficulty=${d.key}`}>{btn}</Link>
                                }
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
