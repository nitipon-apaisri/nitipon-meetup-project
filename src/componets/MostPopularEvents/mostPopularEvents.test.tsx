// import { render, screen } from "@testing-library/react";
// import { eventsDB } from "../../db/events";
import { shallow } from "enzyme";
import MostPopularEvents from "./MostPopularEvents";
describe("Overview", () => {
    it("Render without error", () => {
        shallow(<MostPopularEvents />);
    });
});
