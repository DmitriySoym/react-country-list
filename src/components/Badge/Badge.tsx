import { ReactNode } from "react";
import { BadgeLabel, Color } from "../../types";

interface IProps {
  classColor: Color;
  label: BadgeLabel;
  children: ReactNode;
}

export const Badge = ({ classColor, label, children }: IProps) => {
  return (
    <span className={`badge text-bg-${classColor} rounded-pill p-3 fs-6`}>
      {label} {children}
    </span>
  );
};
