"use client";

import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import { Icon } from "../ui/Icon";
import Link from "next/link";
import { TicketsCount } from "../TicketsCount";
import classNames from "classnames";
import { useSelector } from "react-redux";
import { selectCinemaId } from "@/redux/features/searchFilter/selector";

export const Header: FunctionComponent = () => {
  const cinemaId = useSelector(selectCinemaId);

  return (
    <header className={styles.header}>
      <Link
        href={"/" + (cinemaId === "placeholder" ? "" : `?cinemaId=${cinemaId}`)}
      >
        <h1 className={styles.title}>Билетопоиск</h1>
      </Link>
      <Link href="/cart" className={styles.cart}>
        <TicketsCount
          className={classNames("border-radius-md", styles.count)}
          hideOnZero={true}
        />
        <Icon.Basket className={styles.basket} width={28} height={28} />
      </Link>
    </header>
  );
};
