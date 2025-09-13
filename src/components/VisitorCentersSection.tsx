import { useEffect, useState } from "react";
import { useVisitorCenterContext } from "../hooks/useVisitorCenterContext";
import type { VisitorCenter } from "../types/VisitorCenter";
import OpenToday from "../components/OpenToday";

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
    <section className="max-w-6xl mx-auto px-5 sm:px-10 lg:px-5 py-5">
      <h2
        className="text-2xl md:text-4xl font-black tracking-tighter mb-6 
      mt-6"
      >
        Visitor Centers
      </h2>
      <ul className="grid grid-cols-1 gap-6">
        {visitorCenters.map((vc) => (
          <li key={vc.id} className="rounded-2xl p-6 bg-white">
            <h3 className="text-2xl mb-2 font-black tracking-tighter">
              {vc.name}
            </h3>
            <p className="text-md leading-relaxed mb-2">{vc.description}</p>
            <div className="flex justify-between items-center mt-2">
              {/* Open today info */}
              <OpenToday operatingHours={vc.operatingHours} />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default VisitorCentersSection;
