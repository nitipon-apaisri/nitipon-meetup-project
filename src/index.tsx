import React from "react";
import ReactDOM from "react-dom";
import Main from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Main />
        </Router>
    </React.StrictMode>,
    document.getElementById("root")
);
