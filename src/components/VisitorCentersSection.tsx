import { useEffect, useState } from "react";
import { useVisitorCenterContext } from "../hooks/useVisitorCenterContext";
import type { VisitorCenter } from "../types/VisitorCenter";
import VisitorCenterCard from "./cards/VisitorCenterCard";

interface VisitorCentersSectionProps {
  parkCode: string;
}

const VisitorCentersSection = ({ parkCode }: VisitorCentersSectionProps) => {
  const { getVisitorCentersByPark } = useVisitorCenterContext();
  const [visitorCenters, setVisitorCenters] = useState<VisitorCenter[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadVisitorCenters = async () => {
      setLoading(true);
      try {
        const data = await getVisitorCentersByPark(parkCode);
        setVisitorCenters(data);
        setError(null);
      } catch (err: unknown) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    loadVisitorCenters();
  }, [parkCode, getVisitorCentersByPark]);

  if (loading) return <p>Loading park visitor centers...</p>;
  if (error) return <p>Error: {error}</p>;
  if (visitorCenters.length === 0)
    return <p>No visitor centers to show for this park.</p>;

  return (
    <section className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-10 xl:px-5 py-5">
      <h2
        className="text-2xl md:text-4xl font-black tracking-tighter mb-6 
      mt-6"
      >
        Visitor Centers
      </h2>
      <ul className="grid grid-cols-1 gap-1 border-b">
        {visitorCenters.map((vc) => (
          <VisitorCenterCard key={vc.id} vc={vc} />
        ))}
      </ul>
    </section>
  );
};

export default VisitorCentersSection;
