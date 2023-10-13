import { FunctionComponent } from "react";
import { Card } from "../ui/Card/Card";
import classNames from "classnames";
import styles from "./SearchFilterBar.module.css";
import { fetchGenres } from "@/fetches/fetchGenres";
import { sentenceCase } from "@/utils/sentenceCase";
import { translate } from "@/utils/translate";
import { GenreSelect } from "../GenreSelect";
import { FilmTitleInput } from "../FilmTitleInput";
import { CinemaSelect } from "../CinemaSelect";
import { fetchCinemas } from "@/fetches/fetchCinemas";

export const SearchFilterBar: FunctionComponent = async () => {
    const genres = await fetchGenres();
    const cinemas = await fetchCinemas();

    const genresSelectOptions = genres.map(genre => ({ value: genre, text: sentenceCase(translate(genre, "ru")) }));

    const cinemasSelectOptions = cinemas.map(cinema => ({ value: cinema.id, text: cinema.name }));

    return (
        <Card className={classNames("padding-md", styles.bar)}>
            <h4 className="white-space-nowrap">Фильтр поиска</h4>
            <FilmTitleInput className="margin-top" />
            <GenreSelect className="margin-top" options={genresSelectOptions} />
            <CinemaSelect className="margin-top" options={cinemasSelectOptions} />
        </Card>
    )
};