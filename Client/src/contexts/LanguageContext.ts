import { createContext } from 'react';

export interface LanguageContextProps {
  language: 'en' | 'pl';
  setLanguage: (language: 'en' | 'pl') => void;
}

export const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);
