import { render, screen } from "@testing-library/react";
import MostInterestedEvents from "./MostInterestedEvents";
import { eventsDB } from "../../db/events";
describe("Overview", () => {
    it("2nd event", () => {
        render(<MostInterestedEvents />);
        const event = screen.getByTestId("event-0");
        expect(event).toHaveTextContent(`${eventsDB[0].title}`);
    });
});
