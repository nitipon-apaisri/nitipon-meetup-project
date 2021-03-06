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
        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.type(usernameInput, "admin");
        userEvent.type(passwordInput, "admin");
        userEvent.click(screen.getByTestId("signInBTN"));
        expect(usernameInput).toHaveValue("admin");
        expect(passwordInput).toHaveValue("admin");
    });
    it("Test Sign In", async () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        );
        const usernameInput = screen.getByRole("textbox", { name: /username/i });
        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.type(usernameInput, "user");
        userEvent.type(passwordInput, "user");
        userEvent.click(screen.getByTestId("signInBTN"));
        const errorMsg = screen.queryByText("Something went wrong! Please check the inputs");
        expect(errorMsg).not.toBeInTheDocument();
    });
    it("Test error message when any input is empty or username/password is wrong", () => {
        render(
            <BrowserRouter>
                <SignIn />
            </BrowserRouter>
        );
        const usernameInput = screen.getByRole("textbox", { name: /username/i });
        const passwordInput = screen.getByLabelText(/password/i);
        userEvent.type(usernameInput, "");
        userEvent.type(passwordInput, "admin");
        userEvent.click(screen.getByTestId("signInBTN"));
        const errorMsg = screen.getByText(/something went wrong! Please check the inputs/i);
        expect(errorMsg).toBeInTheDocument();
    });
});
