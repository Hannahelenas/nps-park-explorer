import { useVisitorCenterContext } from "../hooks/useVisitorCenterContext";
import { useParkingLotContext } from "../hooks/useParkingLotContext";
import ParkMap from "./ParkMap";

interface ParkMapSectionProps {
  parkCode: string;
}

const ParkMapSection = ({ parkCode }: ParkMapSectionProps) => {
  const {
    visitorCenters,
    loading: loadingVC,
    error: errorVC,
  } = useVisitorCenterContext();
  const {
    parkingLots,
    loading: loadingPL,
    error: errorPL,
  } = useParkingLotContext();

  const parkVisitorCenters = visitorCenters.filter(
    (vc) => vc.parkCode === parkCode
  );

  const parkParkingLots = parkingLots.filter((pl) =>
    pl.relatedParks.some((p) => p.parkCode === parkCode)
  );

  if (loadingVC || loadingPL) return <p>Loading map...</p>;
  if (errorVC || errorPL) return <p>Error loading map: {errorVC || errorPL}</p>;
  if (parkVisitorCenters.length === 0 && parkParkingLots.length === 0)
    return <p>No locations to show on the map.</p>;

  return (
    <section
      id="map-section"
      className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-10 xl:px-5 py-5"
    >
      <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-6 mt-6">
        Map
      </h2>
      <div className="mb-6">
        <ParkMap
          visitorCenters={parkVisitorCenters}
          parkingLots={parkParkingLots}
        />
      </div>
      <p className="mb-4 font-serif">
        Discover locations for campsites, visitorcenters and parkinglots.
      </p>
    </section>
  );
};

export default ParkMapSection;
