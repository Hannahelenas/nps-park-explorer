import { useParkContext } from "../hooks/useParkContext";
import ParkCard from "./cards/ParkCard";

const ParkList = () => {
  const { parks, loading, error } = useParkContext();

  if (loading) return <div>Loading parks...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <ul
      className="grid grid-cols-1 sm:grid-cols-2 gap-1 lg:gap-6 sm:gap-1 
          max-w-6xl mx-auto"
    >
      {parks.map((park) => (
        <li key={park.id}>
          <ParkCard park={park} />
        </li>
      ))}
    </ul>
  );
};

export default ParkList;
