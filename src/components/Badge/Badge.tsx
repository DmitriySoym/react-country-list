import { ReactNode } from "react";
import { BadgeLabel, Color } from "../../types";

interface IProps {
  classColor: Color;
  label: BadgeLabel;
  value: number;
}

export const Badge = ({ classColor, label, value }: IProps) => {
  return (
    <div className={`badge bg-${classColor}`}>
      {label}: {value}
    </div>
  );
};
