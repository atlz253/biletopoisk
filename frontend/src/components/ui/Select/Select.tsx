"use client";

import { sfPro } from "@/app/fonts";
import classNames from "classnames";
import {
  FunctionComponent,
  MouseEventHandler,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./Select.module.css";
import { Icon } from "../Icon";
import { createPortal } from "react-dom";
import { Dropdown } from "./Dropdown";

export interface Option {
  text: string;
  value: string;
}

interface SelectProps {
  placeholder?: string;
  options?: Option[];
  value?: string;
  setValue?: (value: string) => void;
}

export const Select: FunctionComponent<SelectProps> = ({
  placeholder,
  options = [],
  value,
  setValue,
}): ReactNode => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const selectRef = useRef<HTMLSelectElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const selectStyles = classNames(
    "border-radius-md",
    sfPro.className,
    styles.select,
    value === "placeholder" ? styles.placeholder : undefined,
  );

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const closeDropdown = (): void => {
      selectRef.current?.blur();

      setIsOpen(false);
    };

    const onMouseDown = (event: MouseEvent): void => {
      if (
        event.target instanceof Element &&
        (event.target === dropdownRef.current ||
          event.target === selectRef.current ||
          event.target.parentElement === dropdownRef.current)
      ) {
        return;
      }

      closeDropdown();
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("scroll", closeDropdown);
    window.addEventListener("blur", closeDropdown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("scroll", closeDropdown);
      window.removeEventListener("blur", closeDropdown);
    };
  }, [isOpen]);

  const onSelectClick: MouseEventHandler<HTMLSelectElement> = (event) => {
    event.preventDefault();

    selectRef.current?.focus();

    setIsOpen((value) => !value);
  };

  const onDropdownItemClick = (value: string): void => {
    setValue?.(value);

    setIsOpen(false);
  };

  const getDropdownPosition = (): { x: number; y: number } => {
    if (!selectRef.current) {
      return { x: 0, y: 0 };
    }

    const selectRect = selectRef.current.getBoundingClientRect();

    const MARGIN_TOP = 4;

    const x = selectRect.x;
    const y = selectRect.y + selectRect.height + window.scrollY + MARGIN_TOP;

    return { x, y };
  };

  return (
    <div className={styles.wrapper}>
      <select
        className={selectStyles}
        value={value ? value : undefined}
        onChange={(event) => setValue?.(event.target.value)}
        onMouseDown={onSelectClick}
        ref={selectRef}
      >
        {Boolean(placeholder) && (
          <option disabled value="placeholder">
            {placeholder}
          </option>
        )}
        {options.map(
          ({ text, value }): ReactNode => (
            <option key={value} value={value}>
              {text}
            </option>
          ),
        )}
      </select>
      <Icon.Arrow
        className={classNames(styles.arrow, isOpen ? styles.rotate : undefined)}
        width={20}
        height={20}
      />
      {isOpen &&
        createPortal(
          <Dropdown
            options={options}
            onItemClick={onDropdownItemClick}
            position={getDropdownPosition()}
            ref={dropdownRef}
          />,
          document.body,
        )}
    </div>
  );
};
