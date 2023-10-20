import { CSSProperties, MouseEventHandler, ReactNode, forwardRef } from "react";
import styles from "./Card.module.css";
import classNames from "classnames";

interface CardProps {
  className?: string;
  children?: ReactNode;
  style?: CSSProperties;
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  function CardComponent({ className, children, ...props }, ref): ReactNode {
    return (
      <div
        className={classNames("border-radius-md", styles.card, className)}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  },
);
