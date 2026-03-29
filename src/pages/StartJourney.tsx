import { useState, useRef, useEffect } from "react";
import ZoneCard from "../components/StartJourney/ZoneCard";
import storyImg from "../assets/images/learning-zone.png";
import simulationImg from "../assets/images/practice-zone.png";
import { useNavigate } from "react-router";
import bgImage from "../assets/images/start-journey-page-bg.jpeg";
import useAxios from "../hooks/useAxios";


const user = {
  name: "রাহেলা বেগম",
  role: "শিক্ষার্থী",
  avatar: "রা",
  avatarBg: "linear-gradient(135deg, #ef4444, #f97316)",
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

  const axios = useAxios();

  const [isChapterOneCompleted, setIsChapterOneCompleted] = useState(false);

  useEffect(() => {
    const checkChapterOneCompletion = async () => {
      const res = await axios.get("/user/chapter-one-completion-status");
      setIsChapterOneCompleted(res.data.data);
    }
    checkChapterOneCompletion();
  }, [axios]);

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
    <div className="relative min-h-screen flex flex-col overflow-x-hidden" style={{
      backgroundImage: `url(${bgImage})`,
      backgroundSize: "cover",
      backgroundPosition: "center"
    }}>

      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          background: "linear-gradient(180deg, rgba(20,6,6,0.22) 0%, rgba(20,6,6,0.14) 55%, rgba(20,6,6,0.18) 100%)",
        }}
      />

      {/* ── Navbar ── */}
      <nav
        className="fixed top-0 left-0 right-0 w-full flex items-center justify-between px-6 py-3 z-50"
        style={{
          background: "linear-gradient(120deg, rgba(255,255,255,0.34), rgba(255,237,234,0.20))",
          backdropFilter: "blur(24px) saturate(140%)",
          WebkitBackdropFilter: "blur(24px) saturate(140%)",
          borderBottom: "1.5px solid rgba(255,255,255,0.34)",
          boxShadow: "0 8px 32px rgba(185,28,28,0.16), inset 0 1px 0 rgba(255,255,255,0.42)",
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
              textShadow:
                "-0.6px -0.6px 0 rgba(255,255,255,0.95), 0.6px -0.6px 0 rgba(255,255,255,0.95), -0.6px 0.6px 0 rgba(255,255,255,0.95), 0.6px 0.6px 0 rgba(255,255,255,0.95), 0 2px 8px rgba(127,29,29,0.18)",
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
                ? "rgba(255,255,255,0.42)"
                : "rgba(255,255,255,0.30)",
              border: "1.5px solid rgba(255,255,255,0.45)",
              boxShadow: dropdownOpen
                ? "0 0 0 2.5px rgba(239,68,68,0.18), 0 8px 22px rgba(185,28,28,0.18)"
                : "0 4px 14px rgba(185,28,28,0.12)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
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
              style={{
                color: "#7f1d1d",
                fontSize: "0.9rem",
                textShadow: "0 1px 4px rgba(255,255,255,0.28)",
              }}
            >
              {user.name}
            </span>
            {/* Chevron */}
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

          {/* Dropdown panel */}
          {dropdownOpen && (
            <div
              className="absolute right-0 mt-3 rounded-2xl overflow-hidden"
              style={{
                width: 230,
                background: "linear-gradient(150deg, rgba(255,255,255,0.55), rgba(255,240,236,0.38))",
                boxShadow: "0 12px 42px rgba(185,28,28,0.18), 0 2px 8px rgba(0,0,0,0.08)",
                border: "1.5px solid rgba(255,255,255,0.44)",
                backdropFilter: "blur(20px) saturate(140%)",
                WebkitBackdropFilter: "blur(20px) saturate(140%)",
                animation: "dropIn 0.18s cubic-bezier(.34,1.56,.64,1) both",
              }}
            >
              {/* User info header */}
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
                    background: user.avatarBg,
                    fontSize: "1.05rem",
                    flexShrink: 0,
                  }}
                >
                  {user.avatar}
                </span>
                <div>
                  <div
                    style={{
                      color: "#7f1d1d",
                      fontWeight: 700,
                      fontSize: "0.92rem",
                      textShadow: "0 1px 3px rgba(255,255,255,0.25)",
                    }}
                  >
                    {user.name}
                  </div>
                  <div style={{ color: "#b91c1c", fontSize: "0.78rem", fontWeight: 600 }}>
                    {user.role}
                  </div>
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
                      color: "#7f1d1d",
                      textDecoration: "none",
                      fontSize: "0.9rem",
                      fontWeight: 600,
                      textShadow: "0 1px 3px rgba(255,255,255,0.2)",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.background = "rgba(239,68,68,0.10)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                  >
                    <span style={{ color: "#ef4444" }}>{item.icon}</span>
                    {item.label}
                  </a>
                ))}
              </div>

              {/* Logout */}
              <div style={{ borderTop: "1.5px solid rgba(239,68,68,0.15)" }}>
                <button
                  onClick={handleLogout}
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
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.background = "rgba(245,158,11,0.12)")
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
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-12">
        {/* Header */}
        <div className="header-anim text-center mb-10">
          <h1
            className="text-5xl md:text-6xl font-black mb-2"
            style={{
              color: "#b91c1c",
              textShadow:
                "-1px -1px 0 rgba(255,255,255,0.96), 1px -1px 0 rgba(255,255,255,0.96), -1px 1px 0 rgba(255,255,255,0.96), 1px 1px 0 rgba(255,255,255,0.96), 0 2px 0 rgba(185,28,28,0.20), 0 8px 20px rgba(127,29,29,0.24)",
            }}
          >
            মেট ক্লাবে স্বাগতম!
          </h1>
          <p
            className="text-lg md:text-xl"
            style={{
              fontSize: "1.3rem",
              color: "#1f2937",
              fontWeight: 600,
              textShadow: "0 1px 6px rgba(255,255,255,0.28)",
            }}
          >
            প্রস্তুতির জন্য আপনার পথ নির্বাচন করুন
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <div className="card1">
            <ZoneCard
              title="লার্নিং জোন"
              titleColor="#991b1b"
              borderColor="#f87171"
              btnBg="linear-gradient(135deg, #ef4444, #dc2626)"
              btnShadow="rgba(239,68,68,0.42)"
              btnLabel="পড়া শুরু করুন"
              link="/learning-zone"
              description={
                <>
                  <strong>আপনার জ্ঞান বৃদ্ধি করুন!</strong>
                  <br />
                  আবহাওয়া, জলবায়ু এবং দুর্যোগ সম্পর্কে জানুন।
                </>
              }
              blobColor="#fca5a5"
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
              titleColor="#9a3412"
              borderColor="#fb923c"
              btnBg="linear-gradient(135deg, #fb923c, #f97316)"
              btnShadow="rgba(249,115,22,0.42)"
              btnLabel={isChapterOneCompleted ? "সিমুলেশনে প্রবেশ করুন" : "প্রথম অধ্যায় সম্পন্ন করুন"}
              disabled={!isChapterOneCompleted}
              link="http://119.15.153.74:8080"
              description={
                <>
                  <strong>আপনার দক্ষতা পরীক্ষা করুন!</strong>
                  <br />
                  বাস্তব জীবনের সিমুলেশনে সিদ্ধান্ত নিন।
                </>
              }
              blobColor="#fdba74"
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