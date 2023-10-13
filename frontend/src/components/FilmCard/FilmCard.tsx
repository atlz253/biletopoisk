import { Film } from "@/redux/services/movieAPI";
import { FilmCardSmall } from "./FilmCardSmall";
import { FunctionComponent } from "react";
import { FilmCardBig } from "./FilmCardBig";

export interface FilmCardProps {
    film: Film,
    removable?: boolean
}

export const FilmCard: { [key in string]: FunctionComponent<FilmCardProps> } = {
    Small: FilmCardSmall,
    Big: FilmCardBig
};