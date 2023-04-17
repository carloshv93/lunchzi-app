import { useState, useEffect } from "react";

const useFetch = ({ url, id }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    let fetchUrl = url;
    if (id) fetchUrl = `${url}/${id}`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [url]);

  return { data, loading };
};

export default useFetch;
