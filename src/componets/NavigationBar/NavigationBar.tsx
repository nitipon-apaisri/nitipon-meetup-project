import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../store/authContext";
const NavigationBar = () => {
    const authContext = useContext(AuthContext);
    const [auth, setAuth] = useState(false);
    const [dropDownMenu, setDropDownMenu] = useState(false);
    const navigate = useNavigate();
    const toUserAuth = () => {
        navigate("/auth");
    };
    const toRegister = () => {
        navigate("/register");
    };
    const toggleDropDownMenu = () => {
        setDropDownMenu(!dropDownMenu);
    };
    const signOut = () => {
        setAuth(false);
        setDropDownMenu(false);
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
                dropDownMenu ? (
                    <div className="dropdown-menu">
                        <div className="user-profile">
                            <button className="user-name button" onClick={toggleDropDownMenu}>
                                <h3>
                                    {authContext.user.firstName} {authContext.user.lastName}
                                </h3>
                            </button>
                            <hr />
                            <button className="profile button">
                                <h3>Profile</h3>
                            </button>
                            <hr />
                            <button className="sign-out button" onClick={signOut}>
                                <h3>Sign Out</h3>
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className="user-profile">
                        <button className="user-name button" onClick={toggleDropDownMenu}>
                            <h3>
                                {authContext.user.firstName} {authContext.user.lastName}
                            </h3>
                        </button>
                    </div>
                )
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
