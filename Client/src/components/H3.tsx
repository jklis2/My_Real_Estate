import { ReactChild } from "react";

interface H3Props {
  children: ReactChild;
}
export default function H3({ children }: H3Props) {
  return <h3 className="text-3xl font-bold mb-8 text-neutral-700">{children}</h3>;
}
