"use client";

import {
  Dispatch,
  FunctionComponent,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { Card } from "../Card/Card";
import styles from "./Accordion.module.css";
import classNames from "classnames";
import { Icon } from "../Icon";

interface AccordionProps {
  children?: ReactNode;
  className?: string;
}

interface AccordionGroupProps {
  title: string;
  children?: ReactNode;
}

interface Accordion extends FunctionComponent<AccordionProps> {
  Group: FunctionComponent<AccordionGroupProps>;
}

const AccordionContext = createContext<{
  active: string | null;
  setActive: Dispatch<SetStateAction<string | null>>;
}>({ active: null, setActive: () => undefined });

export const Accordion: Accordion = ({ children, className }): ReactNode => {
  const [active, setActive] = useState<string | null>(null);

  return (
    <AccordionContext.Provider value={{ active, setActive }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

Accordion.Group = function AccordionGroupComponent({
  title,
  children,
}): ReactNode {
  const { active, setActive } = useContext(AccordionContext);

  const onClick = () => {
    if (active === title) {
      setActive(null);

      return;
    }

    setActive(title);
  };

  return (
    <Card
      className={classNames(
        "padding-md",
        "cursor-pointer",
        "user-select-none",
        styles.group,
      )}
      onClick={onClick}
    >
      <div className={styles.titleGroup}>
        <div className={styles.title}>{title}</div>
        <Icon.ArrowPrimary // TODO: поменять цвет стрелки
          className={active === title ? styles.rotate : undefined}
          width={24}
          height={24}
        />
      </div>
      {active === title && <div className="margin-top-sm">{children}</div>}
    </Card>
  );
};
