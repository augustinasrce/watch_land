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

type CloudWatchType = <Type>(watch: Watch) => { data: Type[]; loading: Boolean; error: Boolean };

export const useCloudWatch: CloudWatchType = <Type>(watch: Watch) => {
  const [loading, setLoading] = useState<Boolean>(false);
  const [error, setError] = useState<Boolean>(false);
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
