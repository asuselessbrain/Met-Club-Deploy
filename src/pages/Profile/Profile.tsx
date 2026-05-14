import { useState } from "react";
import bgImage from "../../assets/images/start-journey-page-bg.jpeg";
import TopNav from "../../components/Shared/TopBar";

export default function Profile() {
  const [activeTab, setActiveTab] = useState<"general" | "badges">("general");
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);

  const styles = {
    glassCard: {
      background: "linear-gradient(180deg, rgba(255,255,255,0.46), rgba(255,255,255,0.30))",
      backdropFilter: "blur(26px) saturate(160%)",
      WebkitBackdropFilter: "blur(26px) saturate(160%)",
      border: "1px solid rgba(255, 255, 255, 0.55)",
      boxShadow: "0 26px 80px rgba(30, 64, 175, 0.12), inset 0 1px 0 rgba(255,255,255,0.55)",
    },
    gradientBtn:
      "bg-linear-to-r from-red-500 to-orange-500 hover:from-red-600 hover:to-orange-600 text-white transition-all duration-300 transform hover:-translate-y-1 shadow-md",
    activeTabBtn: "border-b-4 border-red-500 text-red-600 font-bold",
    inactiveTabBtn: "text-gray-500 hover:text-gray-700 font-medium",
    inputField: (editMode: boolean) =>
      `w-full mt-1 p-3 rounded-xl border transition-colors outline-none ${
        editMode
          ? "bg-white border-red-400 focus:ring-2 focus:ring-red-400 text-gray-800"
          : "bg-gray-50/50 border-gray-200 text-gray-600 cursor-not-allowed"
      }`,
  };

  const renderField = (value: string) =>
    isEditMode ? (
      <input type="text" defaultValue={value} className={styles.inputField(true)} />
    ) : (
      <div className="mt-1 rounded-xl border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.24))] px-4 py-3 text-gray-700 shadow-[0_8px_24px_rgba(59,130,246,0.08)] backdrop-blur-xl">
        {value}
      </div>
    );

  return (
    <div
      className="min-h-screen pb-12 antialiased text-gray-800 relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center bottom",
        backgroundRepeat: "no-repeat",
        fontFamily: "'Noto Sans Bengali', sans-serif",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.40),rgba(219,234,254,0.18),rgba(255,255,255,0.46))] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.75),transparent_34%),radial-gradient(circle_at_20%_20%,rgba(191,219,254,0.28),transparent_22%),radial-gradient(circle_at_80%_18%,rgba(255,255,255,0.22),transparent_20%)] pointer-events-none" />

      <TopNav title="প্রোফাইল" />

      <main className="relative z-10 mx-auto mt-10 max-w-5xl px-4">
        <div style={styles.glassCard} className="overflow-hidden rounded-[2.5rem]">
          <section className="relative h-32 bg-linear-to-r from-orange-400/95 to-red-500/95">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_28%),linear-gradient(120deg,rgba(255,255,255,0.08),rgba(255,255,255,0))]" />
            <div className="absolute -bottom-16 left-10 flex items-end gap-6">
              <div className="relative">
                <div className="h-36 w-36 rounded-full bg-white/75 p-1 shadow-2xl ring-1 ring-white/70 backdrop-blur-xl">
                  <div className="flex h-full w-full items-center justify-center rounded-full bg-orange-100/90 text-5xl font-bold text-orange-500 shadow-inner">
                    রা
                  </div>
                </div>
                <button className="absolute bottom-2 right-2 rounded-full border border-white/70 bg-white/90 p-2 text-red-500 shadow-lg transition hover:scale-110 backdrop-blur-xl">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                  </svg>
                </button>
              </div>
              <div className="mb-4">
                <h2 className="text-3xl font-bold text-gray-800">রাহেলা বেগম</h2>
                <p className="font-medium text-gray-600">আইডি: MC-2024-8902</p>
              </div>
            </div>
          </section>

          <section className="mt-20 border-b border-white/60 px-10 py-6">
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {[
                { label: "মোট পয়েন্ট", val: "১২৫০", color: "text-orange-500" },
                { label: "অর্জিত ব্যাজ", val: "০৮", color: "text-red-500" },
                { label: "কুইজ সম্পন্ন", val: "২৪", color: "text-green-500" },
                { label: "অর্জিত সার্টিফিকেট", val: "০২", color: "text-blue-500" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/60 bg-[linear-gradient(180deg,rgba(255,255,255,0.42),rgba(255,255,255,0.24))] p-3 text-center shadow-[0_8px_24px_rgba(59,130,246,0.08)] backdrop-blur-xl">
                  <p className="text-xs font-bold uppercase text-gray-500">{stat.label}</p>
                  <p className={`text-2xl font-black ${stat.color}`}>{stat.val}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="border-b border-white/55 px-10 mt-4">
            <div className="flex gap-8">
              <button onClick={() => setActiveTab("general")} className={`py-4 transition-all ${activeTab === "general" ? styles.activeTabBtn : styles.inactiveTabBtn}`}>
                ব্যক্তিগত তথ্য
              </button>
              <button onClick={() => setActiveTab("badges")} className={`py-4 transition-all ${activeTab === "badges" ? styles.activeTabBtn : styles.inactiveTabBtn}`}>
                পুরস্কার ও ব্যাজ
              </button>
            </div>
          </section>

          <section className="p-8 md:p-10">
            {activeTab === "general" && (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 animate-fadeIn">
                <div className="space-y-5">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-gray-700">
                    <span className="h-6 w-2 rounded-full bg-red-500" /> সাধারণ তথ্য
                  </h3>
                  <div>
                    <label className="ml-1 text-sm font-semibold text-gray-600">শিক্ষার্থীর পূর্ণ নাম</label>
                    {renderField("রাহেলা বেগম")}
                  </div>
                  <div>
                    <label className="ml-1 text-sm font-semibold text-gray-600">শ্রেণি ও বিভাগ</label>
                    {renderField("৬ষ্ঠ শ্রেণি (ক-শাখা)")}
                  </div>
                  <div>
                    <label className="ml-1 text-sm font-semibold text-gray-600">মোবাইল নম্বর</label>
                    {renderField("০১৭XXXXXX৮৯")}
                  </div>
                </div>

                <div className="space-y-5">
                  <h3 className="flex items-center gap-2 text-lg font-bold text-gray-700">
                    <span className="h-6 w-2 rounded-full bg-orange-500" /> শিক্ষা প্রতিষ্ঠানের তথ্য
                  </h3>
                  <div>
                    <label className="ml-1 text-sm font-semibold text-gray-600">স্কুলের নাম</label>
                    {renderField("সরকারি বালিকা উচ্চ বিদ্যালয়, ঢাকা")}
                  </div>
                  <div>
                    <label className="ml-1 text-sm font-semibold text-gray-600">রোল নম্বর</label>
                    {renderField("০৫")}
                  </div>
                  <div>
                    <label className="ml-1 text-sm font-semibold text-gray-600">পিতার নাম</label>
                    {renderField("মো: আব্দুর রহিম")}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "badges" && (
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 animate-fadeIn">
                {[
                  { name: "দ্রুত শিক্ষার্থী", icon: "⚡", desc: "৫টি কুইজ দ্রুত শেষ করা" },
                  { name: "সেরা বন্ধু", icon: "🤝", desc: "বন্ধুদের সাহায্য করা" },
                  { name: "গণিত মাস্টার", icon: "📐", desc: "গণিতে ১০০% পাওয়া" },
                  { name: "সাপ্তাহিক হিরো", icon: "🏆", desc: "টপ চার্টে থাকা" },
                ].map((badge) => (
                  <div key={badge.name} className="cursor-help rounded-3xl border border-dashed border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.38),rgba(255,255,255,0.18))] p-4 text-center shadow-[0_10px_30px_rgba(59,130,246,0.08)] transition hover:bg-white/80 backdrop-blur-xl">
                    <div className="mb-2 text-4xl">{badge.icon}</div>
                    <h4 className="text-sm font-bold text-gray-800">{badge.name}</h4>
                    <p className="text-[10px] leading-tight text-gray-500">{badge.desc}</p>
                  </div>
                ))}
              </div>
            )}

            <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/55 pt-8 sm:flex-row">
              <button className="flex items-center gap-2 rounded-xl px-4 py-2 font-bold text-red-500 transition hover:bg-white/60 backdrop-blur-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                লগ আউট করুন
              </button>

              <div className="flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
                <button
                  onClick={() => setIsPasswordModalOpen(true)}
                  className="w-full rounded-2xl border border-white/65 bg-white/50 px-6 py-3 font-bold text-gray-700 shadow-[0_8px_24px_rgba(255,255,255,0.16)] backdrop-blur-xl transition hover:bg-white/80 sm:w-auto"
                >
                  পাসওয়ার্ড পরিবর্তন
                </button>
                <button
                  onClick={() => setIsEditMode((prev) => !prev)}
                  className={`${isEditMode ? "bg-green-500 hover:bg-green-600 text-white" : styles.gradientBtn} w-full whitespace-nowrap rounded-2xl px-10 py-3 font-bold shadow-lg sm:w-auto`}
                >
                  {isEditMode ? "সেভ করুন" : "তথ্য এডিট করুন"}
                </button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/30 px-4 backdrop-blur-md">
          <div className="relative w-full max-w-md rounded-4xl border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.74),rgba(255,255,255,0.52))] p-8 shadow-[0_24px_80px_rgba(30,64,175,0.14)] backdrop-blur-2xl animate-fadeIn">
            <button onClick={() => setIsPasswordModalOpen(false)} className="absolute right-6 top-6 text-gray-400 transition hover:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold text-gray-800">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              পাসওয়ার্ড পরিবর্তন
            </h3>

            <div className="space-y-4">
              <div>
                <label className="mb-1 ml-1 block text-sm font-semibold text-gray-700">বর্তমান পাসওয়ার্ড</label>
                <input type="password" placeholder="বর্তমান পাসওয়ার্ড লিখুন" className="w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 outline-none transition-all backdrop-blur-xl focus:border-transparent focus:bg-white focus:ring-2 focus:ring-red-400" />
              </div>
              <div>
                <label className="mb-1 ml-1 block text-sm font-semibold text-gray-700">নতুন পাসওয়ার্ড</label>
                <input type="password" placeholder="নতুন পাসওয়ার্ড লিখুন" className="w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 outline-none transition-all backdrop-blur-xl focus:border-transparent focus:bg-white focus:ring-2 focus:ring-red-400" />
              </div>
              <div>
                <label className="mb-1 ml-1 block text-sm font-semibold text-gray-700">নতুন পাসওয়ার্ড নিশ্চিত করুন</label>
                <input type="password" placeholder="পাসওয়ার্ড পুনরায় লিখুন" className="w-full rounded-xl border border-white/70 bg-white/70 px-4 py-3 outline-none transition-all backdrop-blur-xl focus:border-transparent focus:bg-white focus:ring-2 focus:ring-red-400" />
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <button onClick={() => setIsPasswordModalOpen(false)} className="flex-1 rounded-xl border border-white/70 px-4 py-3 font-bold text-gray-600 transition hover:bg-white/80">
                বাতিল
              </button>
              <button onClick={() => setIsPasswordModalOpen(false)} className="flex-1 rounded-xl bg-linear-to-r from-red-500 to-orange-500 px-4 py-3 font-bold text-white shadow-md transition hover:shadow-lg">
                আপডেট করুন
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
