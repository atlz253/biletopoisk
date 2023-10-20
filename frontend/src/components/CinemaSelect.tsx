"use client";

import { FunctionComponent, ReactNode, useMemo } from "react";
import { Label } from "./ui/Label/Label";
import { Option, Select } from "./ui/Select/Select";
import { useSelector } from "react-redux";
import { selectCinemaId } from "@/redux/features/searchFilter/selector";
import { useAppDispatch } from "@/redux/store";
import { searchFilterActions } from "@/redux/features/searchFilter";
import { useRouter } from "next/navigation";

interface CinemaSelectProps {
  className?: string;
  options: Option[];
}

export const CinemaSelect: FunctionComponent<CinemaSelectProps> = ({
  className,
  options,
}): ReactNode => {
  const cinemaId = useSelector(selectCinemaId);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const setValue = (value: string) => {
    dispatch(searchFilterActions.setCinema(value));

    router.push(
      "http://localhost:3000" +
        (value === "placeholder" ? "" : `?cinemaId=${value}`),
    );
  };

  return (
    <div className={className}>
      <Label>Кинотеатр</Label>
      <Select
        placeholder="Выберите кинотеатр"
        options={options}
        value={cinemaId}
        setValue={setValue}
      />
    </div>
  );
};
