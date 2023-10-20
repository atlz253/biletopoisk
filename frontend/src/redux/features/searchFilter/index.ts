import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export const initialState = {
  title: "",
  genre: "placeholder",
  cinema: "placeholder",
};

const searchFilterSlice = createSlice({
  name: "searchFilter",
  initialState,
  reducers: {
    setTitle: (state, { payload }: PayloadAction<string>): void => {
      state.title = payload;
    },
    setGenre: (state, { payload }: PayloadAction<string>): void => {
      state.genre = payload;
    },
    setCinema: (state, { payload }: PayloadAction<string>): void => {
      state.cinema = payload;
    },
  },
});

export const searchFilterReducer = searchFilterSlice.reducer;
export const searchFilterActions = searchFilterSlice.actions;
