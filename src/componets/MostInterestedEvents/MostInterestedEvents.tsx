import { eventsDB } from "../../db/events";

const MostInterestedEvents = () => {
    return (
        <ul>
            {eventsDB
                .sort((a, b) => (a.joined.length < b.joined.length ? 1 : -1))
                .slice(0, 3)
                .map((event, index) => {
                    return <li key={index}>{event.title}</li>;
                })}
        </ul>
    );
};

export default MostInterestedEvents;
