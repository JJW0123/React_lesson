import { useContext } from "react";
import ThemeContext from "./ThemeContext";

function MainContents(props) {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return (
        <div style={{
            width: "100vw",
            height: "100vh",
            padding: "1.5rem",
            backgroundColor: theme == "light" ? "white" : "black",
            color: theme == "light" ? "black" : "white",
        }}
    >
        <p>테마 변경 예제</p>
        <button onClick={toggleTheme}>변경하기</button>
    </div>
    );
}

export default MainContents;