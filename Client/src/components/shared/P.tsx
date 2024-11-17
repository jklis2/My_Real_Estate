import { ReactChild, ReactNode } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext.ts';

interface PProps {
  children: ReactChild | ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function P({ children, onClick, className }: PProps) {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;
  const { themeColors } = themeContext;

  return (
    <p onClick={onClick} className={`${className || ''} text-sm md:text-base ${themeColors.textColor}`}>
      {children}
    </p>
  );
}
