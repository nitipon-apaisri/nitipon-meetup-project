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
});
