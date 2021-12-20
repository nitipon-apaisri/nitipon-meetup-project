import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import SignIn from "./SignIn";
describe("Sing In test", () => {
    it("Render component without error", () => {
        shallow(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        );
    });
    it("Test inputs", async () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        );
        const usernameInput = screen.getByRole("textbox", { name: /username/i });
        userEvent.type(usernameInput, "admin");
        expect(usernameInput).toHaveValue("admin");
    });
});
