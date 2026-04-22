import { createContext, useState, useContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
     //here depend on the previous state to toggle theme 
     setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
     // setTheme (theme === "light" ? "dark" : "light"); --- IGNORE For Multiple Theme ---
    document.documentElement.classList.toggle("dark")
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// custom hook (recommended)
// export const useTheme = () => {
//   const context = useContext(ThemeContext);
//   if (!context) {
//     throw new Error("useTheme must be used within a ThemeProvider");
//   }
//   return context;
// };

export { ThemeContext };
export default ThemeProvider;