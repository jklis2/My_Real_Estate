import { ReactChild } from "react";

interface ButtonProps {
  children: ReactChild;
}
export default function Button({ children }: ButtonProps) {
  return <button className="bg-slate-300 py-2 px-5 rounded-full">{children}</button>;
}
