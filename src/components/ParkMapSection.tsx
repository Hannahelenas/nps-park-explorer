import { useVisitorCenterContext } from "../hooks/useVisitorCenterContext";
import ParkMap from "./ParkMap";

interface ParkMapSectionProps {
  parkCode: string;
}

const ParkMapSection = ({ parkCode }: ParkMapSectionProps) => {
  const { visitorCenters, loading, error } = useVisitorCenterContext();

  const parkVisitorCenters = visitorCenters.filter(
    (vc) => vc.parkCode === parkCode
  );

  if (loading) return <p>Loading map...</p>;
  if (error) return <p>Error loading map: {error}</p>;
  if (parkVisitorCenters.length === 0)
    return <p>No visitor centers to show on the map.</p>;

  return (
    <section
      id="map-section"
      className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-10 xl:px-5 py-5"
    >
      <h2
        className="text-2xl md:text-4xl font-black tracking-tighter mb-6 
      mt-6"
      >
        Map
      </h2>
      <div className="mb-6">
        <ParkMap visitorCenters={parkVisitorCenters} />
      </div>
      <p className="mb-4 font-serif">
        Discover locations for campsites, visitorcenters and parkinglots.
      </p>
    </section>
  );
};

export default ParkMapSection;
