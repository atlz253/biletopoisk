import { FunctionComponent, ReactNode } from "react";
import { FilmCardProps } from "./FilmCard";
import styles from "./FilmCardSmall.module.css";
import classNames from "classnames";
import Link from "next/link";
import { TicketCounter } from "../TicketCounter/TicketCounter";
import { Card } from "../ui/Card/Card";
import Image from "next/image";
import { translate } from "@/utils/translate";
import { Icon } from "../ui/Icon";
import { useAppDispatch } from "@/redux/store";
import { cartActions } from "@/redux/features/cart";
import { DeleteTicketModal } from "../DeleteTicketModal/DeleteTicketModal";
import { useModal } from "@/hooks/useModal";

export const FilmCardSmall: FunctionComponent<FilmCardProps> = ({
  film,
  removable,
}): ReactNode => {
  const dispatch = useAppDispatch();
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <>
      <Card className={classNames("padding-md", styles.card)}>
        <div className={styles.posterWrapper}>
          <Image
            className={classNames("border-radius-md", styles.poster)}
            src={film.posterUrl}
            alt="Постер фильма"
            width={100}
            height={120}
          />
        </div>
        <div className={classNames("margin-left", styles.content)}>
          <div>
            <h3 className={styles.title}>
              <Link href={`/films/${film.id}`}>{film.title}</Link>
            </h3>
            <div className={styles.genre}>
              <i className="text-transform-capitalize font-weight-500">
                {translate(film.genre, "ru")}
              </i>
            </div>
          </div>
          <div className={styles.group}>
            <TicketCounter film={film} approveLastTicket={removable} />
            {removable && (
              <Icon.Close
                className="margin-left cursor-pointer"
                width={12}
                height={12}
                onClick={openModal}
              />
            )}
          </div>
        </div>
      </Card>
      {isModalOpen && (
        <DeleteTicketModal
          close={closeModal}
          onApprove={() => dispatch(cartActions.deleteTicket(film))}
        />
      )}
    </>
  );
};
