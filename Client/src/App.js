import React from "react";
import { Main } from "./containers";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import darkModeReducer from "./features/darkModeSlice";

const store = configureStore({
    reducer: {
        darkMode: darkModeReducer,
    },
});

function App() {
    return (
        <React.StrictMode>
            <Provider store={store}>
                <Main />
            </Provider>
        </React.StrictMode>
    );
}

export default App;
