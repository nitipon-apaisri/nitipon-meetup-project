import { eventsDB } from "../../db/events";
// import { useLocation } from "react-router";
import { Link } from "react-router-dom";
const UpcomingEvents = () => {
    return (
        <div className="upcoming-container">
            <div className="title">
                <h2>Upcoming</h2>
            </div>

            <div className="gallery">
                {eventsDB
                    .sort((a, b) => (a.date.dateInfo > b.date.dateInfo ? 1 : -1))
                    .slice(0, 3)
                    .map((event, index) => {
                        return (
                            <Link
                                to={`/event/${event.id}`}
                                data-testid={`event-${index}`}
                                className="card medium-info"
                                key={index}
                            >
                                <div className="row-1">
                                    <div
                                        className="card-img"
                                        style={{
                                            backgroundImage: `url(${event.imgCover})`,
                                        }}
                                    ></div>
                                    <div className="title-n-join">
                                        <h4>{event.title}</h4>
                                        <p>{`Join: ${event.join.length}`}</p>
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
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default UpcomingEvents;
