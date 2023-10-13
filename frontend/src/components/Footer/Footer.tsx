import { FunctionComponent } from "react";
import styles from "./Footer.module.css";
import Link from "next/link";
import classNames from "classnames";

export const Footer: FunctionComponent = () => {
    return (
        <footer className={styles.footer}>
            <Link className={classNames("font-size-xl", styles.link)} href="/faq">Вопросы-ответы</Link>
            <Link className={classNames("font-size-xl", styles.link)} href="/about">О нас</Link>
        </footer>
    )
};