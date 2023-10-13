import { sfPro } from "@/app/fonts";
import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";
import styles from "./Label.module.css";

interface LabelProps {
    className?: string,
    children?: ReactNode
}

export const Label: FunctionComponent<LabelProps> = ({ children, className }): ReactNode => {
    return (
        <label className={classNames(sfPro.className, styles.label, className)}>
            {children}
        </label>
    )
};