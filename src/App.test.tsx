import { screen } from "@testing-library/react";
import { renderWithRouter } from "./testing-utils";
// import userEvent from "@testing-library/user-event";
import Home from "./Pages/Home/Home";

describe("App", () => {
    it("Total items", () => {
        renderWithRouter(<Home />);
        const items = screen.getAllByRole("listitem");
        expect(items).toHaveLength(12);
    });
});
