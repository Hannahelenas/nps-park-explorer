import { MdOpenInNew } from "react-icons/md";
import { weekdayOrder, type Park } from "../types/Park";

interface OpeningHoursSectionProps {
  park: Park;
}

const OpeningHoursSection = ({ park }: OpeningHoursSectionProps) => {
  return (
    <section
      className="max-w-6xl px-5 mx-auto mt-5 mb-6"
      aria-labelledby="opening-hours-heading"
    >
      {" "}
      <div className="border-t">
        <h2
          className="text-2xl md:text-4xl font-black tracking-tighter mb-6 mt-6"
          id="opening-hours-heading"
        >
          Opening hours
        </h2>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 border-b gap-8">
        {park.operatingHours.length === 0 && (
          <div className="mb-8">
            <p className="font-serif leading-relaxed mb-4">
              No operating hours information available. Please check out the
              parks webpage for more information.{" "}
            </p>
            <a
              className="flex items-center gap-1 font-bold font-serif 
              hover:underline underline-offset-2"
              href={park.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Parks webpage (opens in a new tab)"
            >
              Visit park webpage{" "}
              <MdOpenInNew aria-hidden="true" className="text-lg" />
            </a>
          </div>
        )}

        {park.operatingHours.length > 0 &&
          park.operatingHours.map((hour) => (
            <div key={hour.name} className="max-w-md">
              <h3 className="text-lg font-serif font-bold mb-2">{hour.name}</h3>
              <p className="font-serif">{hour.description}</p>
              <dl className="mb-8 mt-4 font-serif">
                {weekdayOrder.map((day) => (
                  <div key={day}>
                    <dt className="inline font-bold">
                      {day.charAt(0).toUpperCase() + day.slice(1)}:
                    </dt>{" "}
                    <dd className="inline">{hour.standardHours[day]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
      </div>
    </section>
  );
};

export default OpeningHoursSection;
