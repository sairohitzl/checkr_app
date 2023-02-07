import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import CustomTag from ".";
import { theme } from "../../../theme/theme";

describe("Chip tests", () => {
  it("render CLEAR chip", () => {
    render(<CustomTag title={"CLEAR"} type={"green"} />);
    const chip = screen.getByText("CLEAR");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(
      `padding:'4px 12px',border-radius:'4px', background-color: rgb(242, 244, 252)`
    );
  });
  it("render ENGAGE chip", () => {
    render(<CustomTag title={"ENGAGE"} type={"blue"} />);
    const chip = screen.getByText("ENGAGE");
    expect(chip).toBeInTheDocument();
    expect(chip).toHaveStyle(
      `padding:'4px 12px',border-radius:'4px', background-color: rgb(160, 136, 23)`
    );
  });
});
