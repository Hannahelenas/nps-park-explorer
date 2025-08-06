import { useParams } from "react-router-dom";
import { useParkData } from "../hooks/useParkData";
import ParkOverviewHero from "../components/ParkOverviewHero";
import OpeningHoursSection from "../components/OpeningHoursSection";
import ParkIntroSection from "../components/ParkIntroSection";
import ThingsToDoSection from "../components/ThingsToDoSection";

const ParkOverview = () => {
  const { parkCode } = useParams<{ parkCode: string }>();
  const { park, loading, error } = useParkData(parkCode);

  if (loading) {
    return (
      <div
        className="h-[40dvh] md:h-[50dvh] lg:h-[50dvh] xl:h-[80dvh] flex 
      justify-center items-center"
      >
        <p className="text-lg font-semibold flex items-center gap-2">
          <span
            className="animate-spin w-4 h-4 border-2 border-t-transparent
           border-black rounded-full"
          ></span>
          Loading park...
        </p>
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;
  if (!park) return <div>No park found.</div>;

  return (
    /* Hero section */
    <section className="mt-0 relative">
      {park && <ParkOverviewHero park={park} />}
      <section
        className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-5 flex 
      flex-col lg:flex-row justify-between"
      >
        <ul
          className="flex flex-row flex-wrap font-serif font-medium 
        items-start gap-4 md:gap-8 py-2 md:py-5 "
        >
          <li className="">Activities</li>
          <li className="">Campsites</li>
          <li className="">Opening hours</li>{" "}
          <li className="">Visitor centers</li>
        </ul>
        <ul
          className="flex flex-row flex-wrap font-serif font-medium 
        items-start gap-4 md:gap-8 py-2 md:py-5"
        >
          <li className="">Alerts</li>
          <li>Contact</li>
          <li>Fees</li>
        </ul>
      </section>
      {/* Park intro section */}
      {park && <ParkIntroSection park={park} />}
      {/* Things to do section */}
      {park && parkCode && <ThingsToDoSection parkCode={parkCode} />}
      {/* Opening hours section */}
      {park && <OpeningHoursSection park={park} />}
    </section>
  );
};

export default ParkOverview;
