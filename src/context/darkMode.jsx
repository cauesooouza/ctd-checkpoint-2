import React, { createContext, useEffect, useState } from "react";

export const themeContext = createContext(null);

export const DarkModeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const handleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <themeContext.Provider value={{ theme, handleTheme }}>
      {children}
    </themeContext.Provider>
  );
};
