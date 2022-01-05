import Home from "./Pages/Home/Home";
import "./css/style.css";
import { Routes, Route } from "react-router-dom";
import EventPage from "./Pages/EventPage/EventPage";
import UserAuth from "./Pages/UserAuth/UserAuth";
import Register from "./Pages/Register/Register";
import { register, users } from "./db/users";
import { useContext, useEffect } from "react";
import { AuthContext } from "./store/authContext";
function App() {
    const authContext = useContext(AuthContext);
    if (users.length === 0) {
        const admin = {
            username: "user",
            password: "user",
            firstName: "Elliot",
            lastName: "Alderson",
        };
        register(admin.username, admin.password, admin.firstName, admin.lastName);
    }
    useEffect(() => {
        if (authContext.auth) {
            const validateUser = users.findIndex((r) => {
                return r.username === authContext.user.authUsername;
            });
            if (validateUser !== -1) {
                if (sessionStorage.getItem("auth")) {
                    const signIn = () => {
                        const foundeUser = JSON.parse(sessionStorage.auth);
                        authContext.singIn(
                            foundeUser.user.username,
                            foundeUser.user.password,
                            foundeUser.user.firstName,
                            foundeUser.user.lastName
                        );
                    };
                    signIn();
                }
            } else {
                sessionStorage.removeItem("auth");
                window.location.reload();
            }
        } else if (sessionStorage.auth) {
            const founderUser = JSON.parse(sessionStorage.auth).user;
            const validateUser = users.findIndex((r) => {
                return r.username === founderUser.username;
            });
            if (validateUser !== -1) {
                authContext.singIn(
                    founderUser.username,
                    founderUser.password,
                    founderUser.firstName,
                    founderUser.lastName
                );
            }
        }
        // eslint-disable-next-line
    }, []);
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
