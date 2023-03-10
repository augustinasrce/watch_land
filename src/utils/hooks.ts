import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Watch } from "watch-land-ts-client/dist/lib/watch";
/**
 *
 * @returns void
 */
export const useQuery = () => {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

type CloudWatchType = <Type>(watch: Watch) => { data: Type[]; loading: boolean; error: boolean };

export const useCloudWatch: CloudWatchType = <Type>(watch: Watch) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Type[]>([]);

  useEffect(() => {
    setLoading(true);
    watch
      .observe(data => {
        setData(data);
      })
      .done(() => {
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return { data, loading, error };
};
