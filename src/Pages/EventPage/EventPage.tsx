import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import NavigationBar from "../../componets/NavigationBar/NavigationBar";
import { addACommentToTheEvent, eventsDB } from "../../db/events";
import { users, joinTheEvent, declineTheEvent } from "../../db/users";
import { AuthContext } from "../../store/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays, faLocationPin } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const EventPage = () => {
    //Variable
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const eventId = useParams();
    const calendraDays = <FontAwesomeIcon icon={faCalendarDays} />;
    const clock = <FontAwesomeIcon icon={faClock} />;
    const locationPin = <FontAwesomeIcon icon={faLocationPin} />;
    const eventIndex = eventsDB.findIndex((r: any) => {
        return r.id === eventId.id;
    });

    //State
    const [join, setJoin] = useState(false);
    const [userIndex, setUserIndex] = useState(Number);
    const [comment, setComment] = useState("");
    const [loader, setLoader] = useState(false);
    //Functions
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

    const submitComment = () => {
        setLoader(true);
        addACommentToTheEvent(eventIndex, authContext.user.authUsername, comment);
        setComment("");
        setTimeout(() => {
            setLoader(false);
        }, 1000);
    };
    //Hooks
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
        } else if (sessionStorage.auth) {
            const founderUser = JSON.parse(sessionStorage.auth).user;
            const validateUser = users.findIndex((r) => {
                return r.username === founderUser.username;
            });
            if (validateUser !== -1) {
                authContext.singIn(
                    founderUser.username,
                    founderUser.password,
                    founderUser.firstName,
                    founderUser.lastName
                );
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
                            <div className="row">
                                <p>{calendraDays}</p>
                                <p data-testid="date">{eventsDB[eventIndex].date.dateInfo}</p>
                            </div>
                            <div className="row">
                                <p>{clock}</p>
                                <p>{eventsDB[eventIndex].date.time}</p>
                            </div>
                            <div className="row">
                                <p>{locationPin}</p>
                                <p data-testid="location">{`${eventsDB[eventIndex].location.street}, ${eventsDB[eventIndex].location.city}, ${eventsDB[eventIndex].location.country}`}</p>
                            </div>
                        </div>
                        <hr />
                        <button
                            onClick={join ? declineToTheEvent : submitToTheEvent}
                            className={join ? "decline" : "join"}
                        >
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
                            <h2>INTERESTING</h2>
                            <hr />
                            <h4 data-testid="interesting-total">{eventsDB[eventIndex].interested.length} PEOPLE</h4>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="feedback">
                    {authContext.auth && (
                        <div>
                            <div className="feedback-input">
                                <textarea
                                    name="feedback"
                                    value={comment}
                                    onChange={(e) => setComment(e.target.value)}
                                    rows={5}
                                ></textarea>
                                <button onClick={submitComment}>
                                    <p>SEND</p>
                                </button>
                            </div>
                            <span className="feedback-hr">
                                <hr />
                            </span>
                        </div>
                    )}
                    {loader && (
                        <div className="wait">
                            <div className="loader"></div>
                        </div>
                    )}
                    {!loader && (
                        <div className="feedback-list">
                            <ul aria-label="feedback">
                                {eventsDB[eventIndex].comments.map((item, index) => {
                                    return (
                                        <li className="item card" key={index}>
                                            <h4 className="user">{item.user}</h4>
                                            <hr />
                                            <p className="comment">{item.comment}</p>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventPage;
