import { ReactChild } from "react";

interface H2Props {
  children: ReactChild;
}
export default function H2({ children }: H2Props) {
  return <h2 className="text-4xl font-bold mb-12 text-neutral-700">{children}</h2>;
}
