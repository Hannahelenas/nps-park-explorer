import { weekdayOrder, type Park } from "../types/Park";

interface OpeningHoursSectionProps {
  park: Park;
}

const OpeningHoursSection = ({ park }: OpeningHoursSectionProps) => {
  return (
    <section
      className="max-w-6xl px-5 mx-auto mt-5"
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
        {park.operatingHours.map((hour) => (
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
