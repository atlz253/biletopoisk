"use client";

import { FunctionComponent, ReactNode } from "react";
import { Cart } from "@/components/Cart/Cart";
import { StoreProvider } from "@/redux/StoreProvider";

const CartPage: FunctionComponent = (): ReactNode => {
  return (
    <StoreProvider>
      <Cart />
    </StoreProvider>
  );
};

export default CartPage;
