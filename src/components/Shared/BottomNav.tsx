interface BottomNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  answered?: boolean;
  variant?: "section" | "quiz";
  isPending?: boolean;
}

export default function BottomNav({
  current,
  total,
  onPrev,
  onNext,
  answered = true,     // section mode default: always enabled
  variant = "section",
  isPending = false,
}: BottomNavProps) {

  const isLast = current === total - 1;

  /* ── Label sets per variant ───────────────────────────────── */
  const labels = {
    section: {
      prevShort: "← পূর্ববর্তী",
      prevFull:  "← পূর্ববর্তী",
      nextShort: isLast ? "শেষ করো ✓" : "পরবর্তী →",
      nextFull:  isLast ? "শেষ করো ✓" : "পরবর্তী →",
    },
    quiz: {
      prevShort: "←",
      prevFull:  "← আগের প্রশ্ন",
      nextShort: isLast ? "শেষ ✓"    : "পরের →",
      nextFull:  isLast ? "শেষ করো ✓" : "পরের প্রশ্ন →",
    },
  }[variant];

  /* ── Button styles ────────────────────────────────────────── */
  const prevStyle: React.CSSProperties = {
    background: current === 0
      ? "rgba(209,250,229,0.5)"
      : "linear-gradient(135deg,#d1fae5,#a7f3d0)",
    border:    "2.5px solid #6ee7b7",
    color:     "#065f46",
    boxShadow: current > 0 ? "0 4px 16px rgba(110,231,183,0.30)" : "none",
  };

  const nextStyle: React.CSSProperties = {
    background: answered
      ? "linear-gradient(135deg,#0ea5e9,#0284c7)"
      : "linear-gradient(135deg,#e0f2fe,#bae6fd)",
    border:    "2.5px solid #38bdf8",
    color:     answered ? "#fff" : "#7dd3fc",
    boxShadow: answered ? "0 4px 16px rgba(14,165,233,0.35)" : "none",
  };

  /* ── Shared button classes ────────────────────────────────── */
  const btnBase =
    "flex items-center justify-center gap-1.5 shrink-0 whitespace-nowrap rounded-full font-bold " +
    "px-3 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm tracking-wide sm:tracking-widest " +
    "transition-all hover:scale-105 active:scale-95 " +
    "disabled:opacity-35 disabled:cursor-not-allowed";

  return (
    <div
      className="flex items-center justify-between gap-2 px-3 sm:px-6 py-3 sm:py-4 relative z-20"
      style={{
        background:    "rgba(255,255,255,0.50)",
        backdropFilter:"blur(10px)",
        borderTop:     "1.5px solid rgba(200,230,255,0.6)",
      }}
    >
      {/* ── Previous ── */}
      <button
        onClick={onPrev}
        disabled={current === 0}
        className={btnBase}
        style={prevStyle}
      >
        <span className="sm:hidden">{labels.prevShort}</span>
        <span className="hidden sm:inline">{labels.prevFull}</span>
      </button>

      {/* ── Progress dots + counter ── */}
      <div className="flex flex-col items-center gap-1 shrink min-w-0">
        <span className="text-xs font-semibold text-gray-500 whitespace-nowrap">
          {current + 1} / {total}
        </span>
        {/* overflow-x-auto so dots never break layout on small screens */}
        <div className="flex gap-1 sm:gap-1.5 overflow-x-auto max-w-25 sm:max-w-none pb-0.5">
          {Array.from({ length: total }).map((_, i) => (
            <div
              key={i}
              className="rounded-full shrink-0 transition-all duration-300"
              style={{
                width:  i === current ? 16 : 6,
                height: 6,
                background:
                  i < current  ? "#34d399"
                  : i === current ? "#3b82f6"
                  : "#bfdbfe",
              }}
            />
          ))}
        </div>
      </div>

      {/* ── Next ── */}
      <button
        onClick={onNext}
        disabled={!answered || isPending}
        className={btnBase}
        style={nextStyle}
      >
        {isPending ? (
          /* Spinner shown only in section variant during API call */
          <>
            <span className="h-4 w-4 rounded-full border-2 border-white border-t-transparent animate-spin" />
            <span className="hidden sm:inline">লোড হচ্ছে...</span>
          </>
        ) : (
          <>
            <span className="sm:hidden">{labels.nextShort}</span>
            <span className="hidden sm:inline">{labels.nextFull}</span>
          </>
        )}
      </button>
    </div>
  );
}