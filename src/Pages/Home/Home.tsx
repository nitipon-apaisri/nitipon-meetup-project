import HowToBanner from "../../componets/AnnouncementBanner/HowToBanner";
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
                <MostInterestedEvents />
                <hr className="home-hr" />
                <HowToBanner />
                <hr className="home-hr" />
                <UpcomingEvents />
                <hr className="home-hr" />
                <MostRatedEvents />
            </div>
        </div>
    );
};

export default Overview;
