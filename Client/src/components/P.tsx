import { ReactChild, ReactNode } from "react";

interface PProps {
  children: ReactChild | ReactNode;
  className?: string
}
export default function P({ children, className }: PProps) {
  return <p className={`${className} text-base text-neutral-700`}>{children}</p>;
}
