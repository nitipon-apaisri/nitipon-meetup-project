import { render, screen } from "@testing-library/react";
import MostRatedEvents from "./MostRatedEvents";

describe("Overview", () => {
    it("List the most top 3 interest events", () => {
        render(<MostRatedEvents />);
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(3);
    });
    it("2nd evnet of the list", () => {
        render(<MostRatedEvents />);
        const items = screen.getAllByRole("listitem");
        expect(items[1]).toContainHTML("<li>Javascript Hackaton</li>");
    });
});
