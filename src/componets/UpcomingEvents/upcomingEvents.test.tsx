import { render, screen } from "@testing-library/react";
import { eventsDB } from "../../db/events";
import UpcomingEvents from "./UpcomingEvents";

describe("Overview", () => {
    it("List the most top 3 interest events", () => {
        render(<UpcomingEvents />);
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(3);
    });
    it("2nd event", () => {
        render(<UpcomingEvents />);
        const event = screen.getByTestId("event-0");
        expect(event).toHaveTextContent(`${eventsDB[0].title}`);
    });
});
