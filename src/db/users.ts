import { v4 as uuidv4 } from "uuid";
export interface userModel {
    id: string;
    username: string;
    password: string;
    userInfo: {
        firstName: string,
        lastName: string
    }
}

export const users: userModel[] = [];

export const register = (username: string, password: string, firstName: string, lastName: string) => {
    const user = {
        id: uuidv4(),
        username: username,
        password: password,
        userInfo: {firstName: firstName, lastName: lastName}
    };
    users.push(user);
};
