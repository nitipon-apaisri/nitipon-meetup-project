// import { render, screen } from "@testing-library/react";
// import { eventsDB } from "../../db/events";
import { shallow } from "enzyme";
import MostRatedEvents from "./MostRatedEvents";

describe("Overview", () => {
    it("Render without error", () => {
        shallow(<MostRatedEvents />);
    });
});
