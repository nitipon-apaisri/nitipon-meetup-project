import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NavigationBar from "../../componets/NavigationBar/NavigationBar";
import { eventsDB } from "../../db/events";
import { users, joinTheEvent, declineTheEvent } from "../../db/users";
import { AuthContext } from "../../store/authContext";
const EventPage = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const eventId = useParams();
    const [join, setJoin] = useState(false);
    const [userIndex, setUserIndex] = useState(Number);
    const eventIndex = eventsDB.findIndex((r: any) => {
        return r.id === eventId.id;
    });
    const submitToTheEvent = () => {
        if (authContext.auth) {
            joinTheEvent(userIndex, eventsDB[eventIndex].title);
            setJoin(true);
        }
    };
    const declineToTheEvent = () => {
        declineTheEvent(userIndex, eventsDB[eventIndex].title);
        setJoin(false);
    };
    useEffect(() => {
        if (authContext.auth) {
            const validateUser = users.findIndex((r) => {
                return r.username === authContext.user.authUsername;
            });
            if (validateUser !== -1) {
                const userPosition = users.findIndex((r) => {
                    return r.username === authContext.user.authUsername;
                });
                setUserIndex(userPosition);
                users[userIndex].joins.find((r) => {
                    if (r === eventsDB[eventIndex].title) {
                        setJoin(true);
                        console.log("JOINED");
                    }
                    return 0;
                });
            } else {
                navigate("/");
            }
        }
    }, [authContext, userIndex, join, eventIndex, navigate]);
    return (
        <div className="event-container">
            <NavigationBar />
            <div className="event-wrapper">
                <div className="event-header">
                    <div className="event-title">
                        <h1>{eventsDB[eventIndex].title}</h1>
                        <p>Publiced:</p>
                    </div>
                    <button>
                        <p>Remind Me</p>
                    </button>
                </div>
                <div className="event-img-cover" style={{ backgroundImage: `url(${eventsDB[eventIndex].imgCover})` }}>
                    <div className="event-info">
                        <div className="info-title">
                            <h3>INFO</h3>
                        </div>
                        <hr />
                        <div className="event-date">
                            <p data-testid="date">{eventsDB[eventIndex].date.dateInfo}</p>
                            <p>{eventsDB[eventIndex].date.time}</p>
                            <p data-testid="location">{`${eventsDB[eventIndex].location.street}, ${eventsDB[eventIndex].location.city}, ${eventsDB[eventIndex].location.country}`}</p>
                        </div>
                        <hr />
                        <button onClick={join ? declineToTheEvent : submitToTheEvent}>
                            <p>{join ? "DECLINE TO THE MEETUP" : "JOIN THE MEETUP!"}</p>
                        </button>
                    </div>
                </div>
                <hr />
                <div className="information">
                    <div className="description">
                        <h2>ABOUT</h2>
                        <hr />
                        <p data-testid="description">{eventsDB[eventIndex].description.full}</p>
                    </div>
                    <div className="side-info">
                        <div className="side-info-card join">
                            <h2>JOIN</h2>
                            <hr />
                            <h4 data-testid="join-total">{eventsDB[eventIndex].join.length} PEOPLE</h4>
                        </div>
                        <div className="side-info-card interesting">
                            <h2>Interesting</h2>
                            <hr />
                            <h4 data-testid="interesting-total">{eventsDB[eventIndex].interested.length} PEOPLE</h4>
                        </div>
                    </div>
                </div>
                {/* <div className="feedback">
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
                </div> */}
            </div>
        </div>
    );
};

export default EventPage;
