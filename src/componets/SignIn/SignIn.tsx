import { useState, useContext } from "react";
import { useNavigate } from "react-router";
import { users } from "../../db/users";
import { AuthContext } from "../../store/authContext";
import illus from "../../assets/img/illus.svg";
const SignIn = () => {
    const authContext = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPasswprd] = useState("");
    const [errorMsg, setErrorMsg] = useState(false);
    const [wrongInputs, setWrongInput] = useState(false);
    const navigate = useNavigate();
    const submit = () => {
        if (username === "" && password === "") {
            setErrorMsg(true);
        } else {
            users.find((r) => {
                if (r.username === username && r.password === password) {
                    authContext.singIn(username, password);
                    setErrorMsg(false);
                    setWrongInput(false);
                    setUsername("");
                    setPasswprd("");
                    navigate("/");
                } else {
                    setErrorMsg(true);
                    setWrongInput(true);
                }
                return 0;
            });
        }
    };
    return (
        <div className="user-auth-container">
            <div className="auth-contents card">
                <div className="left">
                    <img src={illus} alt="illus" />
                    <h1>Make the world a better Place</h1>
                </div>
                <div className="right">
                    <div className="title">
                        <h1>Sign In</h1>
                    </div>
                    <hr />
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

                        {errorMsg && (
                            <div className="error-msg">
                                {wrongInputs ? <h6>Username or password is wrong</h6> : <h6>Please fill the inputs</h6>}
                            </div>
                        )}
                        <div className="footer">
                            <button onClick={submit}>
                                <p>Sign In</p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
