import React from "react";
import { Main } from "./containers";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import darkModeReducer from "./features/darkModeSlice";

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
});

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
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <Main />
                </ThemeProvider>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
