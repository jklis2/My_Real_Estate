import { ReactChild } from 'react';

interface H3Props {
  children: ReactChild;
  className?: string;
}
export default function H3({ children, className }: H3Props) {
  return <h3 className={`${className || ''} text-xl md:text-2xl font-bold text-neutral-700`}>{children}</h3>;
}
