import { FunctionComponent, ReactNode } from "react";
import styles from "./ErrorNotification.module.css";
import classNames from "classnames";

export const ErrorNotification: FunctionComponent = (): ReactNode => {
  return (
    <div className={classNames("margin-top", styles.wrapper)}>
      <div className={styles.emoji}>😱</div>
      <h2 className="margin-top">Что-то сломалось...</h2>
      <p className="margin-top-sm">Попробуйте перезагрузить страницу</p>
    </div>
  );
};
