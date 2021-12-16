// import { render, screen } from "@testing-library/react";
// import { eventsDB } from "../../db/events";
import { shallow } from "enzyme";
import MostInterestedEvents from "./MostInterestedEvents";
describe("Overview", () => {
    it("Render without error", () => {
        shallow(<MostInterestedEvents />);
    });
});
