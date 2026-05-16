import { Link, useLoaderData } from "react-router";
import bgImage from "../../../assets/images/start-journey-page-bg.jpeg";
import TopNav from "../../../components/Shared/TopBar";

interface ChapterTopic {
  id: number;
  title: string;
  image: string;
  borderColor: string;
  glowColor: string;
}

interface SubChapterTopic {
  id: number;
  chapterId: number;
  order: number;
  title: string;
  image?: string;
}

interface LoaderData {
  chapter: ChapterTopic;
  subchapters: SubChapterTopic[];
}

export default function Subchapter() {
  const { chapter, subchapters } = useLoaderData() as LoaderData;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
      }}
    >
      <div className="relative z-40">
        <TopNav title={chapter.title} tone="red" />
      </div>

      <div className="relative z-0 flex-1 overflow-auto px-4 py-6 sm:px-6 lg:px-10">
        <div className="mx-auto w-full max-w-6xl h-full flex items-center justify-center">
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 mx-auto items-stretch">
            {subchapters.map((subchapter) => {
              return (
                <Link key={subchapter.id} to={`/lesson/${subchapter.id}`} className="block w-45">
                  <div
                    className="group relative flex w-45 min-h-45 md:min-h-47.5 flex-col items-center justify-between rounded-2xl bg-[linear-gradient(145deg,rgba(255,255,255,0.86),rgba(255,245,242,0.74))] backdrop-blur-md p-4 cursor-pointer transition-all duration-300"
                    style={{
                      border: "2.5px solid #fca5a5",
                      boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
                      animation: `cardFade 0.5s ease both`,
                      animationDelay: `${(subchapter.order - 1) * 0.08}s`,
                    }}
                  >
                    <p className="text-center font-bold text-red-900 leading-snug mb-3 line-clamp-2" style={{ fontSize: "0.80rem" }}>
                      {subchapter.title}
                    </p>

                    <div className="flex-1 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1">
                      <img
                        src={subchapter.image || chapter.image}
                        alt={subchapter.title}
                        className="w-20 h-20 object-contain mx-auto"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

<style>{`
  @keyframes cardFade {
    from { opacity: 0; }
    to { opacity: 1; }
  }
`}</style>