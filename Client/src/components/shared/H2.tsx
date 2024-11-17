import { ReactChild, ReactNode, useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext.ts';

interface H2Props {
  children: ReactChild | ReactNode;
  className?: string;
}
export default function H2({ children, className }: H2Props) {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { themeColors } = themeContext;

  return <h2 className={`${className || ''} sm:text-4xl text-2xl font-bold ${themeColors.textColor}`}>{children}</h2>;
}
