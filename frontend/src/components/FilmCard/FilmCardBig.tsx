import { FunctionComponent, ReactNode } from "react";
import { Card } from "../ui/Card/Card";
import styles from "./FilmCardBig.module.css";
import classNames from "classnames";
import { TicketCounter } from "../TicketCounter/TicketCounter";
import Image from "next/image";
import { FilmCardProps } from "./FilmCard";
import { translate } from "@/utils/translate";

export const FilmCardBig: FunctionComponent<FilmCardProps> = ({ film }): ReactNode => {
    const filmDetailsStyle = classNames("font-size-xl", styles.detail);

    return (
        <Card className={classNames("padding-md", styles.film)}>
            <div className={styles.posterWrapper}>
                <Image
                    className={classNames("border-radius-md", styles.poster)}
                    src={film.posterUrl}
                    alt="Постер фильма"
                    width={400}
                    height={500}
                />
            </div>
            <div className={classNames("margin-left", styles.wrapper)}>
                <div className={styles.titleGroup}>
                    <h2>
                        {film.title}
                    </h2>
                    <TicketCounter film={film} />
                </div>
                <div className="margin-top">
                    <div className={filmDetailsStyle}><b>Жанр:</b> <span className="text-transform-capitalize">{translate(film.genre, "ru")}</span></div>
                    <div className={filmDetailsStyle}><b>Год выпуска:</b> {film.releaseDate}</div>
                    <div className={filmDetailsStyle}><b>Рейтинг:</b> {film.rating}</div>
                    <div className={filmDetailsStyle}><b>Режиссер:</b> {film.director}</div>
                </div>
                <div className="margin-top">
                    <div className={filmDetailsStyle}><b>Описание</b></div>
                    <p className="margin-top-sm">{film.description}</p>
                </div>
            </div>
        </Card>
    )
}