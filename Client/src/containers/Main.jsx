import React, { useEffect, useState } from "react";
import axios from "axios";
import { Home, Loading } from "../pages";

const Main = () => {
    const [backendLoaded, setBackendLoaded] = useState(false);

    useEffect(() => {
        const getToDos = async () => {
            const unfinishedTasks = await axios.get(
                "https://ken-yokohama-mern-to-do-list.herokuapp.com/getToDos"
            );
            setBackendLoaded(true);
            console.log(unfinishedTasks.data);
        };
        getToDos();
    }, []);
    return <>{backendLoaded ? <Home /> : <Loading />}</>;
};

export default Main;
