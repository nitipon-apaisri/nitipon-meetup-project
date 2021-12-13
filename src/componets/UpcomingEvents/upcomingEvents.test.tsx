import { render, screen } from "@testing-library/react";
import UpcomingEvents from "./UpcomingEvents";

describe("Overview", () => {
    it("List the most top 3 interest events", () => {
        render(<UpcomingEvents />);
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(3);
    });
    it("2nd evnet of the list", () => {
        render(<UpcomingEvents />);
        const items = screen.getAllByRole("listitem");
        expect(items[1]).toContainHTML(`${items[1].title}`);
    });
});
