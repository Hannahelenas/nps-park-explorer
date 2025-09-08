import {
  IoSunny,
  IoRainy,
  IoSnow,
  IoCloudy,
  IoThunderstorm,
} from "react-icons/io5";
import { MdOutlineCloud } from "react-icons/md";
import type { JSX } from "react/jsx-runtime";

export function getWeatherIcon(main: string): JSX.Element {
  switch (main.toLowerCase()) {
    case "clear":
      return <IoSunny className="text-yellow-500 text-7xl" />;
    case "clouds":
      return <IoCloudy className="text-gray-500 text-7xl" />;
    case "rain":
      return <IoRainy className="text-blue-500 text-7xl" />;
    case "drizzle":
      return <MdOutlineCloud className="text-blue-500 text-7xl" />;
    case "thunderstorm":
      return <IoThunderstorm className="text-purple-600 text-7xl" />;
    case "snow":
      return <IoSnow className="text-blue-500 text-7xl" />;
    default:
      return <MdOutlineCloud className="text-gray-500 text-7xl" />;
  }
}
