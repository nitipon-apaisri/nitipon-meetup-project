import heroImg from "../../assets/img/hero.svg";
const Hero = () => {
    return (
        <div className="hero-container">
            <div className="description">
                <h1>Dive in! There are so many things to do on Meetup</h1>
                <p>
                    Join a group to meet people, make friends, find support, grow a business, and explore your
                    interests. Thousands of events are happening every day, both online and in person!
                </p>
            </div>

            <img src={heroImg} alt="hero-img" />
        </div>
    );
};

export default Hero;
