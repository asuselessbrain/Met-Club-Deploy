import { FiEdit2, FiTrash2 } from "react-icons/fi";

const dummyChapters = [
  { id: 1, title: "সূচনা পর্ব", subchapters: 3, status: "প্রকাশিত" },
  { id: 2, title: "ডিজিটাল লিটারেসি", subchapters: 5, status: "প্রকাশিত" },
  { id: 3, title: "অনলাইন নিরাপত্তা", subchapters: 2, status: "খসড়া" },
];

export default function ManageChapters() {
  return (
    <div
      className="p-6 rounded-2xl min-h-[500px]"
      style={{
        background: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(20px) saturate(140%)",
        border: "1.5px solid rgba(255,255,255,0.44)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
      }}
    >
      <div className="flex justify-between items-center mb-6">
        <h2 
          className="text-xl font-bold" 
          style={{
            color: "rgba(239,68,68,0.95)",
            textShadow: "-0.6px -0.6px 0 rgba(255,255,255,0.95), 0.6px -0.6px 0 rgba(255,255,255,0.95), -0.6px 0.6px 0 rgba(255,255,255,0.95), 0.6px 0.6px 0 rgba(255,255,255,0.95), 0 2px 8px rgba(239,68,68,0.18)",
            letterSpacing: "-0.5px",
          }}
        >
          অধ্যায় তালিকা
        </h2>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="অধ্যায় অনুসন্ধান করুন..."
            className="px-4 py-2 rounded-xl border border-white/50 bg-white/30 focus:outline-none focus:ring-2 focus:ring-red-400"
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-gray-300/50">
              <th className="p-3 font-semibold text-gray-700">আইডি</th>
              <th className="p-3 font-semibold text-gray-700">শিরোনাম</th>
              <th className="p-3 font-semibold text-gray-700">সাব-অধ্যায়</th>
              <th className="p-3 font-semibold text-gray-700">স্ট্যাটাস</th>
              <th className="p-3 font-semibold text-gray-700 text-right">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody>
            {dummyChapters.map((chapter) => (
              <tr key={chapter.id} className="border-b border-gray-300/20 hover:bg-white/20 transition-colors">
                <td className="p-3 text-gray-800">#{chapter.id}</td>
                <td className="p-3 font-medium text-gray-900">{chapter.title}</td>
                <td className="p-3 text-gray-700">{chapter.subchapters}</td>
                <td className="p-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-bold ${
                      chapter.status === "প্রকাশিত" ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {chapter.status}
                  </span>
                </td>
                <td className="p-3 flex justify-end gap-2">
                  <button 
                    className="p-2 rounded-lg bg-blue-100 text-blue-600 hover:bg-blue-200 transition-colors"
                    title="সম্পাদনা করুন"
                  >
                    <FiEdit2 className="w-4 h-4" />
                  </button>
                  <button 
                    className="p-2 rounded-lg bg-red-100 text-red-600 hover:bg-red-200 transition-colors"
                    title="মুছে ফেলুন"
                  >
                    <FiTrash2 className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
