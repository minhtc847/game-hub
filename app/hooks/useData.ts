import { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "@/app/service/api-client";
interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    setIsLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, {
        cancelToken: source.token,
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        if (axios.isCancel(err)) return; //err instanceof CanceledError
        setError(err.message);
        console.log(err); //
        setIsLoading(false);
      });
    return source.cancel;
  }, []);
  return { data, error, isLoading };
};
export default useData;
