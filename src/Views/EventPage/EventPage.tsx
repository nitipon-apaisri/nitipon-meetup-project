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
        </div>
    );
};

export default EventPage;
