"use client";

import { FunctionComponent, ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "./store";

interface StoreProviderProps {
    children?: ReactNode
};

export const StoreProvider: FunctionComponent<StoreProviderProps> = ({ children }): ReactNode => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}