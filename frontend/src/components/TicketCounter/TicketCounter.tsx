"use client";

import { FunctionComponent, ReactNode } from "react";
import { Button } from "../ui/Button/Button";
import { Icon } from "../ui/Icon";
import styles from "./TicketCounter.module.css";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectTicketCount } from "@/redux/features/cart/selector";
import { RootState, useAppDispatch } from "@/redux/store";
import { cartActions } from "@/redux/features/cart";
import { useModal } from "@/hooks/useModal";
import { DeleteTicketModal } from "../DeleteTicketModal/DeleteTicketModal";
import { Film } from "@/redux/services/movieAPI";

interface TicketCounterProps {
    film: Film,
    approveLastTicket?: boolean
}

export const TicketCounter: FunctionComponent<TicketCounterProps> = ({ film, approveLastTicket }): ReactNode => {
    const count = useSelector((state: RootState) => selectTicketCount(state, film.id));
    const dispatch = useAppDispatch();
    const { isModalOpen, openModal, closeModal } = useModal();

    const onMinusClick = () => {
        if (approveLastTicket && count === 1) {
            openModal();

            return;
        }

        dispatch(cartActions.removeTicket(film));
    }

    return (
        <>
            <div className={styles.container}>
                <Button.Small
                    onClick={onMinusClick}
                    disabled={count === 0}
                >
                    <Icon.Minus
                        height={10}
                        width={10}
                    />
                </Button.Small>
                <div className={classNames(styles.marginLeft, styles.count)}>
                    {count}
                </div>
                <Button.Small
                    className={styles.marginLeft}
                    onClick={() => dispatch(cartActions.addTicket(film))}
                    disabled={count === 30}
                >
                    <Icon.Plus
                        height={10}
                        width={10}
                    />
                </Button.Small>
            </div>
            {
                isModalOpen &&
                <DeleteTicketModal
                    close={closeModal}
                    onApprove={() => dispatch(cartActions.removeTicket(film))}
                />
            }
        </>
    )
};