import React from "react";
import Paper from "@mui/material/Paper";

const ListContainer = () => {
    return (
        <Paper
            elevation={6}
            sx={{
                height: "70vh",
                width: "60vw",
                maxWidth: "500px",
                "@media(max-width: 500px)": {
                    height: "100%",
                    width: "100%",
                },
            }}
        >
            ListContainer
        </Paper>
    );
};

export default ListContainer;
