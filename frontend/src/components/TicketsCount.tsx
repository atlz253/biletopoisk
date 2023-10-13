"use client";

import { selectTicketsCount } from "@/redux/features/cart/selector";
import { FunctionComponent, ReactNode } from "react";
import { useSelector } from "react-redux";

interface TicketsCountProps {
    className?: string,
    hideOnZero?: boolean
}

export const TicketsCount: FunctionComponent<TicketsCountProps> = ({ className, hideOnZero }): ReactNode => {
    const count = useSelector(selectTicketsCount);

    if (hideOnZero && count === 0) {
        return (
            <></>
        );
    }

    return (
        <div
            className={className}
        >
            {count}
        </div>
    )
};