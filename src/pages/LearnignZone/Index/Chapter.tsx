import { use, useState } from "react";

import bgImage from "../../../assets/images/start-journey-page-bg.jpeg";
import { Link } from "react-router";

export interface ChapterTopic {
  id: number;
  title: string;
  image: string;
  borderColor: string;
  glowColor: string;
  row: number;
}

const fetchChapters = async () => {
  const response = await fetch('/chapter.json');
  return response.json() as Promise<ChapterTopic[]>;
};

const chaptersPromise = fetchChapters();

const redCardAccent = {
  border: "#fca5a5",
  glow: "rgba(252,165,165,0.26)",
};


function TopicCard({ topic, index }: { topic: ChapterTopic; index: number }) {
  const [hovered, setHovered] = useState(false);

  const isDisabled = ![0, 1, 2, 3].includes(index);
  return (
    <Link to={`/lesson/${topic.id}`} className={isDisabled ? "pointer-events-none opacity-50" : ""}>
      <div
        className="relative flex flex-col items-center justify-between rounded-2xl bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(255,245,242,0.74))] backdrop-blur-md p-4 cursor-pointer transition-all duration-300 shrink-0"
        style={{
          border: `2.5px solid ${redCardAccent.border}`,
          width: 160,
          minHeight: 170,
          boxShadow: hovered
            ? `0 8px 32px ${redCardAccent.glow}, 0 2px 8px rgba(0,0,0,0.10)`
            : `0 2px 12px rgba(0,0,0,0.08)`,
          transform: hovered ? "translateY(-6px)" : "translateY(0)",
          animationDelay: `${index * 0.08}s`,
          animation: "cardFade 0.5s ease both",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Title */}
        <p
          className="text-center font-bold text-red-900 leading-snug mb-3"
          style={{
            fontSize: "0.95rem",
          }}
        >
          {topic.title}
        </p>

        {/* Illustration emoji */}
        <div>
          <img src={topic.image} alt={topic.title} className="w-24 h-24 object-contain" />
        </div>
      </div>
    </Link>
  );
}


export default function Chapter() {

  const chapters = use(chaptersPromise);

  return (
    <>
      <div
        className="relative min-h-screen flex flex-col items-center justify-start sm:justify-center py-6 sm:py-10 px-4 sm:px-6 lg:px-12 overflow-hidden"
        style={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Soft overlay so cards are readable over the bg */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255,245,243,0.50) 0%, rgba(255,231,226,0.24) 60%, rgba(255,217,211,0.10) 100%)",
          }}
        />

        {/* Title */}
        <h1
          className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 sm:mb-8 md:mb-10 px-2"
          style={{
            color: "#b91c1c",
            textShadow:
              "-1px -1px 0 rgba(255,255,255,0.96), 1px -1px 0 rgba(255,255,255,0.96), -1px 1px 0 rgba(255,255,255,0.96), 1px 1px 0 rgba(255,255,255,0.96), 0 2px 0 rgba(185,28,28,0.20), 0 8px 20px rgba(127,29,29,0.24)",
            animation: "titlePop 0.7s cubic-bezier(0.34,1.56,0.64,1) both",
            letterSpacing: "0.03em",
          }}
        >
          লার্নিং জোন
        </h1>

        {/* Chapters Grid */}
        <div className="relative z-10 w-full max-w-6xl grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 mx-auto">
          {chapters.map((topic: ChapterTopic, index: number) => (
            <TopicCard key={topic.id} topic={topic} index={index} />
          ))}
        </div>
      </div>

      <style>{`
        @keyframes cardFade {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </>
  );
}
