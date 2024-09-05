import useData from "@/app/hooks/useData";
export interface Genre {
  id: number;
  name: string;
  slug: string;
}
const useGenres = () => useData<Genre>("/genres");
export default useGenres;
