import { useState, useEffect } from "react";
import ZoneCard from "../components/StartJourney/ZoneCard";
import storyImg from "../assets/images/learning-zone.png";
import simulationImg from "../assets/images/practice-zone.png";
import bgImage from "../assets/images/start-journey-page-bg.jpeg";
import TopNav from "../components/Shared/TopBar";
import axiosProtected from "../hooks/axiosProtected";



export default function StartJourney() {
  

  

  const axios = axiosProtected();

  const [isChapterOneCompleted, setIsChapterOneCompleted] = useState(false);

  useEffect(() => {
    const checkChapterOneCompletion = async () => {
      const res = await axios.get("/user/chapter-one-completion-status");
      setIsChapterOneCompleted(res.data.data);
    }
    checkChapterOneCompletion();
  }, [axios]);

  

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

      <TopNav />

      {/* ── Main Content ── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 pt-24 pb-12">
        {/* Header */}
        <div className="header-anim text-center mb-10">
          <h1
            className="text-3xl md:text-5xl font-black mb-2"
            style={{
              color: "#b91c1c",
              textShadow:
                "-1px -1px 0 rgba(255,255,255,0.96), 1px -1px 0 rgba(255,255,255,0.96), -1px 1px 0 rgba(255,255,255,0.96), 1px 1px 0 rgba(255,255,255,0.96), 0 2px 0 rgba(185,28,28,0.20), 0 8px 20px rgba(127,29,29,0.24)",
            }}
          >
            মেট ক্লাবে স্বাগতম !
          </h1>
          <p
            className="text-lg md:text-xl mt-4"
            style={{
              color: "#1f2937",
              fontWeight: 600,
              textShadow: "0 1px 6px rgba(255,255,255,0.28)",
            }}
          >
            প্রস্তুতির জন্য আপনার পথ নির্বাচন করুন
          </p>
        </div>

        {/* Cards Grid */}
        <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
          <div className="card1 h-full">
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

          <div className="card2 h-full">
            <ZoneCard
              title="স্টোরি সিচুয়েশন"
              titleColor="#9a3412"
              borderColor="#fb923c"
              btnBg="linear-gradient(135deg, #fb923c, #f97316)"
              btnShadow="rgba(249,115,22,0.42)"
              btnLabel={isChapterOneCompleted ? "সিমুলেশনে প্রবেশ করুন" : "প্রথম অধ্যায় সম্পন্ন করুন"}
              // disabled={!isChapterOneCompleted}
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