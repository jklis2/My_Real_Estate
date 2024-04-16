import { ReactChild, ReactNode } from "react";

interface H2Props {
  children: ReactChild | JSX.Element | ReactNode;
  className?: string;
}
export default function H2({ children, className }: H2Props) {
  return (
    <h2 className={`${className || ""} sm:text-4xl text-2xl font-bold text-neutral-700`}>
      {children}
    </h2>
  );
}
