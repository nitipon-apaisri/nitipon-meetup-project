import { useState } from "react";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPasswprd] = useState("");
    const submit = () => {
        console.log(username);
        console.log(password);
        window.location.reload();
    };
    return (
        <div className="user-auth-container">
            <div className="title">
                <h1>Sign Up</h1>
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
                    <p>Sign Up</p>
                </button>
            </div>
        </div>
    );
};

export default SignUp;
