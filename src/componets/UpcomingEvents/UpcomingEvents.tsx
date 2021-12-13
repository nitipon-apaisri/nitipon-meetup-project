import { eventsDB } from "../../db/events";

const UpcomingEvents = () => {
    return (
        <ul>
            {eventsDB
                .sort((a, b) => (a.date > b.date ? 1 : -1))
                .slice(0, 3)
                .map((event, index) => {
                    return <li key={index}>{event.title}</li>;
                })}
        </ul>
    );
};

export default UpcomingEvents;
