import React, { useState } from "react";
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
import Typography from "@mui/material/Typography";
import Switch from "@mui/material/Switch";

const UnfinishedTasks = () => {
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
                    />
                </ListSubheader>
            }
        >
            <ListItemButton onClick={handleClick}>
                <ListItemIcon>
                    <ListAltIcon />
                </ListItemIcon>
                <ListItemText primary="Unfinished Tasks" />
                {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    <UnfinishedItem />
                    <UnfinishedItem />
                    <UnfinishedItem />
                    <UnfinishedItem />
                    <UnfinishedItem />
                    <UnfinishedItem />
                    <UnfinishedItem />
                    <UnfinishedItem />
                    <UnfinishedItem />
                </List>
            </Collapse>
        </List>
    );
};

export default UnfinishedTasks;
