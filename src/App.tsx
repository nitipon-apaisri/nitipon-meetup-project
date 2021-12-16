import Home from "./Pages/Home/Home";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import EventPage from "./Pages/EventPage/EventPage";
import UserAuth from "./Pages/UserAuth/UserAuth";
import Register from "./Pages/Register/Register";
function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventPage />} />
                <Route path="/auth" element={<UserAuth />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    );
}

export default App;
