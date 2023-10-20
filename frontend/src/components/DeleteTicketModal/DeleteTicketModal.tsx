import { FunctionComponent, ReactNode } from "react";
import { Modal } from "../ui/Modal/Modal";
import { Button } from "../ui/Button/Button";
import styles from "./DeleteTicketModal.module.css";
import classNames from "classnames";

interface DeleteTicketModalProps {
  close?: () => void;
  onApprove?: () => void;
}

export const DeleteTicketModal: FunctionComponent<DeleteTicketModalProps> = ({
  close,
  onApprove,
}): ReactNode => {
  const buttonStyle = classNames("border-radius-md", styles.button);

  const onApproveButtonClick = () => {
    onApprove?.();

    close?.();
  };

  return (
    <Modal title="Удаление билета" close={close}>
      <p className="margin-top">Вы уверены, что хотите удалить билет?</p>
      <div className="margin-top">
        <Button className={buttonStyle} onClick={onApproveButtonClick}>
          Да
        </Button>
        <Button
          className={classNames(buttonStyle, styles.marginLeft)}
          onClick={() => close?.()}
          outline
        >
          Нет
        </Button>
      </div>
    </Modal>
  );
};
