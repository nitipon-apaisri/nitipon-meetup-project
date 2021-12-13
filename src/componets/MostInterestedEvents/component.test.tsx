import { render, screen } from "@testing-library/react";
import MostInterestedEvents from "./MostInterestedEvents";

describe("Overview", () => {
    it("List the most top 3 interest events", () => {
        render(<MostInterestedEvents />);
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(3);
    });
});
