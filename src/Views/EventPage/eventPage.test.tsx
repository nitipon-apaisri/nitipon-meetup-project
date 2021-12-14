import { screen } from "@testing-library/react";
import { eventsDB } from "../../db/events";
import { renderWithPath } from "../../testing-utils";
import EventPage from "./EventPage";
describe("Event page", () => {
    it("Render event page without errors", async () => {
        renderWithPath("/event/1", <EventPage />, "/event/:id");
    });
    it("Render event description", async () => {
        renderWithPath("/event/1", <EventPage />, "/event/:id");
        const description = eventsDB[0].description;
        const informationTitle = await screen.findByText(new RegExp(description));
        expect(informationTitle).toBeInTheDocument();
    });
});
