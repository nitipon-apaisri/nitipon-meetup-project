import { renderWithRouter } from "./testing-utils";
// import userEvent from "@testing-library/user-event";
import Home from "./Pages/Home/Home";

describe("App", () => {
    it("Render without error", () => {
        renderWithRouter(<Home />);
    });
});
