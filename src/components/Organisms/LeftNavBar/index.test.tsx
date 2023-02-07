import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import LeftNavBar from ".";
import { menuItems } from "../../../utils/constants";

test("testing left navbar", () => {
  const { getByTestId } = render(<LeftNavBar data={menuItems} />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const id = getByTestId("leftnavbar");
  expect(id).toBeInTheDocument();
});
