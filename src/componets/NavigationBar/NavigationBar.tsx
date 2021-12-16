const NavigationBar = () => {
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
            <div className="user-actions">
                <div className="signUp">
                    <button>
                        <p>Sign Up</p>
                    </button>
                </div>
                <div className="signIn">
                    <button>
                        <p>Sign In</p>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
