import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomTableFooter from ".";
import { DataGrid } from "@mui/x-data-grid";

test("testing candidate table", () => {
  const { getByTestId } = render(
    <DataGrid
      components={{
        Footer: () => <CustomTableFooter />,
      }}
      columns={[]}
      rows={[]}
    />
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const id = getByTestId("tablefooter");
  expect(id).toBeInTheDocument();
});
