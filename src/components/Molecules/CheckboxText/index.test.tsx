import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckboxText from ".";

describe("checkboxtext test", () => {
  it("rendering checkboxtext", () => {
    render(
      <CheckboxText checked={true} text={"checkboxtext"} variant={"body2"} />
    );
    const checkboxtext = screen.getByText("checkboxtext");
    expect(checkboxtext).toBeInTheDocument();
    expect(checkboxtext).toHaveStyle(
      "padding: '0px', gap:'8px', display: 'flex' "
    );
    expect(checkboxtext).toHaveTextContent("checkboxtext");
  });
});
