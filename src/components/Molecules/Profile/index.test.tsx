import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ProfileTab from ".";

describe("profiletab test", () => {
  it("render profile", () => {
    render(<ProfileTab name="john smith" email="jsmith@gmail.com" />);
    const profiletab = screen.getByText("john smith");
    expect(profiletab).toBeInTheDocument();
  });
});
