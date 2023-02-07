import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import IconButton from ".";

test("testing iconbutton", () => {
  const { getByTestId } = render(<IconButton icon="add" variant="hover" />);

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const id = getByTestId("iconbutton");
  expect(id).toBeInTheDocument();
});
