import React, { createContext, useState } from "react";

export const DAY_THEME = "day";
export const NIGHT_THEME = "night";

export const ThemeContext = createContext({
  globalTheme: "",
  setGlobalTheme: () => {},
});

const ThemeContextParent = (props) => {
  const [theme, setTheme] = useState(DAY_THEME);

  const value = {
    globalTheme: theme,
    setGlobalTheme: setTheme,
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextParent;