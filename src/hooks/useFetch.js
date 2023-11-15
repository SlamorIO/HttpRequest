import { useEffect, useState } from "react";

export function useFetch(fetchFunction, defaultValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(defaultValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        const fetchedData = await fetchFunction();
        setData(fetchedData);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch data" });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFunction]);

  return {
    isFetching,
    data,
    setData,
    error,
  };
}
