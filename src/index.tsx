import React from "react";
import ReactDOM from "react-dom";
import Main from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthProvider } from "./store/authContext";

ReactDOM.render(
    <React.StrictMode>
        <AuthProvider>
            <Router>
                <Main />
            </Router>
        </AuthProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
