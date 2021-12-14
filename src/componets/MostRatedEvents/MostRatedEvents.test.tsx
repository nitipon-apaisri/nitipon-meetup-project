import { render, screen } from "@testing-library/react";
import MostRatedEvents from "./MostRatedEvents";
import { eventsDB } from "../../db/events";

describe("Overview", () => {
    it("List the most top 3 interest events", () => {
        render(<MostRatedEvents />);
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(3);
    });
    it("2nd event", () => {
        render(<MostRatedEvents />);
        const event = screen.getByTestId("event-0");
        expect(event).toHaveTextContent(`${eventsDB[0].title}`);
    });
});
