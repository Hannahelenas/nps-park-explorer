import { Link } from "react-router-dom";
import { useParkContext } from "../hooks/useParkContext";

const ParkList = () => {
  const { parks, loading, error } = useParkContext();

  if (loading) return <div>Loading parks...</div>;
  if (error) return <div>Error: {error}</div>;

  parks.forEach((park) => {
    console.log(`${park.fullName} has ${park.activities.length} activities`);
  });

  return (
    <>
      <ul className="mt-20">
        {parks.map((park) => (
          <li key={park.id}>
            <Link
              to={`/parks/${park.parkCode}`}
              aria-label={`Go to the page for ${park.name}`}
            >
              <h1 className="font-bold">{park.fullName}</h1>
              {park.activities.length > 0 && (
                <p>
                  {park.fullName} has {park.activities.length} activities
                </p>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ParkList;
