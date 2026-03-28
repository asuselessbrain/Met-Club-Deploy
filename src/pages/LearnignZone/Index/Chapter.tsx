import { use, useState } from "react";

import bgImage from "../../../assets/images/chapter-bg.png";
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


function TopicCard({ topic, index }: { topic: ChapterTopic; index: number }) {
  const [hovered, setHovered] = useState(false);

  const isDisabled = ![0, 1, 2, 3].includes(index);

  return (
    <Link to={`/lesson/${topic.id}`} className={isDisabled ? "pointer-events-none opacity-50" : ""}>
      <div
        className="relative flex flex-col items-center justify-between rounded-2xl bg-white/85 backdrop-blur-md p-4 cursor-pointer transition-all duration-300 shrink-0"
        style={{
          border: `2.5px solid ${topic.borderColor}`,
          width: 160,
          minHeight: 170,
          boxShadow: hovered
            ? `0 8px 32px ${topic.glowColor}, 0 2px 8px rgba(0,0,0,0.10)`
            : `0 2px 12px rgba(0,0,0,0.08)`,
          transform: hovered ? "translateY(-8px) scale(1.04)" : "translateY(0) scale(1)",
          animationDelay: `${index * 0.08}s`,
          animation: "fadeUp 0.5s ease both",
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* Title */}
        <p
          className="text-center font-bold text-gray-800 leading-snug mb-3"
          style={{
            fontSize: "0.82rem",
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
              "linear-gradient(to bottom, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 60%, rgba(255,255,255,0.05) 100%)",
          }}
        />

        {/* Title */}
        <h1
          className="relative z-10 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-6 sm:mb-8 md:mb-10 px-2"
          style={{
            color: "#2d6a9f",
            textShadow:
              "0 2px 0 rgba(45,106,159,0.15), 0 6px 24px rgba(45,106,159,0.12)",
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
    </>
  );
}
