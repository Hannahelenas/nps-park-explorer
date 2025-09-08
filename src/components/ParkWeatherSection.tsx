import type { Park } from "../types/Park";
import { parseLatLong } from "../utils/parseCoordinates";

interface ParkWeatherSectionProps {
  park: Park;
}

const ParkWeatherSection = ({ park }: ParkWeatherSectionProps) => {
  const coordinates = park.latLong ? parseLatLong(park.latLong) : null;
  return (
    <section className="max-w-6xl mx-auto px-5 md:px-10 xl:px-5">
      <h2
        className="text-2xl md:text-4xl font-black tracking-tighter mb-6 
      mt-6"
      >
        Weather and climate
      </h2>
      <p className="mt-2 font-serif leading-relaxed">{park.weatherInfo}</p>
      <article className=" rounded-3xl">
        <h3
          className="text-2xl md:text-3xl font-black tracking-tighter mb-4 
      mt-4"
        >
          Current weather
        </h3>
        {coordinates ? (
          <p>
            Latitude: {coordinates.lat}, Longitude: {coordinates.long}
          </p>
        ) : (
          <p>Coordinates not available</p>
        )}
      </article>
    </section>
  );
};

export default ParkWeatherSection;
