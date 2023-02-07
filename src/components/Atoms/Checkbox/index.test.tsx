import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CheckBox from ".";

test("testing checkbox", () => {
  const { getByTestId } = render(<CheckBox />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const id = getByTestId("checkbox");
  expect(id).toBeInTheDocument();
});
