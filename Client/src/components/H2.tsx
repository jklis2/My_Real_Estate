import { ReactChild } from "react";

interface H2Props {
  children: ReactChild;
  className?: string;
}
export default function H2({ children, className }: H2Props) {
  return (
    <h2 className={`${className} text-4xl font-bold mb-12 text-neutral-700`}>
      {children}
    </h2>
  );
}
