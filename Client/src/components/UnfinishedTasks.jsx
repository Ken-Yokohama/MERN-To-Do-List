import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import UnfinishedItem from "./UnfinishedItem";
import Input from "@mui/material/Input";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import { useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import { toggleDarkMode } from "../features/darkModeSlice";
import axios from "axios";
import { Box } from "@mui/system";

const UnfinishedTasks = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    const dispatch = useDispatch();

    const [unfinishedTasks, setUnfinishedTasks] = useState([]);

    const fetchToDos = async () => {
        const toDos = await axios.get(
            "https://ken-yokohama-mern-to-do-list.herokuapp.com/getToDos"
        );
        setUnfinishedTasks(toDos.data);
    };

    useEffect(() => {
        fetchToDos();
    }, []);

    const [newTask, setNewTask] = useState("");

    const addNewTask = async () => {
        await axios.post(
            "https://ken-yokohama-mern-to-do-list.herokuapp.com/addToDos",
            {
                task: newTask,
            }
        );
        setNewTask("");
        fetchToDos();
    };

    return (
        <List
            sx={{
                width: "100%",
                maxWidth: "100%",
                bgcolor: "background.paper",
            }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
                <ListSubheader
                    component="div"
                    id="nested-list-subheader"
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Typography variant="h2" component="h4">
                        To Do List
                    </Typography>
                    <Switch
                        defaultChecked
                        color="warning"
                        sx={{ position: "absolute", right: "0px" }}
                        onChange={() => {
                            dispatch(toggleDarkMode());
                        }}
                    />
                </ListSubheader>
            }
        >
            <Box sx={{ display: "flex", p: "1rem" }}>
                <Input
                    placeholder="New Task"
                    fullWidth
                    value={newTask}
                    onChange={(e) => {
                        setNewTask(e.target.value);
                    }}
                />
                <IconButton color="success" onClick={addNewTask}>
                    <AddIcon />
                </IconButton>
            </Box>

            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Unfinished Tasks" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {unfinishedTasks.map((taskObj, index) => (
                        <UnfinishedItem
                            key={index}
                            taskObj={taskObj}
                            fetchToDos={fetchToDos}
                        />
                    ))}
                </List>
            </Collapse>
        </List>
    );
};

export default UnfinishedTasks;
