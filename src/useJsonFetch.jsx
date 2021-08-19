import { useEffect, useState } from "react";

export default function useJsonFetch(url, opts = {}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    setLoading(true);
    fetch(url)
    .then((response) => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error('Something went wrong');
      }
    })
    .then((data) => {
      setData(data)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error)
      setError(error)
    })
  }, [])

  return [data, loading, error];
}