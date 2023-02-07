import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import TableHeader from ".";

describe("tableheader test", () => {
  it("render tableheader", () => {
    render(<TableHeader leftAlign={false} text={"candidate"} />);
    const tableheader = screen.getByText("candidate");
    expect(tableheader).toBeInTheDocument();
  });
});
