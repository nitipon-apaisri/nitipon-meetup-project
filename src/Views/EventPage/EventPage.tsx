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
                <div className="joined">
                    <h4>Joined</h4>
                    <p data-testid="joined-total">{eventsDB[eventIndex].joined.length}</p>
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
        </div>
    );
};

export default EventPage;
