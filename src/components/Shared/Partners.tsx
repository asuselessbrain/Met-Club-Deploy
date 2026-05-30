import partner1 from "../../assets/partners/partner1.png";
import partner2 from "../../assets/partners/partner2.png";
import partner3 from "../../assets/partners/partner3.png";
import partner4 from "../../assets/partners/partner4.png";
import partner5 from "../../assets/partners/partner5.jpg";
import partner6 from "../../assets/partners/partner6.png";
import partner7 from "../../assets/partners/bangladesh-govt-logo-png_seeklogo-196441.png";
import partner8 from "../../assets/partners/logo_bmd.png";

export default function Partners({ bg }: { bg: string }) {
    const partnerLogos = [
        { src: partner1, alt: "Save The Children Logo", bgClass: "bg-white" },
        { src: partner2, alt: "RIMES Logo", bgClass: "bg-sky-50" },
        { src: partner7, alt: "Bangladesh Government Logo", bgClass: "bg-red-50" },
        { src: partner8, alt: "BMD Logo", bgClass: "bg-cyan-50" },
        { src: partner3, alt: "JAGONARI Logo", bgClass: "bg-emerald-50" },
        { src: partner4, alt: "SKS Logo", bgClass: "bg-rose-50" },
        { src: partner5, alt: "YPSA Logo", bgClass: "bg-amber-50" },
        { src: partner6, alt: "German Humanitarian Assistance Logo", bgClass: "bg-indigo-50" },
    ];

    return (
        <section className={`w-full md:mt-6 lg:mt-0 rounded-2xl border border-white/30 p-3 md:p-4 ${bg}`}>
            <div className="flex w-full flex-nowrap items-stretch gap-1.5 md:gap-3">
                {partnerLogos.map((logo) => (
                        <img
                            className="h-8 md:h-14 w-full object-contain"
                            src={logo.src}
                            alt={logo.alt}
                            loading="lazy"
                            decoding="async"
                        />
                ))}
            </div>
        </section>
    )
}
