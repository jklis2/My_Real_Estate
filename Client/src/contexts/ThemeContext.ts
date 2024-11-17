import { createContext } from "react";
import { ThemeColors } from "interfaces/ThemeColors.ts";

export type Theme = "light" | "dark";


export interface ThemeContextProps {
    theme: Theme;
    toggleTheme: () => void;
    themeColors: ThemeColors
}

export const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);
