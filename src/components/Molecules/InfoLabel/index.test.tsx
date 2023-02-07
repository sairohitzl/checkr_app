import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import InfoLabel from ".";

describe("InfoLabel test", () => {
  it("render infolabel", () => {
    render(<InfoLabel title="Candidates" />);
    const infolabel = screen.getByText("Candidates");
    expect(infolabel).toBeInTheDocument();
    expect(infolabel).toHaveStyle(
      `padding: '16px', justifyContent: "space-between", borderRadius: "8px" `
    );
  });
  it("render infoTitle with icon", () => {
    render(<InfoLabel title={"Candidates"} icon={"backArrow"} />);
    const infolabel = screen.getByText("Candidates");
    expect(infolabel).toBeInTheDocument();
    expect(infolabel).toHaveStyle(
      `padding: '16px', justifyContent: "space-between", borderRadius: "8px" `
    );
  });
});
