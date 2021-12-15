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
    it("Render event joined", async () => {
        renderWithPath("/event/1", <EventPage />, "/event/:id");
        const joined = screen.getByTestId("joined-total");
        expect(joined).toHaveTextContent("4");
    });
    it("Render feedback list", async () => {
        renderWithPath("/event/1", <EventPage />, "/event/:id");
        const items = screen.getAllByRole("listitem");
        const feedbackLength = eventsDB[0].feedback.length;
        expect(items).toHaveLength(feedbackLength);
    });
    it("Render event location", async () => {
        renderWithPath("/event/1", <EventPage />, "/event/:id");
        const location = screen.getByTestId("location");
        const localtionName = eventsDB[0].location.city;
        expect(location).toHaveTextContent(localtionName);
    });
    it("Render event date", async () => {
        renderWithPath("/event/1", <EventPage />, "/event/:id");
        const date = screen.getByTestId("date");
        const dateData = eventsDB[0].date;
        expect(date).toHaveTextContent(dateData);
    });
});
