import { createContext, useState } from "react";
import { themes } from "../themes/mythemes";

export const levelContext = createContext(0);

export const ThemeContext = createContext({
    theme: themes.light,
    toggleTheme: () => {},
});
