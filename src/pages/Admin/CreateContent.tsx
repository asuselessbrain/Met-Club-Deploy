import { useEffect, useRef, useState } from "react";
import ReactQuill from "react-quill-new";
import "react-quill-new/dist/quill.snow.css";
import { FiPlus, FiTrash2, FiImage } from "react-icons/fi";
import useAxios from "../../hooks/useAxios";
import { useSearchParams } from "react-router";
import { resolveMediaUrl } from "../../utils/media";
import toast from "react-hot-toast";
import axios from "axios";

interface Section {
  id: number;
  image: File | string | null;
  content: string;
}

interface Subchapter {
  id: number;
  chapterId: number;
  order: number;
  title: string;
  image?: string;
}

interface Chapter {
  id: number;
  title: string;
}

export default function CreateContent() {
  const axiosInstance = useAxios();
  const nextSectionIdRef = useRef(2);
  const [searchParams] = useSearchParams();
  const [chapter, setChapter] = useState("");
  const [subchapter, setSubchapter] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [subchapters, setSubchapters] = useState<Subchapter[]>([]);
  const [sections, setSections] = useState<Section[]>([
    { id: 1, image: null, content: "" },
  ]);

  // --- HTML ক্লিন করার জন্য নতুন ফাংশন ---
  const cleanHTML = (html: string) => {
    if (!html) return "";
    return html
      .replace(/&nbsp;/g, " ") // সব হিডেন স্পেস (&nbsp;) কে নরমাল স্পেসে রূপান্তর
      .replace(/<p><\/p>/g, "") // খালি প্যারাগ্রাফ রিমুভ
      .replace(/<p>\s*<\/p>/g, "") // স্পেসসহ খালি প্যারাগ্রাফ রিমুভ
      .replace(/[\r\n]+/g, " ") // অতিরিক্ত নিউ লাইন রিমুভ
      .trim();
  };

  const handleAddSection = () => {
    setSections((prev) => [
      ...prev,
      { id: nextSectionIdRef.current++, image: null, content: "" },
    ]);
  };

  const handleRemoveSection = (id: number) => {
    if (sections.length > 1) {
      setSections(sections.filter((s) => s.id !== id));
    }
  };

  const handleSectionChange = <K extends keyof Section>(
    id: number,
    field: K,
    value: Section[K]
  ) => {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, [field]: value } : s))
    );
  };

  useEffect(() => {
    fetch("/chapter.json")
      .then((res) => res.json())
      .then((data: Chapter[]) => setChapters(data))
      .catch((err) => console.error("Failed to load chapters:", err));

    fetch("/subChapter.json")
      .then((res) => res.json())
      .then((data: Subchapter[]) => setSubchapters(data))
      .catch((err) => console.error("Failed to load subchapters:", err));
  }, []);

  useEffect(() => {
    const subchapterIdFromQuery = searchParams.get("subchapterId");
    if (!subchapterIdFromQuery || subchapters.length === 0) return;

    const matchedSubchapter = subchapters.find(
      (item) => String(item.id) === subchapterIdFromQuery
    );
    if (!matchedSubchapter) return;

    setChapter(String(matchedSubchapter.chapterId));
    setSubchapter(subchapterIdFromQuery);
  }, [searchParams, subchapters]);

  useEffect(() => {
    if (!subchapter) return;

    let cancelled = false;
    (async () => {
      try {
        const resp = await axiosInstance.get(`/content/subchapter/${subchapter}`);
        const data = resp.data?.data;
        if (!data || cancelled) return;

        const loadedSections: Section[] = (data.sections || []).map(
          (s: { image?: string | null; content?: string }) => ({
            id: nextSectionIdRef.current++,
            image: s.image || null,
            content: s.content || "",
          })
        );

        if (loadedSections.length > 0) setSections(loadedSections);
      } catch (err) {
        console.error("Failed to load content:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [subchapter, axiosInstance]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!chapter || !subchapter) {
      alert("অধ্যায় এবং সাব-অধ্যায় নির্বাচন করুন");
      return;
    }

    const form = new FormData();
    form.append("chapterId", String(chapter));
    form.append("subchapterId", String(subchapter));

    const files: File[] = [];
    const sectionsMeta: Array<{
      content: string;
      imageIndex: number | null;
      image?: string | null;
    }> = [];

    sections.forEach((sec) => {
      // সেভ করার আগে কন্টেন্ট ক্লিন করে নেওয়া হচ্ছে
      const cleanedText = cleanHTML(sec.content);

      if (sec.image instanceof File) {
        files.push(sec.image);
        sectionsMeta.push({
          content: cleanedText,
          imageIndex: files.length - 1,
        });
      } else {
        sectionsMeta.push({
          content: cleanedText,
          imageIndex: null,
          image: typeof sec.image === "string" ? sec.image : null,
        });
      }
    });

    files.forEach((f) => form.append("images", f));
    form.append("sections", JSON.stringify(sectionsMeta));

    try {
      setIsSubmitting(true);
      const res =await axiosInstance.post("/content", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res.data);
      toast.success("কন্টেন্ট সফলভাবে সংরক্ষণ করা হয়েছে");
    } catch (err) {
      if (axios.isAxiosError(err)) {
        toast.error(err.response?.data.errorMessage);
      }
      else {
        toast.error("কন্টেন্ট সংরক্ষণ করা যায়নি");
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const quillModules = {
    toolbar: [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"], // ফরম্যাটিং ক্লিন করার বাটন
    ],
  };

  const quillFormats = ["bold", "italic", "underline", "list", "bullet", "link"];
  const filteredSubchapters = chapter
    ? subchapters
      .filter((s) => String(s.chapterId) === chapter)
      .sort((a, b) => a.order - b.order)
    : [];

  return (
    <div
      className="p-6 rounded-2xl max-w-4xl mx-auto mb-8"
      style={{
        background: "rgba(255,255,255,0.4)",
        backdropFilter: "blur(20px) saturate(140%)",
        border: "1.5px solid rgba(255,255,255,0.44)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.05)",
      }}
    >
      <h2
        className="text-2xl font-bold mb-6 text-red-600"
        style={{ letterSpacing: "-0.5px" }}
      >
        কন্টেন্ট ম্যানেজমেন্ট
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5 rounded-xl bg-white/30 border border-white/50">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              অধ্যায়
            </label>
            <select
              value={chapter}
              onChange={(e) => {
                setChapter(e.target.value);
                setSubchapter("");
              }}
              className="w-full px-4 py-3 rounded-xl border border-white/50 bg-white/60 focus:outline-none focus:ring-2 focus:ring-red-400"
              required
            >
              <option value="">-- অধ্যায় বেছে নিন --</option>
              {chapters.map((c) => (
                <option key={c.id} value={String(c.id)}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">
              সাব-অধ্যায়
            </label>
            <select
              value={subchapter}
              onChange={(e) => setSubchapter(e.target.value)}
              className={
                "w-full px-4 py-3 rounded-xl border border-white/50 bg-white/60 focus:outline-none focus:ring-2 focus:ring-red-400 " +
                (!chapter ? "opacity-60 cursor-not-allowed" : "")
              }
              required
              disabled={!chapter}
            >
              <option value="">-- সাব-অধ্যায় বেছে নিন --</option>
              {filteredSubchapters.map((s) => (
                <option key={s.id} value={String(s.id)}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-bold border-b border-gray-300 pb-2 text-red-600">
            কন্টেন্ট বিভাগসমূহ
          </h3>

          {sections.map((section, index) => (
            <div
              key={section.id}
              className="p-5 rounded-xl bg-white/40 border border-white/60 relative shadow-sm"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="font-bold text-gray-700 bg-white/50 px-3 py-1 rounded-lg">
                  বিভাগ {index + 1}
                </span>
                {sections.length > 1 && (
                  <button
                    type="button"
                    onClick={() => handleRemoveSection(section.id)}
                    className="text-red-500 hover:text-red-700 p-2"
                  >
                    <FiTrash2 className="w-5 h-5" />
                  </button>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                <div className="md:col-span-1">
                  <div className="relative w-full h-52 md:h-64 bg-white/50 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center cursor-pointer overflow-hidden">
                    <input
                      type="file"
                      accept="image/*"
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        handleSectionChange(section.id, "image", file);
                      }}
                    />
                    {section.image ? (
                      <img
                        src={typeof section.image === "string" ? resolveMediaUrl(section.image) : URL.createObjectURL(section.image)}
                        alt="Preview"
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="text-center text-gray-500">
                        <FiImage className="w-8 h-8 mx-auto" />
                        <p className="text-xs mt-1">ছবি আপলোড</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="md:col-span-2">
                  <div className="relative w-full h-52 md:h-64 editor-wrapper">
                    <ReactQuill
                      theme="snow"
                      value={section.content}
                      onChange={(val) =>
                        handleSectionChange(section.id, "content", val)
                      }
                      modules={quillModules}
                      formats={quillFormats}
                      className="editor-shell rounded-xl overflow-hidden bg-white h-full"
                    />
                    <style>{`
                      .editor-wrapper .editor-shell { height: 100%; display: flex; flex-direction: column; }
                      .editor-wrapper .editor-shell .ql-container { flex: 1; overflow: hidden; }
                      .editor-wrapper .editor-shell .ql-editor { height: 100%; overflow-y: auto; }
                    `}</style>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <button
            type="button"
            onClick={handleAddSection}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-red-700 bg-white/60 border-2 border-dashed border-red-300"
          >
            <FiPlus /> বিভাগ যোগ করুন
          </button>
        </div>

        <div className="pt-6 mt-6 border-t border-gray-300 flex justify-end gap-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="px-8 py-2.5 rounded-xl font-bold text-white bg-linear-to-r from-red-500 to-orange-500 disabled:opacity-50 shadow-lg"
          >
            {isSubmitting ? "সংরক্ষণ হচ্ছে..." : "কন্টেন্ট প্রকাশ করুন"}
          </button>
        </div>
      </form>
    </div>
  );
}