import { FunctionComponent, ReactNode } from "react";
import { Card } from "../Card/Card";
import classNames from "classnames";
import styles from "./Modal.module.css";
import { Icon } from "../Icon";
import { createPortal } from "react-dom";

interface ModalProps {
  title?: string;
  close?: () => void;
  children?: ReactNode;
}

const ModalComponent: FunctionComponent<ModalProps> = ({
  title,
  close,
  children,
}): ReactNode => {
  return (
    <div className={styles.wrapper} onClick={() => close?.()}>
      <Card
        className={classNames("padding-md", styles.modal)}
        onClick={(event) => event.stopPropagation()}
      >
        <div className={styles.titleGroup}>
          {Boolean(title) && <h3>{title}</h3>}
          {Boolean(close) && (
            <Icon.Close
              className="margin-left cursor-pointer"
              width={12}
              height={12}
              onClick={() => close?.()}
            />
          )}
        </div>
        {children}
      </Card>
    </div>
  );
};

export const Modal: FunctionComponent<ModalProps> = (props): ReactNode =>
  createPortal(<ModalComponent {...props} />, document.body);
