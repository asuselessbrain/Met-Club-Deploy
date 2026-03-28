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
            className="w-full flex items-center justify-between px-4 sm:px-6 py-3 relative z-20"
            style={{
                background: "rgba(255,245,243,0.78)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                borderBottom: "1.5px solid rgba(239,68,68,0.22)",
                boxShadow: "0 2px 24px rgba(185,28,28,0.10)",
            }}
        >
            <Link to="/">
                <div className="flex items-center gap-2 group select-none" style={{ textDecoration: "none" }}>
                    <span
                        className="flex items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
                        style={{
                            width: 38,
                            height: 38,
                            background: "linear-gradient(135deg, #ef4444 0%, #fb7185 100%)",
                            boxShadow: "0 2px 10px rgba(220,38,38,0.28)",
                        }}
                    >
                        <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" className="w-5 h-5">
                            <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
                            <polyline points="9 21 9 12 15 12 15 21" />
                        </svg>
                    </span>

                    <span
                        className="font-black text-lg tracking-tight hidden sm:block"
                        style={{
                            color: "#b91c1c",
                            fontFamily: "'Noto Serif Bengali', serif",
                            letterSpacing: "-0.5px",
                        }}
                    >
                        মেট ক্লাব
                    </span>
                </div>
            </Link>

            <span
                className="absolute left-1/2 -translate-x-1/2 max-w-[46vw] sm:max-w-[55vw] truncate text-sm sm:text-base text-center font-semibold tracking-wide"
                style={{ color: "#991b1b", fontFamily: "'Hind Siliguri',sans-serif" }}
            >
                {title}
            </span>

            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setDropdownOpen((prev) => !prev)}
                    className="flex items-center gap-2 rounded-2xl px-3 py-1.5 transition-all duration-200 select-none"
                    style={{
                        background: dropdownOpen ? "rgba(239,68,68,0.12)" : "rgba(255,255,255,0.52)",
                        border: "1.5px solid rgba(239,68,68,0.35)",
                        boxShadow: dropdownOpen ? "0 0 0 2.5px rgba(239,68,68,0.22)" : "none",
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
                    <span className="font-semibold hidden sm:block" style={{ color: "#b91c1c", fontSize: "0.9rem" }}>
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
                        className="absolute right-0 mt-3 rounded-2xl overflow-hidden"
                        style={{
                            width: 240,
                            background: "rgba(255,251,250,0.97)",
                            boxShadow: "0 8px 40px rgba(185,28,28,0.13), 0 1.5px 6px rgba(0,0,0,0.07)",
                            border: "1.5px solid rgba(239,68,68,0.22)",
                            backdropFilter: "blur(16px)",
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
                                <div style={{ color: "#991b1b", fontWeight: 700, fontSize: "0.92rem" }}>{user.name}</div>
                                <div style={{ color: "#ef4444", fontSize: "0.76rem" }}>{user.role}</div>
                            </div>
                        </div>

                        <button
                            onClick={() => {
                                setDropdownOpen(false);
                                navigate("/learning-zone");
                            }}
                            className="w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors duration-150"
                            style={{
                                color: "#991b1b",
                                fontSize: "0.88rem",
                                fontWeight: 600,
                                background: "transparent",
                                border: "none",
                                cursor: "pointer",
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
                                        color: "#991b1b",
                                        textDecoration: "none",
                                        fontSize: "0.88rem",
                                        fontWeight: 500,
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
