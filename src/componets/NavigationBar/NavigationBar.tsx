import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/authContext";
const NavigationBar = () => {
    const authContext = useContext(AuthContext);
    const [auth, setAuth] = useState(false);
    const navigate = useNavigate();
    const toUserAuth = () => {
        navigate("/auth");
    };
    const toRegister = () => {
        navigate("/register");
    };
    useEffect(() => {
        setAuth(authContext.auth);
    }, [authContext]);
    return (
        <nav>
            <div className="routes">
                <div className="banner"></div>
                <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/">Explore</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                </ul>
            </div>
            {auth ? (
                <div className="user-profile">
                    <h3>{authContext.user.authUsername}</h3>
                </div>
            ) : (
                <div className="user-actions">
                    <div className="signUp">
                        <button onClick={toRegister}>
                            <p>Sign Up</p>
                        </button>
                    </div>
                    <div className="signIn">
                        <button onClick={toUserAuth}>
                            <p>Sign In</p>
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default NavigationBar;
