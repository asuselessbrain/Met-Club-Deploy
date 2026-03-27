import { useState } from "react";
import { Link } from "react-router";

function CardBlob({ color }: { color: string }) {
    return (
        <div
            className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl"
            aria-hidden="true"
        >
            <div
                className="absolute -top-8 -left-8 w-40 h-40 rounded-full opacity-20 blur-2xl"
                style={{ background: color }}
            />
            <div
                className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-15 blur-2xl"
                style={{ background: color }}
            />
        </div>
    );
}

export default function ZoneCard({
    title,
    titleColor,
    borderColor,
    btnBg,
    btnShadow,
    btnLabel,
    link,
    description,
    blobColor,
    illustration,
}: {
    title: string;
    titleColor: string;
    borderColor: string;
    btnBg: string;
    btnShadow: string;
    btnLabel: string;
    link: string;
    description: React.ReactNode;
    blobColor: string;
    illustration: React.ReactNode;
}) {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className="relative flex flex-col items-center rounded-2xl p-6 bg-white/70 backdrop-blur-sm cursor-pointer select-none transition-all duration-300"
            style={{
                border: `2.5px solid ${borderColor}`,
                boxShadow: hovered
                    ? `0 20px 60px -10px ${borderColor}55, 0 4px 20px rgba(0,0,0,0.08)`
                    : `0 4px 24px rgba(0,0,0,0.07)`,
                transform: hovered ? "translateY(-6px)" : "translateY(0)",
            }}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <CardBlob color={blobColor} />

            {/* Title */}
            <h2
                className="text-2xl font-black tracking-widest uppercase z-10"
                style={{ color: titleColor, fontFamily: "'Fredoka One', cursive", letterSpacing: "0.12em" }}
            >
                {title}
            </h2>

            {/* Illustration area */}
            <div
                className="flex items-center justify-center rounded-full transition-transform duration-500 bg-red-500"
                style={{
                    background: `radial-gradient(circle, ${blobColor}22 0%, transparent 70%)`,
                    transform: hovered ? "scale(1.06)" : "scale(1)",
                }}
            >
                <div
                    className="transition-transform duration-500"
                    style={{
                        transform: hovered ? "scale(1.06)" : "scale(1)",
                        filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.12))",
                    }}
                >
                    {illustration}
                </div>
            </div>

            {/* Description */}
            <p className="text-center text-gray-600 mb-6 z-10 leading-relaxed" style={{ fontSize: "1rem" }}>
                {description}
            </p>

            {/* Button */}
            {
                title === "লার্নিং জোন" && (<Link to={link}>
                    <button
                        className="z-10 px-8 py-3 rounded-full text-white font-bold text-base transition-all duration-200 active:scale-95 cursor-pointer"
                        style={{
                            background: btnBg,
                            boxShadow: hovered ? `0 6px 24px ${btnShadow}` : `0 3px 12px ${btnShadow}`,
                            letterSpacing: "0.02em",
                            transform: hovered ? "scale(1.05)" : "scale(1)",
                        }}
                    >
                        {btnLabel}
                    </button>
                </Link>)
            }

            {
                title === "স্টোরি সিচুয়েশন" && (
                    <a href={link} target="_blank" rel="noopener noreferrer">
                        <button
                            className="z-10 px-8 py-3 rounded-full text-white font-bold text-base transition-all duration-200 active:scale-95 cursor-pointer"
                            style={{
                                background: btnBg,
                                boxShadow: hovered ? `0 6px 24px ${btnShadow}` : `0 3px 12px ${btnShadow}`,
                                letterSpacing: "0.02em",
                                transform: hovered ? "scale(1.05)" : "scale(1)",
                            }}
                        >
                            {btnLabel}
                        </button>
                    </a>
                )
            }

        </div>
    );
}