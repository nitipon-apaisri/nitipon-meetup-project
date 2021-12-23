export interface eventModel {
    id: string,
    title: string,
    description: {short: string, full: string},
    join: String[],
    interested: string[],
    location: Address,
    rate: number,
    feedback: string[],
    imgCover: string
    date: DateNTime
}

interface DateNTime {
    dateInfo: string,
    time: string
}
interface Address {
    street: string,
    city: string,
    country: string
}

export const eventsDB: eventModel[]= [
    {
        id:'1', 
        title: 'Javascript Hackathon', 
        description: {
            short: "morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et",
            full:"sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac"}, 
        join:["xC10","xC40", "xC41", "xC42",],
        interested:["xC11","xC12", "xC13"],
        location: {
            street: "Kujoji",
            city: "Tokyo",
            country: "Japan",
        },
        rate: 5,
        feedback: ["Nice","Nice","Nice","Nice","Nice",],
        date: {
            dateInfo:"2021/07/06",
            time: "13:00"
        },
        imgCover: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1828&q=80"
    },
    {
        id:'2', 
        title: 'Blockchain Hackathon', 
        description: {
            short: "morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et",
            full:"sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac"}, 
        join:["xC10", "xC40", "xC58", "xC72", "xC85", "xC65"],
        interested:["xC11","xC12"],
        location: {
            street: "Kujoji",
            city: "Tokyo",
            country: "Japan",
        },
        rate: 2.5,
        feedback: ["Nice","Nice","Nice",],
        date: {
            dateInfo:"2021/07/08",
            time: "13:00"
        },
        imgCover: "https://images.unsplash.com/photo-1638913970675-b5ec36292665?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
    },
    {
        id:'3', 
        title: 'Japan Day', 
        description: {
            short: "morbi blandit cursus risus at ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis natoque penatibus et",
            full:"sed viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis a cras semper auctor neque vitae tempus quam pellentesque nec nam aliquam sem et tortor consequat id porta nibh venenatis cras sed felis eget velit aliquet sagittis id consectetur purus ut faucibus pulvinar elementum integer enim neque volutpat ac"}, 
        join:["xC10"],
        interested:["xC11"],
        location: {
            street: "Kujoji",
            city: "Tokyo",
            country: "Japan",
        },
        rate: 5,
        feedback: ["Nice","Nice","Nice","Nice",],
        date: {
            dateInfo:"2021/07/10",
            time: "13:00"
        },
        imgCover: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
    }
]