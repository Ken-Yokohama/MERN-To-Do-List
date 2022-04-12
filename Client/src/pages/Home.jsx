import React from "react";
import Box from "@mui/material/Box";
import { ListContainer } from "../containers";

const Home = () => {
    return (
        <Box
            sx={{
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
