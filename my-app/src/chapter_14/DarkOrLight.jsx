import ThemeContext from "./ThemeContext";
import MainContents from "./MainContents";
import { useCallback, useState } from "react";

function DarkOrLight(props) {
    const [theme, setTheme] = useState("light");

    const toggleTheme = useCallback(() => {
        if(theme == "light") {
            setTheme("dark");
        } else if(theme == "dark") {
            setTheme("light");
        }
    }, [theme]);

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <MainContents/>
        </ThemeContext.Provider>
    );
}

export default DarkOrLight;