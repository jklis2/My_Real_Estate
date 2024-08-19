import { ReactChild, ReactNode } from 'react';

interface ButtonProps {
  children: ReactChild | ReactNode;
  variant?: 'dark' | 'light';
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
export default function Button({ children, variant, className, onClick }: ButtonProps) {
  return (
    <button className={`${variant === 'dark' ? 'bg-white' : 'bg-slate-300'} ${className} py-2 px-6 rounded-full`} onClick={onClick}>
      {children}
    </button>
  );
}
