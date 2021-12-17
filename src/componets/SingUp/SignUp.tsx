import { useState } from "react";
import { register, users } from "../../db/users";
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPasswprd] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const submit = () => {
        register(username, password, firstName, lastName);
        console.log(users);
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
                <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setFirstName(e.target.value);
                        }}
                    />
                </div>
                <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        onChange={(e) => {
                            setLastName(e.target.value);
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
