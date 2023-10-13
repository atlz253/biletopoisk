"use client";

import { FunctionComponent, ReactNode } from "react";
import { Label } from "./ui/Label/Label";
import { Select } from "./ui/Select/Select";
import { selectGenre } from "@/redux/features/searchFilter/selector";
import { useSelector } from "react-redux";
import { Option } from "./ui/Select/Select";
import { useAppDispatch } from "@/redux/store";
import { searchFilterActions } from "@/redux/features/searchFilter";

interface GenreSelectProps {
    className?: string,
    options: Option[]
}

export const GenreSelect: FunctionComponent<GenreSelectProps> = ({ className, options }): ReactNode => {
    const genre = useSelector(selectGenre);
    const dispatch = useAppDispatch();

    return (
        <div className={className}>
            <Label>Жанр</Label>
            <Select
                placeholder="Выберите жанр"
                options={options}
                value={genre}
                setValue={(value: string) => dispatch(searchFilterActions.setGenre(value))}
            />
        </div>
    )
};
