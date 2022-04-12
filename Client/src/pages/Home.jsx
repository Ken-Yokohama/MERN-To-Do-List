import React from "react";
import Box from "@mui/material/Box";
import { ListContainer } from "../containers";
import { useSelector } from "react-redux";

const Home = () => {
    const darkMode = useSelector((state) => state.darkMode.value);

    return (
        <Box
            sx={{
                backgroundColor: darkMode ? "black" : "white",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <ListContainer />
        </Box>
    );
};

export default Home;
