import { Box } from "@mui/material";
import { DataGrid, GridFilterModel, GridLinkOperator } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import theme from "../../../theme/theme";
import CandidateType from "../../../utils/candidate";
import Typography from "../../Atoms/Typography";
import CustomTag from "../../Molecules/CustomTag";
import CustomTableHeader from "../CustomTableHeader";
import CustomTableFooter from "../CustomTableFooter";
import { candidatesTableList } from "../../../utils/constants";

type CandidateTableProps = {};

const CandidateTable = (props: CandidateTableProps) => {
  const [pageSize, setPageSize] = React.useState<number>(10);
  const [candidatesList, setcandidatesList] = useState<CandidateType[]>([]);
  useEffect(() => {
    setcandidatesList(candidatesTableList);
  }, []);

  return (
    <Box sx={{ height: "700px", width: "100%" }}>
      <DataGrid
        sx={{
          backgroundColor: theme.palette.other.white,
          boxShadow: "0px 4px 28px rgba(45, 45, 47, 0.1)",
          borderRadius: "6px",
          border: "none",
          "& .MuiDataGrid-columnSeparator": {
            display: "none",
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.primary["100"],
          },
        }}
        components={{
          Footer: CustomTableFooter,
          Header: CustomTableHeader,
        }}
        pageSize={pageSize}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        columns={[
          {
            field: "name",
            headerName: "NAME",
            width: 220,
            sortable: false,
            disableColumnMenu: true,
            renderHeader(params) {
              return (
                <Typography
                  variant="caption1"
                  color={theme.palette.text.secondary}
                >
                  {params.field.toUpperCase()}
                </Typography>
              );
            },
            renderCell(params) {
              return (
                <Box sx={{ cursor: "pointer" }} onClick={() => {}}>
                  <Typography
                    variant="body2"
                    color={theme.palette.primary["500"]}
                  >
                    {params.value.toString()}
                  </Typography>
                </Box>
              );
            },
          },
          {
            field: "adjudication",
            headerName: "ADJUDICATION",
            width: 220,
            sortable: false,
            disableColumnMenu: true,
            renderHeader(params) {
              return (
                <Typography
                  variant="caption1"
                  color={theme.palette.text.secondary}
                >
                  {params.field.toUpperCase()}
                </Typography>
              );
            },
            renderCell(params) {
              return params.value.toString() === "-" ? (
                <Typography>{params.value}</Typography>
              ) : (
                <CustomTag
                  title={params.value}
                  type={params.value === "ENGAGE" ? "green" : "yellow"}
                />
              );
            },
          },
          {
            field: "status",
            headerName: "STATUS",
            width: 220,
            sortable: false,
            disableColumnMenu: true,
            renderHeader(params) {
              return (
                <Typography
                  variant="caption1"
                  color={theme.palette.text.secondary}
                >
                  {params.field.toUpperCase()}
                </Typography>
              );
            },
            renderCell(params) {
              return (
                <CustomTag
                  title={params.value}
                  type={params.value === "CLEAR" ? "green" : "yellow"}
                />
              );
            },
          },
          {
            field: "location",
            headerName: "LOCATION",
            width: 220,
            sortable: false,
            disableColumnMenu: true,
            renderHeader(params) {
              return (
                <Typography
                  variant="caption1"
                  color={theme.palette.text.secondary}
                >
                  {params.field.toUpperCase()}
                </Typography>
              );
            },
            renderCell(params) {
              return <Typography>{params.value}</Typography>;
            },
          },
          {
            field: "date",
            headerName: "DATE",
            headerAlign: "right",
            width: 220,
            align: "right",
            sortable: false,
            disableColumnMenu: true,
            renderHeader(params) {
              return (
                <Typography
                  variant="caption1"
                  color={theme.palette.text.secondary}
                >
                  {params.field.toUpperCase()}
                </Typography>
              );
            },
            renderCell(params) {
              return <Typography>{params.value}</Typography>;
            },
          },
        ]}
        rows={candidatesList}
      />
    </Box>
  );
};

export default CandidateTable;
