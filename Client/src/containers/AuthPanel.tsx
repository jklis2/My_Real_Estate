import { ReactChild } from "react";

interface AuthProps {
  children: ReactChild;
}

export default function AuthPanel({ children }: AuthProps) {
  return <div>{children}</div>;
}
