import { createContext, useState } from "react";

type ContextProps = {
    //state
    auth: any;
    user: any;
    //function
    singIn: any;
    setAuth: any;
    signOut: any;
};

const AuthContext = createContext<Partial<ContextProps>>({});

const AuthProvider = (props: any) => {
    const [auth, setAuth] = useState(false);
    const [user, setUser] = useState({
        authUsername: "",
        authPassword: "",
        firstName: "",
        lastName: "",
    });
    const singIn = (username: string, password: string, firstName: string, lastName: string) => {
        setAuth(true);
        setUser({ ...user, authUsername: username, authPassword: password, firstName: firstName, lastName: lastName });
    };
    const signOut = () => {
        setAuth(false);
        setUser({ ...user, authUsername: "", authPassword: "", firstName: "", lastName: "" });
    };
    return <AuthContext.Provider value={{ auth, user, singIn, signOut }}>{props.children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
