"use client";

import { useGetMovieReviewsQuery } from "@/redux/services/movieAPI";
import { FunctionComponent, ReactNode } from "react";
import { Loader } from "./ui/Loader/Loader";
import { Review } from "./Review/Review";
import { ErrorNotification } from "./ui/ErrorNotification/ErrorNotification";

interface FilmReviewsProps {
    filmId: string,
    className?: string
}

export const FilmReviews: FunctionComponent<FilmReviewsProps> = ({ filmId, className }): ReactNode => {
    const { data, isLoading, error } = useGetMovieReviewsQuery(filmId);

    if (isLoading) {
        return <Loader />;
    }

    if (!data || error) {
        return <ErrorNotification />;
    }

    return (
        <div className={className}>
            {data.map(review => <Review key={review.id} review={review} />)}
        </div>
    )
};