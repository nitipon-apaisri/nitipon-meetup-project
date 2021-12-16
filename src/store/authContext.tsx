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
    });
    const singIn = (username: string, password: string) => {
        setAuth(true);
        setUser({ ...user, authUsername: username, authPassword: password });
        console.log(user);
    };
    return <AuthContext.Provider value={{ auth, user, singIn }}>{props.children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
