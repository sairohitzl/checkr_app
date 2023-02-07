import renderer from "react-test-renderer";
import "@testing-library/jest-dom";
import IconText from ".";
import { render, screen } from "@testing-library/react";

test("Testing IconText Snapshots", () => {
  const tree = renderer
    .create(<IconText icon={"Logout"} title={"John"} active={true} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
describe("Testing IconText", () => {
  it("render iconText", () => {
    render(<IconText title={"Candidates"} icon={"Copy"} active={true} />);
    const button = screen.getByText("Candidates");
    expect(button).toBeInTheDocument();
    expect(button).toHaveStyle(
      "padding: '12px', background-color: '#EFF2FF', border-radius: '6px'"
    );
  });
});
