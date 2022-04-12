import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Loading = () => {
    const [loading, setLoading] = useState("Loading");

    useEffect(() => {
        setInterval(() => {
            setTimeout(() => {
                setLoading("Loading.");
            }, 1000);
            setTimeout(() => {
                setLoading("Loading..");
            }, 2000);
            setTimeout(() => {
                setLoading("Loading...");
            }, 3000);
        }, 4000);
    }, []);

    return (
        <Box>
            <Typography variant="h4" component="h4">
                {loading}
            </Typography>
        </Box>
    );
};

export default Loading;
