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
  const isSectionTone = true;

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
      ? "rgba(254,226,226,0.7)"
      : "linear-gradient(135deg,#fee2e2,#fecaca)",
    border:    "2.5px solid #fca5a5",
    color:     "#991b1b",
    boxShadow: current > 0 ? "0 4px 16px rgba(239,68,68,0.23)" : "none",
  };

  const nextStyle: React.CSSProperties = {
    background: answered
      ? "linear-gradient(135deg,#ef4444,#dc2626)"
      : "linear-gradient(135deg,#fee2e2,#fecaca)",
    border:    "2.5px solid #f87171",
    color:     answered ? "#fff" : "#fca5a5",
    boxShadow: answered ? "0 4px 16px rgba(239,68,68,0.33)" : "none",
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
        background:    "rgba(255,245,243,0.62)",
        backdropFilter:"blur(10px)",
        borderTop:     "1.5px solid rgba(252,165,165,0.62)",
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
        <span className="text-xs font-semibold whitespace-nowrap text-red-700">
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
                  i < current
                    ? "#ef4444"
                    : i === current
                      ? "#b91c1c"
                      : "#fecaca",
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