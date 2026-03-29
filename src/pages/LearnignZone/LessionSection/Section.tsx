import { useState, useRef, useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import bgImage from "../../../assets/images/start-journey-page-bg.jpeg";
import { useLoaderData, useNavigate, useParams } from "react-router";
import TopNav from "../../../components/Shared/TopBar";
import BottomNav from "../../../components/Shared/BottomNav";
import { useAudio, useAudioSync } from "../../../hooks/UseAudio";
import CompletionModal from "../../../components/Modal/CompletionModal";
import useAxios from "../../../hooks/useAxios";


export default function Section() {
  const [current, setCurrent] = useState(0);
  const [animDir, setAnimDir] = useState<string | null>(null);
  const [animating, setAnimating] = useState(false);
  const [isPending, setIsPending] = useState(false);
  const SECTIONS = useLoaderData();
  const [showModal, setShowModal] = useState(false);
  const axios = useAxios()

  const { chapterId } = useParams();


  useEffect(() => {
    const isChapterFinished = async () => {
      const res = await axios.get(`/user/chapter-completion-status/${chapterId}`);
      if (res.data.data) {
        setShowModal(true);
      }
    }
    isChapterFinished();
  }, [axios, chapterId])

  const TOTAL = SECTIONS.length;

  const section = SECTIONS[current];

  const activeWordRef = useRef<HTMLSpanElement | null>(null);
  const navigateToQuiz = useNavigate()

  const { toggle, isThisSrcPlaying, currentTime } = useAudio();
  useAudioSync(section?.audioSrc);
  const isPlaying = isThisSrcPlaying(section.audioSrc);
  const togglePlay = () => {
    if (section?.audioSrc) {
      toggle(section.audioSrc);
    }
  };


  useEffect(() => {
    if (isPlaying && activeWordRef.current) {
      // শব্দটি ভিউপোর্টের বাইরে গেলে smooth ভাবে স্ক্রল করবে
      activeWordRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center", // হাইলাইট করা শব্দটি কন্টেইনারের মাঝখানে রাখবে
      });
    }
  }, [currentTime, isPlaying]);

  const navigate = (dir: number) => {
    if (animating) return;
    const next = current + dir;
    if (next < 0 || next >= TOTAL) return;
    setAnimDir(dir === 1 ? "left" : "right");
    setAnimating(true);
    setTimeout(() => {
      setCurrent(next);
      setAnimDir(null);
      setAnimating(false);
    }, 280);
  };

  const handleNext = async () => {
    if (isPending) return;

    if (current < TOTAL - 1) {
      navigate(1);
    }
    else {
      setIsPending(true);
      try {
        const res = await axios.patch(`/user/update-chapter-completion/${chapterId}`);

        if (res.data.success) {
          navigateToQuiz(`/start-quiz/${section.chapterId}`);
        }
      } finally {
        setIsPending(false);
      }
    }
  };
  return (
    <>
      <div className="fixed inset-0 z-50 flex flex-col"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover", backgroundPosition: "center bottom",
        }}>
        {/* Overlay */}
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(to bottom,rgba(255,244,242,0.56) 0%,rgba(255,230,226,0.22) 55%,rgba(255,214,210,0.08) 100%)" }} />

        <TopNav title={section.title} tone="red" />

        {/* ── Content Card ── */}
        <div className="px-4 py-4 flex flex-col items-center justify-start lg:justify-center min-h-[calc(100%-150px)] custom-scrollbar overflow-auto custom-scrollbar">
          <div
            className={`relative z-10 w-full max-w-5xl mt-6 lg:max-h-100 rounded-2xl bg-white/82 backdrop-blur-md flex flex-col lg:flex-row items-stretch lg:overflow-hidden ${animating
              ? animDir === "left"
                ? "content-exit-left"
                : "content-exit-right"
              : "content-enter"
              }`}
            style={{
              border: "1px solid #fca5a5",
              boxShadow: "0 8px 48px rgba(239,68,68,0.22), 0 2px 16px rgba(0,0,0,0.08)",
            }}
          >
            {/* ── Illustration (Left Half) ── */}
            {/* এখানে md:w-1/2 ব্যবহার করা হয়েছে যেন বড় স্ক্রিনে অর্ধেক জায়গা নেয় */}
            <div className="w-full lg:w-[50%] relative overflow-hidden bg-red-50/55 shrink-0 rounded-t-2xl lg:rounded-t-none">

              <img
                src={section.image}
                alt="story-illustration"
                className="w-full object-cover hidden lg:block"
                style={{
                  height: "100%",
                  minHeight: "280px",
                  aspectRatio: "16/10",
                }}
              />

              <img
                src={section.image}
                alt="story-illustration"
                className="w-full block lg:hidden"
                style={{
                  aspectRatio: "16/9",
                  objectFit: "contain",
                }}
              />

              {/* ২. বাটনটিতে onClick এবং আইকন কন্ডিশন যোগ করা হয়েছে */}
              <button
                onClick={togglePlay}
                className="absolute bottom-6 right-6 w-14 h-14 bg-white/85 backdrop-blur-md rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.15)] border-2 border-red-100 flex items-center justify-center text-red-500 hover:scale-110 hover:bg-white hover:text-red-600 hover:shadow-[0_6px_20px_rgba(239,68,68,0.3)] transition-all duration-300 z-20 group"
                title={isPlaying ? "Pause Audio" : "Play Audio"}
              >
                <div className={isPlaying ? "" : "ml-1"}>
                  {isPlaying ? (
                    <FaPause className="text-xl sm:text-2xl drop-shadow-sm transition-colors duration-300" />
                  ) : (
                    <FaPlay className="text-xl sm:text-2xl drop-shadow-sm transition-colors duration-300" />
                  )}
                </div>
              </button>
            </div>
            {/* ── Story Text Section (Right Half) ── */}
            {/* এখানেও md:w-1/2 ব্যবহার করা হয়েছে এবং টেক্সটগুলো মাঝ বরাবর রাখার জন্য flex যোগ করা হয়েছে */}
            <div className="w-full lg:w-[50%] p-4 flex flex-col justify-start text-left overflow-y-auto custom-scrollbar">
              {/* চেক করছি text-এর প্রথম আইটেম Array কি না (প্যারাগ্রাফ হাইলাইটের জন্য) */}
              {Array.isArray(section.text[0]) ? (
                <div className="text-sm sm:text-base md:text-lg">
                  {section.text.map((paragraph: string | Array<{ word: string; start: number; end: number }>, pIndex: number) => {
                    const timedParagraph = paragraph as Array<{ word: string; start: number; end: number }>;
                    return (
                      <p key={pIndex} className="mb-3 text-xl" style={{ lineHeight: "1.3", letterSpacing: "0.03em" }}>
                        {timedParagraph.map((item, wIndex: number) => {
                          const isHighlighted =
                            currentTime >= item.start && currentTime <= item.end;
                          return (
                            <span
                              key={wIndex}
                              ref={isHighlighted ? activeWordRef : null}
                              className={`inline-block transition-all duration-150 px-0.5 ${isHighlighted
                                ? "bg-yellow-300 text-black scale-105"
                                : "bg-transparent text-slate-700"
                                }`}
                            >
                              {item.word}{" "}
                            </span>
                          );
                        })}
                      </p>
                    );
                  })}
                </div>
              ) : (
                // সাধারণ টেক্সটের জন্য (Section 2, 3...)
                <div className="text-xl text-slate-700">
                  {section.text.map((paragraph: string, index: number) => (
                    <p key={index} className="mb-2">
                      {String(paragraph)}
                    </p>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* ── Bottom Navigation ── */}
        <BottomNav
          current={current}
          total={TOTAL}
          onPrev={() => navigate(-1)}
          onNext={handleNext}
          variant="section"
          isPending={isPending}
        />

        {showModal && (
          <CompletionModal chapterId={section.chapterId} setShowModal={setShowModal} />
        )}
      </div>
    </>
  );
}
