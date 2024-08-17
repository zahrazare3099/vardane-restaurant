import { createContext, useContext, useState } from "react";

const ThemContext = createContext();

const ThemeProvider = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => {
  return useContext(ThemContext);
};
