import { FunctionComponent, ReactNode } from "react";
import styles from "./Placeholder.module.css";
import classNames from "classnames";
import { Icon } from "../Icon";

export const Placeholder: FunctionComponent = (): ReactNode => {
  return (
    <div className={classNames("border-radius-md", styles.placeholder)}>
      <Icon.Photo width={24} height={24} />
    </div>
  );
};
