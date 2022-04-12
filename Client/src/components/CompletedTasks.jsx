import React, { useEffect, useState } from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ListItemText from "@mui/material/ListItemText";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import CompletedItem from "./CompletedItem";

const CompletedTasks = ({
    completedTasks,
    fetchCompletedTasks,
    fetchToDos,
}) => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
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
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Completed Tasks" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {completedTasks.map((taskObj, index) => (
                        <CompletedItem
                            key={index}
                            taskObj={taskObj}
                            fetchCompletedTasks={fetchCompletedTasks}
                            fetchToDos={fetchToDos}
                        />
                    ))}
                </List>
            </Collapse>
        </List>
    );
};

export default CompletedTasks;
