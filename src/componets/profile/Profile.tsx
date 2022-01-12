import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { AuthContext } from "../../store/authContext";
import NavigationBar from "../NavigationBar/NavigationBar";
import { users } from "../../db/users";
const Profile = () => {
    const authContext = useContext(AuthContext);
    const navigate = useNavigate();
    const [userIndex, setUserIndex] = useState(Number);

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
        } else {
            navigate("/");
        }
    }, [authContext, userIndex, navigate]);
    return (
        <div className="profile-container">
            <NavigationBar />
            <div className="profile-wrapper">
                <div className="joining-list">
                    <div className="title">
                        <h1>JOINING</h1>
                        <p>
                            <em>( Sort By Date )</em>
                        </p>
                    </div>
                    <hr />
                    <div className="joining-events-list">
                        <div className="gallery">
                            {users[userIndex].joins
                                .sort((a, b) => (a.date.dateInfo > b.date.dateInfo ? 1 : -1))
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
                </div>
            </div>
        </div>
    );
};

export default Profile;
