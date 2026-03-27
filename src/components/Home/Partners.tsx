import partner1 from "../../assets/partners/partner1.png";
import partner2 from "../../assets/partners/partner2.png";
import partner3 from "../../assets/partners/partner3.png";
import partner4 from "../../assets/partners/partner4.png";
import partner5 from "../../assets/partners/partner5.jpg";
import partner6 from "../../assets/partners/partner6.png";

export default function Partners({ bg }: { bg: string }) {
    return (
        <section className={`flex flex-wrap lg:flex-nowrap justify-center lg:justify-between items-center gap-6 md:mt-6 lg:mt-0 ${bg} rounded p-4`}>
            <img className="h-16 lg:w-20 xl:w-36 2xl:w-48 lg:h-12 xl:h-16 shrink-0" src={partner1} alt="Save The Children Logo" />
            <img className="h-16 shrink-0" src={partner2} alt="RIMES Logo" />
            <img className="h-16 lg:w-20 xl:w-36 2xl:w-48 lg:h-12 xl:h-16 shrink-0" src={partner3} alt="JAGONARI Logo" />
            <img className="h-16 lg:w-20 xl:w-36 2xl:w-48 lg:h-12 xl:h-16 shrink-0" src={partner4} alt="SKS Logo" />
            <img className="h-16 shrink-0" src={partner5} alt="YPSA Logo" />
            <img className="h-16 lg:w-20 xl:w-36 2xl:w-48 lg:h-12 xl:h-16 shrink-0" src={partner6} alt="German Humanitarian Assistance Logo" />
        </section>
    )
}
