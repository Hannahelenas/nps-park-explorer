import { useParams } from "react-router-dom";
import { useParkData } from "../hooks/useParkData";
import { weekdayOrder } from "../types/Park";

const ParkOverview = () => {
  const { parkCode } = useParams<{ parkCode: string }>();
  const { park, loading, error } = useParkData(parkCode);

  if (loading) return <div>Loading park...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!park) return <div>No park found.</div>;

  return (
    <section className="mt-20">
      {/* Hero image */}
      <img
        src={park.images[0]?.url}
        alt={park.images[0]?.altText}
        className="w-full h-[40dvh] md:h-[60dvh] xl:h-[90dvh] object-cover"
      />
      <h1 className="text-2xl font-bold">{park.fullName}</h1>
      <p>{park.designation}</p>
      <p>{park.states}</p>
      <p className="mt-2">{park.description}</p>
      <p>{park.weatherInfo}</p>
      <p>{park.directionsInfo}</p>
      {/* Opening details */}

      {park.operatingHours.map((hour) => (
        <div key={hour.name} className="mt-4">
          <p className="italic">{hour.description}</p>
          <p className="font-bold">{hour.name}</p>
          <ul className="mt-2">
            {weekdayOrder.map((day) => (
              <li key={day}>
                <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
                {hour.standardHours[day]}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="mt-4 font-semibold">Activities</h2>
      <ul className="list-disc list-inside">
        {park.activities.map((act) => (
          <li key={act.id}>{act.name}</li>
        ))}
      </ul>
      <h2 className="mt-4 font-semibold">Topics</h2>
      <ul className="list-disc list-inside">
        {park.topics.map((topic) => (
          <li key={topic.id}>{topic.name}</li>
        ))}
      </ul>
      <h2 className="mt-4 font-semibold">Contact Details</h2>
      {/* Addresses */}
      <ul>
        {park.addresses.map((address) => (
          <li key={address.line1}>
            {address.line1} {address.line2} {address.line3} {address.postalCode}{" "}
            {address.city}, {address.stateCode},{address.countryCode},{" "}
            {address.type},
          </li>
        ))}
      </ul>
      <p>Email & Phone</p>
      {/* Phone numbers */}
      {park.contacts.phoneNumbers.length > 0 && (
        <ul className="list-disc list-inside">
          {park.contacts.phoneNumbers.map((phone, index) => (
            <li key={index}>
              {phone.type}:{" "}
              <a href={`tel:${phone.phoneNumber}`} className=" underline">
                {phone.phoneNumber}
              </a>
            </li>
          ))}
        </ul>
      )}
      {/* Email addresses */}
      {park.contacts.emailAddresses.length > 0 && (
        <ul className="list-disc list-inside mt-2">
          {park.contacts.emailAddresses.map((email, index) => (
            <li key={index}>
              <a href={`mailto:${email.emailAddress}`} className=" underline">
                {email.emailAddress}
              </a>
            </li>
          ))}
        </ul>
      )}
      {park.images.length > 0 && (
        <ul>
          {park.images.map((image) => (
            <li key={image.title}>
              <img src={image.url} alt={image.altText} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default ParkOverview;
