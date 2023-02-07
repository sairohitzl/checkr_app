import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconTextButton from ".";

describe("icontextbutton test", () => {
  it("rendering icontextbutton", () => {
    render(<IconTextButton icon="add" label="addpeople" variant="primary" />);

    const icontextbutton = screen.getByText("addpeople");
    expect(icontextbutton).toBeInTheDocument();
    expect(icontextbutton).toHaveStyle(
      "padding: '8px 16px', textTransform: 'none' "
    );
  });
});
