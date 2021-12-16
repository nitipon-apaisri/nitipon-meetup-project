import React from "react";
import { render } from "react-dom";
import Main from "./App";
import EventPage from "./Pages/EventPage/EventPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import UserAuth from "./Pages/UserAuth/UserAuth";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/auth" element={<UserAuth />} />
            </Routes>
        </Router>
    );
};
render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
