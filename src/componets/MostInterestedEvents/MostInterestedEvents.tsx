import { eventsDB } from "../../db/events";

const MostInterestedEvents = () => {
    return (
        <div className="most-popular-container">
            <div className="title">
                <h2>Most Popular</h2>
            </div>
            <div className="gallery">
                {eventsDB
                    .sort((a, b) => (a.joined.length < b.joined.length ? 1 : -1))
                    .slice(0, 3)
                    .map((event, index) => {
                        return (
                            <a
                                href={`/event/${event.id}`}
                                data-testid={`event-${index}`}
                                className="card full-pic"
                                key={index}
                            >
                                <div className="short-info">
                                    <div className="row-1">
                                        <h4>{event.title}</h4>
                                        <p>{`Joined: ${event.joined.length}`}</p>
                                    </div>
                                    <div className="row-2">
                                        <p>{`${event.date.dateInfo} | @ ${event.date.time} (Local Time)`}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
            </div>
        </div>
    );
};

export default MostInterestedEvents;
