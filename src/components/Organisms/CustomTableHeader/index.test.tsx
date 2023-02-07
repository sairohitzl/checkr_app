import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import CustomTableHeader from ".";
import { DataGrid } from "@mui/x-data-grid";

test("testing candidate table", () => {
  const { getByTestId } = render(
    <DataGrid
      components={{
        Header: () => <CustomTableHeader />,
      }}
      columns={[]}
      rows={[]}
    />
  );

  // eslint-disable-next-line testing-library/prefer-screen-queries
  const id = getByTestId("tableheader");
  expect(id).toBeInTheDocument();
});
