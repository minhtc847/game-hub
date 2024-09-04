import { useEffect, useState } from "react";
import apiClient from "@/app/service/api-client";
import axios from "axios";

interface Game {
  id: number;
  name: string;
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

  useEffect(() => {
    const source = axios.CancelToken.source();
    apiClient
      .get<FetchGamesResponse>("/games", {
        cancelToken: source.token,
      })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (axios.isCancel(err)) return; //err instanceof CanceledError
        setError(err.message);
        console.log(err); //
      });
    return source.cancel;
  }, []);
  return { games, error };
};

export default useGame;
