import { Link } from "react-router";

interface TopNavProps {
    title?: string;
}

export default function TopNav({ title }: TopNavProps) {
    return (
        <div className="flex items-center justify-between px-6 py-3 relative z-20"
            style={{
                background: "rgba(255,255,255,0.55)", backdropFilter: "blur(10px)",
                borderBottom: "1.5px solid rgba(200,230,255,0.6)"
            }}>
            <Link to="/">
                <button
                    className="w-11 h-11 flex items-center justify-center rounded-2xl text-xl transition-all hover:scale-110 active:scale-95"
                    style={{ background: "rgba(255,255,255,0.8)", border: "2px solid #bfdbfe", boxShadow: "0 2px 8px rgba(96,165,250,0.18)" }}>
                    🏠
                </button>
            </Link>
            <span className="text-base text-center font-semibold text-gray-600 tracking-wide" style={{ fontFamily: "'Hind Siliguri',sans-serif" }}>
                {title}
            </span>
            <Link to="/learning-zone">
                <button
                    className="w-11 h-11 flex items-center justify-center rounded-2xl text-lg font-bold text-gray-500 transition-all hover:bg-red-50 hover:text-red-500 hover:scale-110 active:scale-95"
                    style={{ background: "rgba(255,255,255,0.8)", border: "2px solid #fecaca", boxShadow: "0 2px 8px rgba(248,113,113,0.18)" }}>
                    ✕
                </button>
            </Link>
        </div>
    );
}
