"use client";

import { FunctionComponent, MouseEventHandler, ReactNode } from "react";
import styles from "./Button.module.css";
import classNames from "classnames";
import { inter } from "@/app/fonts";

type ButtonFunctionComponent = FunctionComponent<ButtonProps>;

interface Button extends ButtonFunctionComponent {
  Small: ButtonFunctionComponent;
}

interface ButtonProps {
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  outline?: boolean;
}

export const Button: Button = ({
  children,
  disabled,
  className,
  onClick,
  outline,
}): ReactNode => {
  const buttonStyle = classNames(
    inter.className,
    styles.button,
    outline ? styles.outline : undefined,
    className,
  );

  return (
    <button className={buttonStyle} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
};

Button.Small = function SmallButton({
  children,
  disabled,
  className,
  onClick,
  outline,
}): ReactNode {
  return (
    <Button
      className={classNames("border-radius-sm", styles.buttonSmall, className)}
      disabled={disabled}
      onClick={onClick}
      outline={outline}
    >
      {children}
    </Button>
  );
};
