import React, { useEffect, useState } from "react";
import axios from "axios";
import { Home, Loading } from "../pages";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import { useSelector } from "react-redux";

const Main = () => {
    const [backendLoaded, setBackendLoaded] = useState(false);

    useEffect(() => {
        const getToDos = async () => {
            const pingBackend = await axios.get(
                "https://ken-yokohama-mern-to-do-list.herokuapp.com/getToDos"
            );
            setBackendLoaded(true);
        };
        getToDos();
    }, []);

    const darkMode = useSelector((state) => state.darkMode.value);

    const theme = createTheme({
        palette: {
            mode: darkMode ? "dark" : "light",
            primary: {
                main: "#0052cc",
            },
            secondary: {
                main: "#edf2ff",
            },
        },
    });

    return (
        <ThemeProvider theme={theme}>
            {backendLoaded ? <Home /> : <Loading />}
        </ThemeProvider>
    );
};

export default Main;
