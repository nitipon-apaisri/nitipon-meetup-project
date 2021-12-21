import { Link } from "react-router-dom";
import { eventsDB } from "../../db/events";
const MostInterestedEvents = () => {
    return (
        <div className="most-popular-container">
            <div className="title">
                <h2>Most Popular</h2>
            </div>
            <div className="gallery">
                {eventsDB
                    .sort((a, b) => (a.join.length < b.join.length ? 1 : -1))
                    .slice(0, 3)
                    .map((event, index) => {
                        return (
                            <Link
                                to={`/event/${event.id}`}
                                data-testid={`event-${index}`}
                                className="card-cover "
                                key={index}
                            >
                                <div
                                    className="card full-pic"
                                    style={{
                                        backgroundImage: `url(${event.imgCover})`,
                                    }}
                                ></div>
                                <div className="short-info">
                                    <div className="row-1">
                                        <h4>{event.title}</h4>
                                        <p>{`Join: ${event.join.length}`}</p>
                                    </div>
                                    <div className="row-2">
                                        <p>{`${event.date.dateInfo} | @ ${event.date.time} (Local Time)`}</p>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
            </div>
        </div>
    );
};

export default MostInterestedEvents;
