import { FunctionComponent, ReactNode } from "react";
import { Card } from "../ui/Card/Card";
import classNames from "classnames";
import styles from "./Review.module.css";
import { Placeholder } from "../ui/Placeholder/Placeholder";
import { Review as IReview } from "@/redux/services/movieAPI";

interface ReviewProps {
    review: IReview
}

export const Review: FunctionComponent<ReviewProps> = ({ review }): ReactNode => {
    return (
        <Card className={classNames("padding-md", styles.feedback)}>
            <Placeholder />
            <div className="margin-left width-100">
                <div className={styles.titleGroup}>
                    <h3>{review.name}</h3>
                    <div className={classNames("font-size-xl", "font-weight-500")}>Оценка: <b>{review.rating}</b></div>
                </div>
                <p className="margin-top-sm">{review.text}</p>
            </div>
        </Card>
    )
};