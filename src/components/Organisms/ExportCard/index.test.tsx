import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import ExportCard from ".";
test("testing export card", () => {
  const { getByTestId } = render(
    <ExportCard open={true} handleClose={() => {}} />
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const id = getByTestId("exportcard");
  expect(id).toBeInTheDocument();
});
