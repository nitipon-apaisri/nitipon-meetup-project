import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { users } from "../../db/users";
import { AuthContext } from "../../store/authContext";
const SignIn = () => {
    const authContext = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPasswprd] = useState("");
    const navigate = useNavigate();
    const submit = () => {
        if (username === "" && password === "") {
            console.log("please fill the inputs");
        } else {
            users.find((r) => {
                if (r.username === username && r.password === password) {
                    authContext.singIn(username, password);
                    setUsername("");
                    setPasswprd("");
                    navigate("/");
                } else {
                    console.log("Not find user");
                }
                return 0;
            });
        }
    };
    return (
        <div className="user-auth-container">
            <div className="title">
                <h1>Sign In</h1>
            </div>
            <div className="inputs">
                <div className="username">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setUsername(e.target.value);
                        }}
                    />
                </div>
                <div className="password">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        onChange={(e) => {
                            setPasswprd(e.target.value);
                        }}
                    />
                </div>
                <button onClick={submit}>
                    <p>Sign In</p>
                </button>
            </div>
        </div>
    );
};

export default SignIn;
