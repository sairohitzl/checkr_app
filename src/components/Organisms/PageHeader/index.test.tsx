import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PageHeader from ".";

describe("pageheader test", () => {
  it("render pageheader", () => {
    render(<PageHeader title="header" />);
    const pageheader = screen.getByText("header");
    expect(pageheader).toBeInTheDocument();
  });
});
