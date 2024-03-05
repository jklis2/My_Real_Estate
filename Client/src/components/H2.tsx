import { ReactChild } from "react";

interface H2Props {
  children: ReactChild;
  className?: string;
}
export default function H2({ children, className }: H2Props) {
  return (
    <h2 className={`${className || ""} sm:text-3xl text-4xl font-bold mb-12 text-neutral-700`}>
      {children}
    </h2>
  );
}
