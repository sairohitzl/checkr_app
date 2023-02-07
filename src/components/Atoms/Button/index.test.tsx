import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ButtonElement from ".";
import React from "react";

describe("Button test", () => {
  it("rendering button", () => {
    render(<ButtonElement label="add" variant="primary" />);
    const button = screen.getByText("add");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle("background-color: '#224DFF' ");
  });
});
