import { ReactChild } from "react";

interface ButtonProps {
  children: ReactChild;
}
export default function Button({ children }: ButtonProps) {
  return <button className="bg-sky-200 py-2 px-6 rounded-full">{children}</button>;
}
