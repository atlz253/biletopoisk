"use client";

import { Film } from "@/redux/services/movieAPI";
import { FunctionComponent, ReactNode, useMemo } from "react";
import { FilmCard } from "./FilmCard/FilmCard";
import { useSelector } from "react-redux";
import {
  selectGenre,
  selectTitle,
} from "@/redux/features/searchFilter/selector";

interface FilmsListProps {
  films: Film[];
}

export const FilmsList: FunctionComponent<FilmsListProps> = ({
  films,
}): ReactNode => {
  const filterTitle = useSelector(selectTitle);
  const genre = useSelector(selectGenre);

  const filteredFilms = useMemo(
    () =>
      films.filter((film) => {
        if (genre !== "placeholder" && film.genre !== genre) {
          return false;
        }

        return film.title.toLowerCase().indexOf(filterTitle.toLowerCase()) >= 0;
      }),
    [films, filterTitle, genre],
  );

  return (
    <div>
      {filteredFilms.map((film) => (
        <FilmCard.Small key={film.id} film={film} />
      ))}
    </div>
  );
};
