import {
  IoSunny,
  IoRainy,
  IoSnow,
  IoCloudy,
  IoThunderstorm,
} from "react-icons/io5";
import { MdOutlineCloud } from "react-icons/md";
import type { JSX } from "react/jsx-runtime";

const iconSize = "text-7xl";

const weatherIcons: Record<string, JSX.Element> = {
  clear: <IoSunny className={`text-yellow-500 ${iconSize}`} />,
  clouds: <IoCloudy className={`text-gray-500 ${iconSize}`} />,
  rain: <IoRainy className={`text-blue-500 ${iconSize}`} />,
  drizzle: <MdOutlineCloud className={`text-blue-500 ${iconSize}`} />,
  thunderstorm: <IoThunderstorm className={`text-purple-600 ${iconSize}`} />,
  snow: <IoSnow className={`text-blue-500 ${iconSize}`} />,
};

export function getWeatherIcon(main: string): JSX.Element {
  return (
    weatherIcons[main.toLowerCase()] ?? (
      <MdOutlineCloud className={`text-gray-500 ${iconSize}`} />
    )
  );
}
