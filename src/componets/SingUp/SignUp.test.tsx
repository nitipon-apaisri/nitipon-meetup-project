import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import SignUp from "./SignUp";
describe("Sing In test", () => {
    it("Render component without error", () => {
        shallow(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        );
    });
    it("Test inputs", async () => {
        render(
            <BrowserRouter>
                <SignUp />
            </BrowserRouter>
        );
        const firstName = screen.getByLabelText("firstName");
        const lastName = screen.getByLabelText("lastName");
        userEvent.type(firstName, "Miyachi");
        userEvent.type(lastName, "Chuni");
        userEvent.click(screen.getByTestId("signUpBTN"));
        expect(firstName).toHaveValue("Miyachi");
        expect(lastName).toHaveValue("Chuni");
    });
});
