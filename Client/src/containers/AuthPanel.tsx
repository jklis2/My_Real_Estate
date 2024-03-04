import { ReactChild } from "react";

interface AuthProps {
  children: ReactChild;
}

export default function AuthPanel({ children }: AuthProps) {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="shadow-full rounded-lg p-16 m-4">{children}</div>
    </main>
  );
}
