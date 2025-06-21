import { useParams } from "react-router-dom";
import { useParkData } from "../hooks/useParkData";

const ParkOverview = () => {
  const { parkCode } = useParams<{ parkCode: string }>();
  const { park, loading, error } = useParkData(parkCode);

  if (loading) return <div>Loading park...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!park) return <div>No park found.</div>;

  return (
    <div className="mt-10">
      <h1 className="text-2xl font-bold">{park.fullName}</h1>
      <p className="mt-2">{park.description}</p>

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
    </div>
  );
};

export default ParkOverview;
