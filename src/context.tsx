import { useState, createContext } from "react";

export interface ThemeContextProps {
    theme: string,
    toggleTheme?: ()=>void,
}

const ThemeContext = createContext<ThemeContextProps>({theme:'dark'});

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("dark");

    function toggleTheme() {
        setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
}

export { ThemeContextProvider, ThemeContext };