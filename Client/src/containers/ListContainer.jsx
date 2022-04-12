import React from "react";
import Paper from "@mui/material/Paper";
import { CompletedTasks, UnfinishedTasks } from "../components";

const ListContainer = () => {
    return (
        <Paper
            elevation={6}
            sx={{
                height: "70vh",
                overflowY: "scroll",
                width: "60vw",
                maxWidth: "500px",
                "@media(max-width: 500px)": {
                    height: "100%",
                    width: "100%",
                },
            }}
        >
            <UnfinishedTasks />
            <CompletedTasks />
        </Paper>
    );
};

export default ListContainer;
