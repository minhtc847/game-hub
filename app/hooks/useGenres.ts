import { useEffect, useState } from "react";
import axios from "axios";
import apiClient from "@/app/service/api-client";
interface Genre {
  id: number;
  name: string;
  slug: string;
}
interface FetchGenresResponse {
  count: number;
  results: Genre[];
}
const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    setIsLoading(true);
    apiClient
      .get<FetchGenresResponse>("/genres", {
        cancelToken: source.token,
      })
      .then((res) => {
        setGenres(res.data.results);
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
  return { genres, error, isLoading };
};
export default useGenres;
