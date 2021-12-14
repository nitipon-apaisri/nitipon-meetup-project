export interface eventModel {
    id: string,
    title: string,
    description: string,
    joined: String[],
    interested: string[],
    location: string,
    rate: number,
    feedback: string[],
    date: string
}

export const eventsDB: eventModel[]= [
    {
        id:'1', 
        title: 'Javascript Hackaton', 
        description: "Javascript is all", 
        joined:["xC10","xC40", "xC41", "xC42",],
        interested:["xC11","xC12", "xC13"],
        location: "London",
        rate: 5,
        feedback: ["Nice","Nice","Nice","Nice","Nice",],
        date: "2021/07/06"
    },
    {
        id:'2', 
        title: 'Blockchain Hackaton', 
        description: "Into the Block", 
        joined:["xC10", "xC40", "xC58", "xC72", "xC85", "xC65"],
        interested:["xC11","xC12"],
        location: "London",
        rate: 2.5,
        feedback: ["Nice","Nice","Nice",],
        date: "2021/07/08"
    },
    {
        id:'3', 
        title: 'Japan Day', 
        description: "Nippon", 
        joined:["xC10"],
        interested:["xC11"],
        location: "London",
        rate: 5,
        feedback: ["Nice","Nice","Nice","Nice",],
        date: "2021/07/08"
    }
]