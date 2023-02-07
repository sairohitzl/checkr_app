import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import MyIcon from ".";

test("testing myicon", () => {
  const { getByTestId } = render(<MyIcon icon="add" colour="blue" />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const id = getByTestId("myicon");
  expect(id).toBeInTheDocument();
});
