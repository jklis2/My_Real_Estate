import { ReactChild } from 'react';

interface AuthProps {
  children: ReactChild;
}

export default function AuthPanel({ children }: AuthProps) {
  return (
    <main className="flex items-center justify-center min-h-screen">
      <div className="w-screen min-h-screen sm:min-h-fit sm:w-auto shadow-full rounded-lg p-16 sm:m-4">{children}</div>
    </main>
  );
}
