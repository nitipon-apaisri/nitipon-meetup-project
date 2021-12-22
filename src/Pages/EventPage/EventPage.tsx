import { useParams } from "react-router";
import NavigationBar from "../../componets/NavigationBar/NavigationBar";
import { eventsDB } from "../../db/events";
const EventPage = () => {
    // const [eventTitle, setEventTitle] = useState("")
    const eventId = useParams();
    const eventIndex = eventsDB.findIndex((r: any) => {
        return r.id === eventId.id;
    });
    return (
        <div className="event-container">
            <NavigationBar />
            <div className="event-wrapper">
                <div className="event-header">
                    <div className="event-title">
                        <h1>{eventsDB[eventIndex].title}</h1>
                    </div>
                    <button>
                        <p>Remind Me</p>
                    </button>
                </div>
                <div className="event-img-cover" style={{ backgroundImage: `url(${eventsDB[eventIndex].imgCover})` }}>
                    <div className="event-info">
                        <div className="info-title">INFO</div>
                        <hr />
                        <div className="event-date">
                            <h6>{eventsDB[eventIndex].date.dateInfo}</h6>
                            <h6>{eventsDB[eventIndex].date.time}</h6>
                            <h6>{`${eventsDB[eventIndex].location.street} ${eventsDB[eventIndex].location.city} ${eventsDB[eventIndex].location.country}`}</h6>
                        </div>
                        <hr />
                        <button>
                            <p>JOIN!</p>
                        </button>
                    </div>
                </div>
                <div className="information">
                    <div className="description">
                        <h4>Information</h4>
                        <p data-testid="description">{eventsDB[eventIndex].description}</p>
                    </div>
                    <div className="join">
                        <h4>join</h4>
                        <p data-testid="join-total">{eventsDB[eventIndex].join.length}</p>
                    </div>
                </div>
                <div className="feedback">
                    <h4>Feedback</h4>
                    <div className="feedback-list">
                        <ul aria-label="feedback">
                            {eventsDB[eventIndex].feedback.map((item, index) => {
                                return (
                                    <li className="item" key={index}>
                                        <p>{item}</p>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="date-and-location">
                    <div className="date">
                        <h4>Date</h4>
                        <p data-testid="date">{eventsDB[eventIndex].date.dateInfo}</p>
                    </div>
                    <div className="location">
                        <h4>Location</h4>
                        <p data-testid="location">{eventsDB[eventIndex].location.city}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventPage;
