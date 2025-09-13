import { useEffect, useState, useCallback, type ReactNode } from "react";
import { VisitorCenterContext } from "./VisitorCenterContext";
import {
  fetchVisitorCenters,
  fetchVisitorCentersByPark,
} from "../../api/visitorCenters";
import type { VisitorCenter } from "../../types/VisitorCenter";

export const VisitorCenterProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [visitorCenters, setVisitorCenters] = useState<VisitorCenter[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const loadVisitorCenters = async () => {
    setLoading(true);
    try {
      const data = await fetchVisitorCenters();
      setVisitorCenters(data);
      setError(null);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const getVisitorCentersByPark = useCallback(
    async (parkCode: string): Promise<VisitorCenter[]> => {
      try {
        return await fetchVisitorCentersByPark(parkCode);
      } catch (err) {
        console.error(err);
        return [];
      }
    },
    []
  );

  useEffect(() => {
    loadVisitorCenters();
  }, []);

  return (
    <VisitorCenterContext.Provider
      value={{
        visitorCenters,
        error,
        loading,
        refetch: loadVisitorCenters,
        getVisitorCentersByPark,
      }}
    >
      {children}
    </VisitorCenterContext.Provider>
  );
};
