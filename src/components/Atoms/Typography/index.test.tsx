import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import React from "react";
import Typography from ".";

describe("Typography tests", () => {
  it("render typography", () => {
    render(<Typography>test</Typography>);
    const text = screen.getByText("test");
    userEvent.click(text);
    expect(text).toBeInTheDocument();
  });
});
