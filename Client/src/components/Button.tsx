import { ReactChild } from "react";

interface ButtonProps {
  children: ReactChild;
  variant?: "dark" | "light";
  className?: string;
}
export default function Button({ children, variant, className }: ButtonProps) {
  return (
    <button
      className={`${
        variant === "dark" ? "bg-white" : "bg-slate-300"
      } ${className} py-2 px-6 rounded-full`}
    >
      {children}
    </button>
  );
}
