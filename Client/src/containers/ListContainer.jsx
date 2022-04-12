import React, { useEffect, useState } from "react";
import Paper from "@mui/material/Paper";
import { CompletedTasks, UnfinishedTasks } from "../components";
import axios from "axios";

const ListContainer = () => {
    const [completedTasks, setCompletedTasks] = useState([]);

    const fetchCompletedTasks = async () => {
        const finishedTasks = await axios.get(
            "https://ken-yokohama-mern-to-do-list.herokuapp.com/getCompletedTasks"
        );
        setCompletedTasks(finishedTasks.data);
    };

    const [unfinishedTasks, setUnfinishedTasks] = useState([]);

    const fetchToDos = async () => {
        const toDos = await axios.get(
            "https://ken-yokohama-mern-to-do-list.herokuapp.com/getToDos"
        );
        setUnfinishedTasks(toDos.data);
    };

    useEffect(() => {
        fetchToDos();
        fetchCompletedTasks();
    }, []);

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
            <UnfinishedTasks
                fetchToDos={fetchToDos}
                unfinishedTasks={unfinishedTasks}
                fetchCompletedTasks={fetchCompletedTasks}
            />
            <CompletedTasks
                fetchToDos={fetchToDos}
                completedTasks={completedTasks}
                fetchCompletedTasks={fetchCompletedTasks}
            />
        </Paper>
    );
};

export default ListContainer;
