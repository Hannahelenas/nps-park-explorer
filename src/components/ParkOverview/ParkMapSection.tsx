import { useVisitorCenterContext } from "../../hooks/useVisitorCenterContext";
import { useParkingLotContext } from "../../hooks/useParkingLotContext";
import ParkMap from "./ParkMap";

interface ParkMapSectionProps {
  parkCode: string;
  directionsInfo: string;
}

const ParkMapSection = ({ parkCode, directionsInfo }: ParkMapSectionProps) => {
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
  if (parkVisitorCenters.length === 0 && parkParkingLots.length === 0) return;

  return (
    <section
      id="park-map-section"
      className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-10 xl:px-5 py-15"
    >
      <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-6">
        Map and Directions
      </h2>
      <p className="mb-6 font-serif">
        Discover locations for visitorcenters and parkinglots.
      </p>
      <div className="mb-6">
        <ParkMap
          visitorCenters={parkVisitorCenters}
          parkingLots={parkParkingLots}
        />
      </div>

      <h4 className="text-xl md:text-3xl font-black tracking-tighter mb-6 mt-10">
        Get here
      </h4>
      <p className="font-serif leading-relaxed ">{directionsInfo}</p>
    </section>
  );
};

export default ParkMapSection;
