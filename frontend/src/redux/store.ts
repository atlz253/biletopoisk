import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./services/movieAPI";
import { useDispatch } from "react-redux";
import { searchFilterReducer } from "./features/searchFilter";
import { cartReducer } from "./features/cart";

export const store = configureStore({
  reducer: {
    [movieApi.reducerPath]: movieApi.reducer,
    searchFilter: searchFilterReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
