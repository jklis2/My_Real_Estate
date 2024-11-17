import { ReactChild, ReactNode, useContext } from 'react';
import { ThemeContext } from 'contexts/ThemeContext.ts';

interface H3Props {
  children: ReactChild | ReactNode;
  className?: string;
}
export default function H3({ children, className }: H3Props) {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) return null;

  const { themeColors } = themeContext;

  return <h3 className={`${className || ''} text-xl md:text-2xl font-bold ${themeColors.textColor}`}>{children}</h3>;
}
