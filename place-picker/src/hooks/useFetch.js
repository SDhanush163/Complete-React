import { useEffect, useState } from "react";

const useFetch = (fetchFn, initialValue) => {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [data, setData] = useState(initialValue);

  useEffect(() => {
    const fetchData = async () => {
      setIsFetching(true);
      try {
        const places = await fetchFn();
        setData(places);
      } catch (error) {
        setError({ message: error.message || " Failed to fetch data" });
      }
      setIsFetching(false);
    };

    fetchData();
  }, [fetchFn]);

  return { data, setData, error, isFetching };
};

export default useFetch;
