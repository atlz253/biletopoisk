import { Film } from "@/redux/services/movieAPI";

export const fetchFilm = async (movieId: string): Promise<Film> => {
    const res = await fetch(`http://localhost:3001/api/movie?movieId=${movieId}`);

    return await res.json();
}