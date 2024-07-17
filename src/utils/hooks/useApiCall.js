import { useCallback, useState } from "react";
import axios from "axios";
const useApiCall = (baseURL) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axios.get(baseURL);
      setData(response.data);
    } catch (error) {
      setError(error);
      console.error("Fetch Data Error:", error);
    } finally {
      setLoading(false);
    }
  }, [baseURL]);

  const postData = useCallback(async (formData) => {
    setLoading(true);
    try {
      const response = await axios.post(baseURL, formData);
      setData((prevState) => [...prevState, response.data]);
    } catch (error) {
      setError(error);
      console.error("Post Data Error : ", error);
    } finally {
      setLoading(false);
    }
  });

  return {
    data,
    loading,
    error,
    fetchData,
    postData,
  };
};
export default useApiCall;
