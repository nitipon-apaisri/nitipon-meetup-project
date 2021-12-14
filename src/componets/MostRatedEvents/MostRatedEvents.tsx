import { eventsDB } from "../../db/events";
const MostRatedEvents = () => {
    return (
        <ul>
            {eventsDB
                .sort((a, b) => (a.rate < b.rate ? 1 : -1))
                .slice(0, 3)
                .map((event, index) => {
                    return (
                        <li key={index} data-testid={`event-${index}`}>
                            <a href={`/event/${event.id}`}>{event.title}</a>
                        </li>
                    );
                })}
        </ul>
    );
};

export default MostRatedEvents;
