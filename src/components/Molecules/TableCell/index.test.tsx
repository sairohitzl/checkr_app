import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import CustomTableCell from ".";

describe("table cell test", () => {
  it("render button", () => {
    render(<CustomTableCell variant="interactivetext" text="TableCell" />);
    const tablecell = screen.getByText("TableCell");
    expect(tablecell).toBeInTheDocument();
    expect(tablecell).toHaveStyle("background-color: 'rgb(34, 77, 255)'");
  });
});
