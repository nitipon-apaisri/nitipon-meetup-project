import { v4 as uuidv4 } from "uuid";
import { eventsDB } from "./events";
export interface userModel {
    id: string;
    username: string;
    password: string;
    userInfo: {
        firstName: string,
        lastName: string
    }
    interests: any[],
    joins: any[]
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

export const joinTheEvent = async (userIndex:number, eventTitle:string) => {
    const checkJoinEvents = users[userIndex].joins.findIndex((r) => {
        return r.title === eventTitle
    })
    if(checkJoinEvents === -1) {
        const findEvent = eventsDB.find((r) => {
            return r.title === eventTitle
        })
        users[userIndex].joins.push(findEvent)
    }
}
export const declineTheEvent = (userIndex:number, eventTitle:string) => {
    const eventIndex = users[userIndex].joins.findIndex((r) => {
        return r === eventTitle
    })
    users[userIndex].joins.splice(eventIndex, 1)
}