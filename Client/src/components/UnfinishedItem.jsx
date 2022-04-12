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

const UnfinishedItem = () => {
    const [toggleEdit, setToggleEdit] = useState(false);

    return (
        <ListItemButton
            sx={{ pl: 4, display: "flex", justifyContent: "space-between" }}
        >
            <Box sx={{ display: "flex" }}>
                <ListItemIcon>
                    <Checkbox />
                </ListItemIcon>
                {toggleEdit ? (
                    <Box>
                        <Input placeholder="Value" sx={{ flex: "1" }} />
                        <IconButton
                            color="error"
                            onClick={() => {
                                setToggleEdit(false);
                            }}
                        >
                            <CancelIcon />
                        </IconButton>
                        <IconButton color="primary">
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
                        <ListItemText primary="lorem lorem lorem" />
                        <IconButton>
                            <EditIcon />
                        </IconButton>
                    </Box>
                )}
            </Box>
            <IconButton color="error">
                <DeleteOutlineIcon />
            </IconButton>
        </ListItemButton>
    );
};

export default UnfinishedItem;
