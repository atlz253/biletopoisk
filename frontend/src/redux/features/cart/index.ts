import { Film } from "@/redux/services/movieAPI";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface Ticket extends Film {
    count: number
};

export const initialState: { [key in string]: Ticket } = {};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addTicket: (state, { payload }: PayloadAction<Film>): void => {
            const filmId = payload.id;

            if (!state[filmId]) {
                state[filmId] = {
                    ...payload,
                    count: 1
                }

                return;
            }

            if (state[filmId].count === 30) {
                return;
            }

            state[filmId].count += 1;
        },
        removeTicket: (state, { payload }: PayloadAction<Film>): void => {
            const filmId = payload.id;

            if (!state[filmId]) {
                return;
            }

            if (state[filmId].count === 1) {
                delete state[filmId];

                return;
            }

            state[filmId].count -= 1;
        },
        deleteTicket: (state, { payload }: PayloadAction<Film>): void => {
            delete state[payload.id];
        }
    }
});

export const cartReducer = cartSlice.reducer;
export const cartActions = cartSlice.actions;