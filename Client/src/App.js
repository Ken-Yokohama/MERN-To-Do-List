import React from "react";
import { Main } from "./containers";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

function App() {
    const theme = createTheme({
        palette: {
            mode: "dark",
            primary: {
                main: "#0052cc",
            },
            secondary: {
                main: "#edf2ff",
            },
        },
    });

    return (
        <React.StrictMode>
            <ThemeProvider theme={theme}>
                <Main />
            </ThemeProvider>
        </React.StrictMode>
    );
}

export default App;
