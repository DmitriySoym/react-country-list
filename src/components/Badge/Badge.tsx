import { ReactNode } from "react";
import { BadgeLabel, Color } from "../../types";

interface IProps {
  classColor: Color;
  label: BadgeLabel;
  value: number;
}

export const Badge = ({ classColor, label, value }: IProps) => {
  return (
    <span className={`badge text-bg-${classColor} rounded-pill p-3 fs-6`}>
      {label}: {value}
    </span>
  );
};
