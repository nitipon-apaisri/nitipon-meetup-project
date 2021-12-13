import MostInterestedEvents from "../../componets/MostInterestedEvents/MostInterestedEvents";
import UpcomingEvents from "../../componets/UpcomingEvents/UpcomingEvents";
const Overview = () => {
    return (
        <div className="overview-container">
            <h1>Overview</h1>
            <div>
                <div className="most-interested">
                    <MostInterestedEvents />
                    <UpcomingEvents />
                </div>
            </div>
        </div>
    );
};

export default Overview;
