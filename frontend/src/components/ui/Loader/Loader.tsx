import { FunctionComponent, ReactNode } from "react";
import styles from "./Loader.module.css";

export const Loader: FunctionComponent = (): ReactNode => {
  return (
    <div className={styles.showbox}>
      <div className={styles.loader}>
        <svg className={styles.circular} viewBox="25 25 50 50">
          <circle
            className={styles.path}
            cx="50"
            cy="50"
            r="20"
            fill="none"
            strokeWidth="2"
            strokeMiterlimit="10"
          />
        </svg>
      </div>
    </div>
  );
};
