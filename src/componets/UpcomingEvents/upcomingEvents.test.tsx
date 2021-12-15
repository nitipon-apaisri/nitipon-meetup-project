import { render, screen } from "@testing-library/react";
import { eventsDB } from "../../db/events";
import UpcomingEvents from "./UpcomingEvents";

describe("Overview", () => {
    it("2nd event", () => {
        render(<UpcomingEvents />);
        const event = screen.getByTestId("event-0");
        expect(event).toHaveTextContent(`${eventsDB[0].title}`);
    });
});
