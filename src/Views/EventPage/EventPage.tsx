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
            </div>
        </div>
    );
};

export default EventPage;
