import Home from "./Pages/Home/Home";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import EventPage from "./Pages/EventPage/EventPage";
import UserAuth from "./Pages/UserAuth/UserAuth";
import Register from "./Pages/Register/Register";
import { register, users } from "./db/users";
function App() {
    if (users.length === 0) {
        const admin = {
            username: "admin",
            password: "admin",
            firstName: "Elliot",
            lastName: "Alderson",
        };
        register(admin.username, admin.password, admin.firstName, admin.lastName);
    }
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
