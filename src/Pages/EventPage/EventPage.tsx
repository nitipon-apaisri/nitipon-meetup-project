import { useParams } from "react-router";
import { eventsDB } from "../../db/events";
const EventPage = () => {
    // const [eventTitle, setEventTitle] = useState("")
    const eventId = useParams();
    const eventIndex = eventsDB.findIndex((r: any) => {
        return r.id === eventId.id;
    });
    return (
        <div className="event-container">
            <h1>{eventsDB[eventIndex].title}</h1>
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
                    <ul>
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
    );
};

export default EventPage;
