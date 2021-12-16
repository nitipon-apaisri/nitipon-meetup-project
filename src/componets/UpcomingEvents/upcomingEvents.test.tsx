// import { render, screen } from "@testing-library/react";
// import { eventsDB } from "../../db/events";
import UpcomingEvents from "./UpcomingEvents";
import { shallow } from "enzyme";
describe("Overview", () => {
    it("Render without error", () => {
        shallow(<UpcomingEvents />);
    });
});
