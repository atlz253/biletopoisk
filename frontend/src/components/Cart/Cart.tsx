import { selectTickets } from "@/redux/features/cart/selector";
import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";
import { useSelector } from "react-redux";
import { FilmCard } from "../FilmCard/FilmCard";
import { TicketsCount } from "../TicketsCount";
import { Card } from "../ui/Card/Card";
import styles from "./Cart.module.css";

export const Cart: FunctionComponent = (): ReactNode => {
  const films = useSelector(selectTickets);

  // Тут должен быть внешний вид пустой корзины, но его так и не добавили в figma
  if (films.length === 0) {
    return (
      <main>
        <h2 className="text-align-center">Ваша корзина пока пустая</h2>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div>
        {films.map((film) => (
          <FilmCard.Small key={film.id} film={film} removable={true} />
        ))}
      </div>
      <Card className={classNames("padding-md", "margin-top", styles.total)}>
        <h3>Итого билетов:</h3>
        <TicketsCount className={styles.count} />
      </Card>
    </main>
  );
};
