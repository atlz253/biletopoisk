import { RootState } from "@/redux/store";
import { Ticket } from ".";
import { createSelector } from "@reduxjs/toolkit";

export const selectTicketCount = (state: RootState, filmId: string): number =>
  state.cart[filmId]?.count ?? 0;

export const selectTicketsCount = (state: RootState): number => {
  let count = 0;

  for (const key in state.cart) {
    count += state.cart[key].count;
  }

  return count;
};

export const selectTickets = createSelector(
  (state: RootState) => state.cart,
  (cart): Ticket[] => {
    const result: Ticket[] = [];

    for (const key in cart) {
      result.push(cart[key]);
    }

    return result;
  },
);
