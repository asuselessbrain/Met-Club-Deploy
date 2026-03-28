import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router";

interface TopNavProps {
    title?: string;
    tone?: "default" | "red";
}

const user = {
    name: "রাহেলা বেগম",
    role: "শিক্ষার্থী",
    avatar: "রা",
};

const menuItems = [
    {
        label: "প্রোফাইল দেখুন",
        href: "/profile",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
            </svg>
        ),
    },
    {
        label: "সেটিংস",
        href: "/settings",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
            </svg>
        ),
    },
    {
        label: "আমার অগ্রগতি",
        href: "/progress",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                <polyline points="9 11 12 14 22 4" />
                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
        ),
    },
];

export default function TopNav({ title, tone = "default" }: TopNavProps) {
    void tone;
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    };

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
                setDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div
            className="w-full flex items-center justify-between px-6 py-3 relative z-20"
            style={{
                background: "rgba(255,255,255,0.12)",
                backdropFilter: "blur(28px) saturate(180%)",
                WebkitBackdropFilter: "blur(28px) saturate(180%)",

                borderBottom: "1px solid rgba(255,255,255,0.25)",

                boxShadow:
                    "0 10px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.35)",

                position: "relative",
                overflow: "visible",
            }}
        >
            {/* 🌟 Glass highlight layer (Apple shine) */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(120deg, rgba(255,255,255,0.35), rgba(255,255,255,0.05), rgba(255,255,255,0))",
                    pointerEvents: "none",
                }}
            />

            {/* optional subtle noise */}
            <div
                style={{
                    position: "absolute",
                    inset: 0,
                    backgroundImage:
                        "url('https://www.transparenttextures.com/patterns/noise.png')",
                    opacity: 0.04,
                    pointerEvents: "none",
                    mixBlendMode: "overlay",
                }}
            />

            {/* LEFT LOGO */}
            <Link to="/" className="relative z-10">
                <div className="flex items-center gap-2 group">
                    <span
                        className="rounded-xl transition-transform duration-200 group-hover:scale-110"
                        style={{
                            width: 38,
                            height: 38,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",

                            background: "rgba(239,68,68,0.9)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 8px 20px rgba(239,68,68,0.25)",
                        }}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#fff"
                            strokeWidth="2.2"
                            className="w-5 h-5"
                        >
                            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                            <polyline points="9 21 9 12 15 12 15 21" />
                        </svg>
                    </span>

                    <span
                        className="hidden sm:block font-black text-lg"
                        style={{
                            color: "rgba(127,29,29,0.9)",
                            letterSpacing: "-0.5px",
                            textShadow:
                                "-0.6px -0.6px 0 rgba(255,255,255,0.95), 0.6px -0.6px 0 rgba(255,255,255,0.95), -0.6px 0.6px 0 rgba(255,255,255,0.95), 0.6px 0.6px 0 rgba(255,255,255,0.95), 0 2px 8px rgba(127,29,29,0.18)",
                        }}
                    >
                        মেট ক্লাব
                    </span>
                </div>
            </Link>

            {/* TITLE */}
            <span
                className="absolute left-1/2 -translate-x-1/2 text-[12px] sm:text-sm md:text-base lg:text-lg font-semibold truncate max-w-[44vw] sm:max-w-[50vw] md:max-w-[56vw]"
                style={{
                    color: "rgba(127,29,29,0.85)",
                    textShadow:
                        "-0.6px -0.6px 0 rgba(255,255,255,0.95), 0.6px -0.6px 0 rgba(255,255,255,0.95), -0.6px 0.6px 0 rgba(255,255,255,0.95), 0.6px 0.6px 0 rgba(255,255,255,0.95), 0 2px 8px rgba(127,29,29,0.18)",
                }}
            >
                {title}
            </span>

            {/* RIGHT USER */}
            <div className="relative z-30" ref={dropdownRef}>
                <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-2 rounded-2xl px-3 py-1.5 transition-all duration-200 select-none"
                    style={{
                        background: dropdownOpen ? "rgba(255,255,255,0.42)" : "rgba(255,255,255,0.30)",
                        border: "1.5px solid rgba(255,255,255,0.45)",
                        boxShadow: dropdownOpen
                            ? "0 0 0 2.5px rgba(239,68,68,0.18), 0 8px 22px rgba(185,28,28,0.18)"
                            : "0 4px 14px rgba(185,28,28,0.12)",
                        backdropFilter: "blur(14px)",
                        WebkitBackdropFilter: "blur(14px)",
                        cursor: "pointer",
                    }}
                >
                    <span
                        className="flex items-center justify-center rounded-full text-white font-bold text-sm"
                        style={{
                            width: 32,
                            height: 32,
                            background: "linear-gradient(135deg, #ef4444, #f97316)",
                            boxShadow: "0 2px 8px rgba(220,38,38,0.28)",
                            flexShrink: 0,
                        }}
                    >
                        {user.avatar}
                    </span>
                    <span
                        className="font-semibold hidden sm:block"
                        style={{ color: "#7f1d1d", fontSize: "0.9rem", textShadow: "0 1px 4px rgba(255,255,255,0.28)" }}
                    >
                        {user.name}
                    </span>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#ef4444"
                        strokeWidth="2.5"
                        className="w-4 h-4 transition-transform duration-200"
                        style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                        <polyline points="6 9 12 15 18 9" />
                    </svg>
                </button>

                {dropdownOpen && (
                    <div
                        className="absolute right-0 mt-3 rounded-2xl overflow-hidden z-50"
                        style={{
                            width: 230,
                            background: "linear-gradient(120deg, rgba(255,237,234,0.88), rgba(255,223,215,0.78))",
                            boxShadow: "0 12px 42px rgba(185,28,28,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                            border: "1.5px solid rgba(255,255,255,0.44)",
                            backdropFilter: "blur(20px) saturate(140%)",
                            WebkitBackdropFilter: "blur(20px) saturate(140%)",
                            animation: "dropIn 0.18s cubic-bezier(.34,1.56,.64,1) both",
                        }}
                    >
                        <div
                            className="flex items-center gap-3 px-4 py-3"
                            style={{
                                borderBottom: "1.5px solid rgba(239,68,68,0.15)",
                                background: "linear-gradient(120deg, rgba(255,237,234,0.88), rgba(255,223,215,0.78))",
                            }}
                        >
                            <span
                                className="flex items-center justify-center rounded-full text-white font-bold"
                                style={{
                                    width: 40,
                                    height: 40,
                                    background: "linear-gradient(135deg, #ef4444, #f97316)",
                                    fontSize: "1.05rem",
                                    flexShrink: 0,
                                }}
                            >
                                {user.avatar}
                            </span>
                            <div>
                                <div style={{ color: "#7f1d1d", fontWeight: 700, fontSize: "0.92rem", textShadow: "0 1px 3px rgba(255,255,255,0.25)" }}>
                                    {user.name}
                                </div>
                                <div style={{ color: "#b91c1c", fontSize: "0.78rem", fontWeight: 600 }}>{user.role}</div>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setDropdownOpen(false);
                                navigate("/learning-zone");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150"
                            style={{
                                color: "#7f1d1d",
                                fontSize: "0.9rem",
                                fontWeight: 600,
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
                                textShadow: "0 1px 3px rgba(255,255,255,0.2)",
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.10)")}
                            onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                        >
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                <path d="M15 18l-6-6 6-6" />
                                <path d="M9 12h11" />
                            </svg>
                            চ্যাপ্টার তালিকায় ফিরে যান
                        </button>

                        <div className="py-1.5">
                            {menuItems.map((item) => (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    className="flex items-center gap-3 px-4 py-2.5 transition-colors duration-150"
                                    style={{
                                        color: "#7f1d1d",
                                        textDecoration: "none",
                                        fontSize: "0.9rem",
                                        fontWeight: 600,
                                        textShadow: "0 1px 3px rgba(255,255,255,0.2)",
                                    }}
                                    onClick={() => setDropdownOpen(false)}
                                    onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(239,68,68,0.10)")}
                                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                                >
                                    <span style={{ color: "#ef4444" }}>{item.icon}</span>
                                    {item.label}
                                </a>
                            ))}
                        </div>

                        <div style={{ borderTop: "1.5px solid rgba(239,68,68,0.15)" }}>
                            <button
                                onClick={() => {
                                    setDropdownOpen(false);
                                    handleLogout();
                                }}
                                className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-150"
                                style={{
                                    color: "#b45309",
                                    fontSize: "0.88rem",
                                    fontWeight: 600,
                                    background: "transparent",
                                    border: "none",
                                    cursor: "pointer",
                                    textAlign: "left",
                                }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(245,158,11,0.12)")}
                                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                            >
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                                    <polyline points="16 17 21 12 16 7" />
                                    <line x1="21" y1="12" x2="9" y2="12" />
                                </svg>
                                লগআউট
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
