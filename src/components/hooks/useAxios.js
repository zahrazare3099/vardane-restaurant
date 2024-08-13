import axios from "axios";
import { useEffect, useState } from "react";

const instance = axios.create({
  baseURL: "https://react-mini-projects-api.classbon.com",
});

const useAxios = (axiosParam) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const fetchData = async () => {
    const abortController = new AbortController();
    const signal = abortController;
    try {
      const response = await instance.request(axiosParam, { signal });
      setData(response.data);
      setError(null);
    } catch (error) {
      setError(error?.massage);
    } finally {
      setLoading(false);
    }
  };
  () => {
    // Cancel the request when the component unmounts
    abortController.abort();
  };
  useEffect(() => {
    fetchData();
  }, [axiosParam.url]);

  // axiosParam
  return { data, loading, error };
};

export default useAxios;
