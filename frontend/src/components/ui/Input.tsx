import { sfPro } from "@/app/fonts";
import classNames from "classnames";
import { FunctionComponent, ReactNode } from "react";

interface InputProps {
    className?: string,
    placeholder?: string,
    value?: string,
    setValue?: (value: string) => void
}

export const Input: FunctionComponent<InputProps> = ({ className, placeholder, value, setValue }): ReactNode => {
    return (
        <input
            type="text"
            className={classNames("border-radius-md", sfPro.className, className)}
            placeholder={placeholder}
            value={value}
            onChange={event => setValue?.(event.target.value)}
        />
    )
};
