import { fetchFilms } from "./fetchFilms";

export const fetchGenres = async (): Promise<string[]> => {
  const films = await fetchFilms();

  const result: string[] = [];

  films.forEach(({ genre }) => {
    if (result.indexOf(genre) === -1) {
      result.push(genre);
    }
  });

  return result;
};
