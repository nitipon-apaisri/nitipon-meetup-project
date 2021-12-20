import { createContext, useState } from "react";

type ContextProps = {
    //state
    auth: any;
    user: any;
    //function
    singIn: any;
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
    return <AuthContext.Provider value={{ auth, user, singIn }}>{props.children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
