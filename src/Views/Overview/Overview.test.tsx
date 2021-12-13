import { render, screen } from "@testing-library/react";
import Overview from "./Overview";

describe("Overview", () => {
    it("Overview", () => {
        render(<Overview />);
        const header = screen.getByText(/Overview/i);
        expect(header).toBeInTheDocument();
    });
});
