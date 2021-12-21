import { useState } from "react";
import { register } from "../../db/users";
import { useNavigate } from "react-router";
const SignUp = () => {
    const [username, setUsername] = useState("");
    const [password, setPasswprd] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [errorMsg, setErrorMsg] = useState(false);
    const navigate = useNavigate();
    const submit = () => {
        if (username !== "" && password !== "" && firstName !== "" && lastName !== "") {
            register(username, password, firstName, lastName);
            navigate("/auth");
            setUsername("");
            setPasswprd("");
            setFirstName("");
            setLastName("");
            setErrorMsg(false);
        } else {
            setErrorMsg(true);
        }
    };
    return (
        <div className="user-auth-container sign-up-container card">
            <div className="auth-contents">
                <div className="left sign-up-left"></div>
                <div className="right sign-up-right">
                    <div className="top">
                        <h1>Sign Up</h1>
                        <button
                            onClick={() => {
                                navigate("/");
                            }}
                        >
                            <p>X</p>
                        </button>
                    </div>
                    <hr />
                    <div className="inputs">
                        <div className="user-info">
                            <div className="input firstName">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        setFirstName(e.target.value);
                                    }}
                                    aria-label="firstName"
                                />
                            </div>
                            <div className="input lastName">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        setLastName(e.target.value);
                                    }}
                                    aria-label="lastName"
                                />
                            </div>
                        </div>
                        <div className="sing-in-info">
                            <div className="input username">
                                <label htmlFor="username">Username</label>
                                <input
                                    type="text"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="input password">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    onChange={(e) => {
                                        setPasswprd(e.target.value);
                                    }}
                                />
                            </div>
                        </div>
                        {errorMsg && (
                            <div className="error-msg">
                                <h6>Please fill the inputs</h6>
                            </div>
                        )}
                        <div className="footer">
                            <button onClick={submit} className="sign-up-button" data-testid="signUpBTN">
                                <p>Sign Up</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
