import { FaPause, FaPlay } from "react-icons/fa";
import { useAudio, useAudioSync } from "../../hooks/UseAudio";
import type { QuestionHeaderProps } from "../../types";

export function QuestionHeader({ title, qNum, total, audioUrl }: QuestionHeaderProps) {
    const { toggle, isThisSrcPlaying } = useAudio();
    useAudioSync(audioUrl);
    const isPlaying = !!audioUrl && isThisSrcPlaying(audioUrl);

    const toggleAudio = () => {
        if (audioUrl) {
            toggle(audioUrl);
        }
    };

    return (
        <div
            className="flex items-center justify-between gap-2 px-3 sm:px-6 py-3 sm:py-4"
            style={{ borderBottom: "1px dashed rgba(148,163,184,0.35)" }}
        >
            {/* ── Title — grows, wraps on small screens ── */}
            <h2
                className="font-bold leading-snug flex-1 min-w-0
                   text-sm sm:text-base md:text-lg lg:text-xl
                   line-clamp-2 sm:line-clamp-none"
                style={{ color: "#1e40af", fontFamily: "'Hind Siliguri',sans-serif" }}
            >
                {title}
            </h2>

            {/* ── Right side: audio btn + badge ── */}
            <div className="flex items-center gap-2 sm:gap-4 shrink-0">

                {/* Audio button */}
                {audioUrl && (
                    <button
                        onClick={toggleAudio}
                        className={`flex items-center justify-center
                        w-9 h-9 sm:w-11 sm:h-11
                        rounded-full transition-all duration-300
                        border-2 shrink-0
                        ${isPlaying
                                ? "bg-blue-100 border-blue-500 text-blue-600 animate-pulse scale-105 shadow-md"
                                : "bg-white border-gray-200 text-gray-500 hover:bg-blue-50 hover:text-blue-500 hover:border-blue-300 hover:scale-105 hover:shadow-md active:scale-95"
                            }`}
                        title={isPlaying ? "অডিও থামাও" : "প্রশ্নটি শোনো"}
                    >
                        {isPlaying
                            ? <FaPause className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                            : <FaPlay className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />
                        }
                    </button>
                )}

                {/* Question badge */}
                <span
                    className="font-bold rounded-full border border-blue-200 shrink-0
                     text-xs sm:text-sm
                     px-2.5 py-1 sm:px-4 sm:py-2"
                    style={{
                        background: "#dbeafe", color: "#1d4ed8",
                        fontFamily: "'Hind Siliguri',sans-serif"
                    }}
                >
                    {/* xs: "৩/১০", sm+: "প্রশ্ন ৩ / ১০" */}
                    <span className="sm:hidden">{qNum}/{total}</span>
                    <span className="hidden sm:inline">প্রশ্ন {qNum} / {total}</span>
                </span>
            </div>
        </div>
    );
}