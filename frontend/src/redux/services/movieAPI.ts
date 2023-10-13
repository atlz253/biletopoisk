import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Film {
    id: string,
    title: string,
    description: string,
    director: string,
    genre: string,
    posterUrl: string,
    rating: number,
    releaseDate: number,
    reviewIds: string[]
};

export interface Cinema {
    id: string,
    name: string,
    movieIds: string[]
}

export interface Review {
    id: string,
    name: string,
    text: string,
    rating: number
}

export const movieApi = createApi({
    reducerPath: "movieApi",
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api" }),
    endpoints: builder => ({
        getMovieReviews: builder.query<Review[], string>({ query: (movieId) => `reviews?movieId=${movieId}` })
    })
});

export const { useGetMovieReviewsQuery } = movieApi;