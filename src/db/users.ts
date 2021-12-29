import { v4 as uuidv4 } from "uuid";
export interface userModel {
    id: string;
    username: string;
    password: string;
    userInfo: {
        firstName: string,
        lastName: string
    }
    interests: string[],
    joins: string[]
}

export const users: userModel[] = [];

export const register = (username: string, password: string, firstName: string, lastName: string) => {
    const user = {
        id: uuidv4(),
        username: username,
        password: password,
        userInfo: {firstName: firstName, lastName: lastName},
        interests: [],
        joins: []
    };
    users.push(user);
};

export const joinTheEvent = (userIndex:number, eventTitle:string) => {
    const checkJoinEvents = users[userIndex].joins.includes(eventTitle)
    if(!checkJoinEvents) {
        users[userIndex].joins.push(eventTitle)
        console.log(users[userIndex].joins)
    }
}
export const declineTheEvent = (userIndex:number, eventTitle:string) => {
    const eventIndex = users[userIndex].joins.findIndex((r) => {
        return r === eventTitle
    })
    users[userIndex].joins.splice(eventIndex, 1)
}