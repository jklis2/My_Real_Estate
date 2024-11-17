import { LanguageContext, LanguageContextProps } from 'contexts/LanguageContext.ts';
import { ReactNode, useState } from 'react';

interface LanguageProviderProps {
  children: ReactNode;
}

export default function LanguageProvider({ children }: LanguageProviderProps) {
  const storedLanguage = localStorage.getItem('language') as 'en' | 'pl' | null;
  const [language, updateLanguage] = useState<'en' | 'pl'>(storedLanguage ?? 'en');

  const setLanguage = (newLanguage: 'en' | 'pl') => {
    localStorage.setItem('language', newLanguage);
    updateLanguage(newLanguage);
  };

  const contextValue: LanguageContextProps = {
    language,
    setLanguage,
  };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
}
