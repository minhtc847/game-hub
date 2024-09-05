import { useEffect, useState } from "react";
import apiClient from "@/app/service/api-client";
import axios from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGamesResponse {
  count: number;
  // next: string | null;
  // previous: string | null;
  results: Game[];
}
const useGame = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const source = axios.CancelToken.source();
    setIsLoading(true);
    apiClient
      .get<FetchGamesResponse>("/games", {
        cancelToken: source.token,
      })
      .then((res) => {
        setGames(res.data.results);
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
  return { games, error, isLoading };
};

export default useGame;
