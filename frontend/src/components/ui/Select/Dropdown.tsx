import { FunctionComponent, ReactNode, forwardRef } from "react";
import styles from "./Dropdown.module.css";
import classNames from "classnames";
import { Option } from "./Select";
import { Card } from "../Card/Card";
import { sfPro } from "@/app/fonts";

interface OptionComponentProps extends Option {
    onItemClick?: (value: string) => void,
    className?: string
}

interface DropdownProps {
    options?: Option[],
    onItemClick?: (value: string) => void,
    position?: { x: number, y: number }
};

const OptionComponent: FunctionComponent<OptionComponentProps> = ({ onItemClick, text, value, className }): ReactNode => {
    return (
        <div className={classNames(styles.item, className)} onClick={() => onItemClick?.(value)}>
            {text}
        </div>
    );
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(function DropdownComponent(
    { onItemClick, options = [], position = { x: 0, y: 0 } }, ref
): ReactNode {
    return (
        <Card className={classNames(sfPro.className, styles.dropdown)} style={{ left: position.x, top: position.y }} ref={ref}>
            <OptionComponent onItemClick={onItemClick} value="placeholder" text="Не выбран" />
            {options.map(({ text, value }): ReactNode => <OptionComponent key={value} onItemClick={onItemClick} value={value} text={text} />)}
        </Card>
    );
});