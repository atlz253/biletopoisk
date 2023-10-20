import { Film } from "@/redux/services/movieAPI";

export const fetchFilms = async (cinemaId?: string): Promise<Film[]> => {
  const res = await fetch(
    "http://localhost:3001/api/movies" +
      (cinemaId ? `?cinemaId=${cinemaId}` : ""),
  );

  return await res.json();
};
