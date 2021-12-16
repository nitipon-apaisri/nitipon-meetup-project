import { eventsDB } from "../../db/events";
const MostRatedEvents = () => {
    return (
        <div className="most-rated-container">
            <div className="title">
                <h2>Most Rated</h2>
            </div>
            <div className="gallery">
                {eventsDB
                    .sort((a, b) => (a.rate < b.rate ? 1 : -1))
                    .slice(0, 3)
                    .map((event, index) => {
                        return (
                            <a
                                href={`/event/${event.id}`}
                                data-testid={`event-${index}`}
                                className="card medium-info"
                                key={index}
                            >
                                <div className="row-1">
                                    <div className="card-img"></div>
                                    <div className="title-n-joined">
                                        <h4>{event.title}</h4>
                                        <p>{`Joined: ${event.joined.length}`}</p>
                                    </div>
                                </div>
                                <hr />
                                <div className="row-2">
                                    <div className="date">
                                        <p>{`${event.date.dateInfo} | @ ${event.date.time} (Local Time)`}</p>
                                    </div>
                                    <div className="description">
                                        <p>{event.description}</p>
                                    </div>
                                </div>
                            </a>
                        );
                    })}
            </div>
        </div>
    );
};

export default MostRatedEvents;
