import { useState } from "react";
import { users } from "../../db/users";
const SignIn = () => {
    const [username, setUsername] = useState("");
    const [password, setPasswprd] = useState("");
    const submit = () => {
        users.find((r) => {
            if (r.username === username && r.password === password) {
                console.log(r);
            } else {
                console.log("Not find user");
            }
            return 0;
        });
        // window.location.reload();
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
