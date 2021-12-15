import Hero from "../../componets/Hero/Hero";
import MostInterestedEvents from "../../componets/MostInterestedEvents/MostInterestedEvents";
import MostRatedEvents from "../../componets/MostRatedEvents/MostRatedEvents";
import NavigationBar from "../../componets/NavigationBar/NavigationBar";
import UpcomingEvents from "../../componets/UpcomingEvents/UpcomingEvents";
const Overview = () => {
    return (
        <div className="wrapper">
            <NavigationBar />
            <div className="contents-container">
                <Hero />
                <hr className="home-hr" />
                <div>
                    <div className="most-interested">
                        <MostInterestedEvents />
                        <UpcomingEvents />
                        <MostRatedEvents />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Overview;
