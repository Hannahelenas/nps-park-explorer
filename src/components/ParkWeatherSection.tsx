import type { Park } from "../types/Park";
import { parseLatLong } from "../utils/parseCoordinates";
import { getWeatherIcon } from "../utils/getWeatherIcon";
import { useWeather } from "../hooks/useWeather";

interface ParkWeatherSectionProps {
  park: Park;
}

const ParkWeatherSection = ({ park }: ParkWeatherSectionProps) => {
  const coordinates = park.latLong ? parseLatLong(park.latLong) : null;
  const { weather, loading, error } = useWeather(
    coordinates?.lat,
    coordinates?.long
  );

  return (
    <section className="max-w-6xl mx-auto px-5 md:px-10 xl:px-5">
      <h2 className="text-2xl md:text-4xl font-black tracking-tighter mb-6 mt-6">
        Weather and climate
      </h2>

      <div className="flex flex-col md:flex-row md:items-start md:gap-8">
        <p className="font-serif leading-relaxed md:flex-1">
          {park.weatherInfo}
        </p>
        <article className="rounded-3xl mt-4 md:mt-0 p-5 bg-white md:w-1/3">
          <h4 className="text-2xl md:text-3xl font-black tracking-tighter">
            Current weather
          </h4>

          {loading && <p>Loading weather...</p>}
          {error && <p className="">Error: {error}</p>}

          {weather && (
            <div className="flex flex-col items-start">
              <p className="font-serif mt-2">{weather.localTime}</p>

              <div
                className="flex items-center justify-between gap-6 mt-2 
              mb-2"
              >
                <p className="text-3xl font-black">
                  {Math.round(weather.temp)}°C
                </p>
                {getWeatherIcon(weather.main)}
              </div>

              <p className="mt-2 font-serif">
                {weather.description.charAt(0).toUpperCase() +
                  weather.description.slice(1)}
              </p>

              <p className="font-serif">
                Feels like: {Math.round(weather.feelsLike)}°C /{" "}
                {Math.round((weather.feelsLike * 9) / 5 + 32)}°F
              </p>
            </div>
          )}
        </article>
      </div>
    </section>
  );
};

export default ParkWeatherSection;
