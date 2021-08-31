import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setData(data);
    })
    .catch((error) => {
      console.error(1, error);
      setError(error);
    })
    .finally(() => {
      setLoading(false);
    });
  }, [])

  return [data, loading, error];
}