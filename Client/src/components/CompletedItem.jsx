import React, { useState } from "react";
import Box from "@mui/material/Box";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import Checkbox from "@mui/material/Checkbox";
import ListItemIcon from "@mui/material/ListItemIcon";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import CancelIcon from "@mui/icons-material/Cancel";
import EditIcon from "@mui/icons-material/Edit";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import axios from "axios";

const CompletedItem = ({ taskObj, fetchCompletedTasks, fetchToDos }) => {
    const [toggleEdit, setToggleEdit] = useState(false);

    const [editedTask, setEditedTask] = useState("");

    const [disableTaskOptions, setDisableTaskOptions] = useState(false);

    const updateTask = async () => {
        setDisableTaskOptions(true);
        await axios.put(
            "https://ken-yokohama-mern-to-do-list.herokuapp.com/editCompletedTask",
            { _id: taskObj?._id, task: editedTask }
        );
        fetchCompletedTasks();
        setDisableTaskOptions(false);
        setToggleEdit(false);
    };

    const deleteTask = async () => {
        setDisableTaskOptions(true);
        await axios.delete(
            "https://ken-yokohama-mern-to-do-list.herokuapp.com/deleteCompletedTask/" +
                taskObj?._id
        );
        fetchCompletedTasks();
        setDisableTaskOptions(false);
    };

    const uncompleteTask = async () => {
        setDisableTaskOptions(true);
        await axios.post(
            "https://ken-yokohama-mern-to-do-list.herokuapp.com/uncompleteTask",
            taskObj
        );
        fetchCompletedTasks();
        fetchToDos();
        setDisableTaskOptions(false);
    };

    return (
        <ListItemButton
            disabled={disableTaskOptions}
            sx={{ pl: 4, display: "flex", justifyContent: "space-between" }}
        >
            <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                    <Checkbox onClick={uncompleteTask} defaultChecked />
                </ListItemIcon>
                {toggleEdit ? (
                    <Box>
                        <Input
                            placeholder={taskObj?.task}
                            onChange={(e) => {
                                setEditedTask(e.target.value);
                            }}
                        />
                        <IconButton
                            color="error"
                            onClick={() => {
                                setToggleEdit(false);
                            }}
                        >
                            <CancelIcon />
                        </IconButton>
                        <IconButton color="success" onClick={updateTask}>
                            <CheckCircleOutlineIcon />
                        </IconButton>
                    </Box>
                ) : (
                    <Box
                        sx={{ display: "flex", alignItems: "center" }}
                        onClick={() => {
                            setToggleEdit(true);
                        }}
                    >
                        <ListItemText primary={taskObj?.task} />
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Box>
                )}
            </Box>
            <IconButton color="error" onClick={deleteTask}>
                <DeleteOutlineIcon />
            </IconButton>
        </ListItemButton>
    );
};

export default CompletedItem;
