import MostInterestedEvents from "../../componets/MostInterestedEvents/MostInterestedEvents";
import MostRatedEvents from "../../componets/MostRatedEvents/MostRatedEvents";
import UpcomingEvents from "../../componets/UpcomingEvents/UpcomingEvents";
const Overview = () => {
    return (
        <div className="overview-container">
            <h1>Overview</h1>
            <div>
                <div className="most-interested">
                    <MostInterestedEvents />
                    <UpcomingEvents />
                    <MostRatedEvents />
                </div>
            </div>
        </div>
    );
};

export default Overview;
