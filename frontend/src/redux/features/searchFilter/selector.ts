import { RootState } from "@/redux/store";

export const selectTitle = (state: RootState): string => state.searchFilter.title;

export const selectGenre = (state: RootState): string => state.searchFilter.genre;

export const selectCinemaId = (state: RootState): string => state.searchFilter.cinema;