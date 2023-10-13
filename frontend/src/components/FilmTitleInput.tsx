"use client";

import { searchFilterActions } from "@/redux/features/searchFilter";
import { FunctionComponent, ReactNode } from "react";
import { Input } from "./ui/Input";
import { Label } from "./ui/Label/Label";
import { selectTitle } from "@/redux/features/searchFilter/selector";
import { useAppDispatch } from "@/redux/store";
import { useSelector } from "react-redux";

interface FilmTitleInputProps {
    className?: string
}

export const FilmTitleInput: FunctionComponent<FilmTitleInputProps> = ({ className }): ReactNode => {
    const title = useSelector(selectTitle);
    const dispatch = useAppDispatch();

    return (
        <div className={className}>
            <Label>Название</Label>
            <Input
                placeholder="Введите название"
                value={title}
                setValue={(value: string) => dispatch(searchFilterActions.setTitle(value))}
            />
        </div>
    );
};