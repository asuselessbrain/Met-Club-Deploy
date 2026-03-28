import { useState, useRef, useEffect } from "react";
import ZoneCard from "../components/StartJourney/ZoneCard";
import storyImg from "../assets/images/learning-zone.png";
import simulationImg from "../assets/images/practice-zone.png";
import { useNavigate } from "react-router";

const watercolorBg = `
  radial-gradient(ellipse at 10% 20%, rgba(173, 216, 230, 0.45) 0%, transparent 50%),
  radial-gradient(ellipse at 85% 10%, rgba(255, 253, 180, 0.5) 0%, transparent 45%),
  radial-gradient(ellipse at 90% 85%, rgba(200, 230, 201, 0.4) 0%, transparent 50%),
  radial-gradient(ellipse at 5% 90%, rgba(179, 229, 252, 0.5) 0%, transparent 45%),
  radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.6) 0%, transparent 70%),
  linear-gradient(135deg, #e8f4fd 0%, #fffde7 35%, #e8f5e9 65%, #e1f5fe 100%)
`;

const user = {
  name: "রাহেলা বেগম",
  role: "শিক্ষার্থী",
  avatar: "রা",
  avatarBg: "linear-gradient(135deg, #4caf50, #2d6a9f)",
  email: "rahela@example.com",
};

const menuItems = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
    label: "প্রোফাইল দেখুন",
    href: "/profile",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    label: "সেটিংস",
    href: "/settings",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    label: "আমার অগ্রগতি",
    href: "/progress",
  },
];

export default function StartJourney() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate()

  const handleLogout = () => {
  localStorage.removeItem("token");
  navigate("/");
}

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen flex flex-col" style={{ background: watercolorBg }}>

      {/* ── Navbar ── */}
      <nav
        className="w-full flex items-center justify-between px-6 py-3 sticky top-0 z-50"
        style={{
          background: "rgba(255,255,255,0.72)",
          backdropFilter: "blur(18px)",
          WebkitBackdropFilter: "blur(18px)",
          borderBottom: "1.5px solid rgba(126,200,227,0.22)",
          boxShadow: "0 2px 24px rgba(45,106,159,0.07)",
        }}
      >
        {/* Logo + Home */}
        <a
          href="/"
          className="flex items-center gap-2 group select-none"
          style={{ textDecoration: "none" }}
        >
          {/* Animated home icon */}
          <span
            className="flex items-center justify-center rounded-xl transition-transform duration-200 group-hover:scale-110"
            style={{
              width: 38,
              height: 38,
              background: "linear-gradient(135deg, #2d6a9f 0%, #7ec8e3 100%)",
              boxShadow: "0 2px 10px rgba(45,106,159,0.22)",
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
              color: "#2d6a9f",
              fontFamily: "'Noto Serif Bengali', serif",
              letterSpacing: "-0.5px",
            }}
          >
            মেট ক্লাব
          </span>
        </a>


        {/* Right: user profile */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setDropdownOpen((p) => !p)}
            className="flex items-center gap-2 rounded-2xl px-3 py-1.5 transition-all duration-200 select-none"
            style={{
              background: dropdownOpen
                ? "rgba(45,106,159,0.10)"
                : "rgba(255,255,255,0.55)",
              border: "1.5px solid rgba(126,200,227,0.35)",
              boxShadow: dropdownOpen ? "0 0 0 2.5px rgba(126,200,227,0.38)" : "none",
              cursor: "pointer",
            }}
          >
            {/* Avatar circle */}
            <span
              className="flex items-center justify-center rounded-full text-white font-bold text-sm"
              style={{
                width: 32,
                height: 32,
                background: user.avatarBg,
                boxShadow: "0 2px 8px rgba(76,175,80,0.28)",
                flexShrink: 0,
              }}
            >
              {user.avatar}
            </span>
            <span
              className="font-semibold hidden sm:block"
              style={{ color: "#2d6a9f", fontSize: "0.9rem" }}
            >
              {user.name}
            </span>
            {/* Chevron */}
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="#7ec8e3"
              strokeWidth="2.5"
              className="w-4 h-4 transition-transform duration-200"
              style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)" }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>

          {/* Dropdown panel */}
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-3 rounded-2xl overflow-hidden"
              style={{
                width: 230,
                background: "rgba(255,255,255,0.96)",
                boxShadow: "0 8px 40px rgba(45,106,159,0.16), 0 1.5px 6px rgba(0,0,0,0.07)",
                border: "1.5px solid rgba(126,200,227,0.28)",
                backdropFilter: "blur(16px)",
                animation: "dropIn 0.18s cubic-bezier(.34,1.56,.64,1) both",
              }}
            >
              {/* User info header */}
              <div
                className="flex items-center gap-3 px-4 py-3"
                style={{
                  borderBottom: "1.5px solid rgba(126,200,227,0.18)",
                  background: "linear-gradient(120deg, rgba(232,244,253,0.8), rgba(232,245,233,0.6))",
                }}
              >
                <span
                  className="flex items-center justify-center rounded-full text-white font-bold"
                  style={{
                    width: 40,
                    height: 40,
                    background: user.avatarBg,
                    fontSize: "1.05rem",
                    flexShrink: 0,
                  }}
                >
                  {user.avatar}
                </span>
                <div>
                  <div style={{ color: "#2d6a9f", fontWeight: 700, fontSize: "0.92rem" }}>
                    {user.name}
                  </div>
                  <div style={{ color: "#7ec8e3", fontSize: "0.76rem" }}>{user.role}</div>
                </div>
              </div>

              {/* Menu items */}
              <div className="py-1.5">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2.5 transition-colors duration-150"
                    style={{
                      color: "#2d6a9f",
                      textDecoration: "none",
                      fontSize: "0.88rem",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(126,200,227,0.13)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ color: "#7ec8e3" }}>{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Logout */}
              <div style={{ borderTop: "1.5px solid rgba(126,200,227,0.18)" }}>
                <button
                onClick={handleLogout}
                  className="w-full flex items-center gap-3 px-4 py-2.5 transition-colors duration-150"
                  style={{
                    color: "#e07b1a",
                    fontSize: "0.88rem",
                    fontWeight: 600,
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                    textAlign: "left",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(244,185,66,0.10)")
                  }
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
      </nav>

      {/* ── Main Content ── */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        {/* Header */}
        <div className="header-anim text-center mb-10">
          <h1
            className="text-5xl md:text-6xl font-black mb-2"
            style={{
              color: "#2d6a9f",
              textShadow:
                "0 2px 0 rgba(45,106,159,0.12), 0 4px 16px rgba(45,106,159,0.10)",
            }}
          >
            মেট ক্লাবে স্বাগতম!
          </h1>
          <p
            className="text-gray-500 text-lg md:text-xl"
            style={{ fontSize: "1.3rem" }}
          >
            প্রস্তুতির জন্য আপনার পথ নির্বাচন করুন
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="card1">
            <ZoneCard
              title="লার্নিং জোন"
              titleColor="#2d6a9f"
              borderColor="#7ec8e3"
              btnBg="linear-gradient(135deg, #4caf50, #388e3c)"
              btnShadow="rgba(76,175,80,0.45)"
              btnLabel="পড়া শুরু করুন"
              link="/learning-zone"
              description={
                <>
                  <strong>আপনার জ্ঞান বৃদ্ধি করুন!</strong>
                  <br />
                  আবহাওয়া, জলবায়ু এবং দুর্যোগ সম্পর্কে জানুন।
                </>
              }
              blobColor="#7ec8e3"
              illustration={
                <img
                  src={storyImg}
                  alt="Story Zone"
                  className="w-40 h-40 object-contain"
                />
              }
            />
          </div>

          <div className="card2">
          <ZoneCard
            title="স্টোরি সিচুয়েশন"
            titleColor="#e07b1a"
            borderColor="#f4b942"
            btnBg="linear-gradient(135deg, #f4a826, #d4721a)"
            btnShadow="rgba(244,169,38,0.45)"
            btnLabel="সিমুলেশনে প্রবেশ করুন"
            link="https://play.unity.com/en/games/3a2b8c05-a5e6-4a0e-98d5-e5f0e34ace11/disaster-management"
            description={
              <>
                <strong>আপনার দক্ষতা পরীক্ষা করুন!</strong>
                <br />
                বাস্তব জীবনের সিমুলেশনে সিদ্ধান্ত নিন।
              </>
            }
            blobColor="#f4b942"
            illustration={
              <img
                src={simulationImg}
                alt="Simulation Zone"
                className="w-40 h-40 object-contain"
              />
            }
          />
        </div>
        </div>
      </div>

      {/* Dropdown animation keyframe */}
      <style>{`
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-10px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0)   scale(1);    }
        }
      `}</style>
    </div>
  );
}