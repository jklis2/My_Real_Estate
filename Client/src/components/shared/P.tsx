import { ReactChild, ReactNode } from "react";

interface PProps {
  children: ReactChild | ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function P({ children, onClick, className }: PProps) {
  return (
    <p
      onClick={onClick}
      className={`${className || ""} text-sm md:text-base text-neutral-700`}
    >
      {children}
    </p>
  );
}
