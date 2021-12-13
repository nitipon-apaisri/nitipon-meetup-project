import { screen } from "@testing-library/react";
import { renderWithRouter } from "./testing-utils";
// import userEvent from "@testing-library/user-event";
import Overview from "./Views/Overview/Overview";

describe("App", () => {
    it("Total items", () => {
        renderWithRouter(<Overview />);
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(9);
    });
});
