import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { shallow } from "enzyme";
import { BrowserRouter } from "react-router-dom";
import { users } from "../../db/users";
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
    it("Test display error message", () => {
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
        const errorMsg = screen.getByText(/please fill the inputs/i);
        expect(errorMsg).toBeInTheDocument();
    });
    // it("Test add a new user", async () => {
    //     render(
    //         <BrowserRouter>
    //             <SignUp />
    //         </BrowserRouter>
    //     );
    //     const firstName = screen.getByLabelText("firstName");
    //     const lastName = screen.getByLabelText("lastName");
    //     const username = screen.getByLabelText("username");
    //     const password = screen.getByLabelText("password");
    //     userEvent.type(firstName, "Miyachi");
    //     userEvent.type(lastName, "Chuni");
    //     userEvent.type(username, "Miyachi");
    //     userEvent.type(password, "Chuni");
    //     userEvent.click(screen.getByTestId("signUpBTN"));
    //     await waitFor(() => {
    //         const lastestUser = users.length - 1;
    //         // expect(users[lastestUser].username).toEqual("Miyachi");
    //         console.log(users);
    //     });
    // });
});
