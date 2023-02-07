import { Box } from "@mui/material";
import { DataGrid, GridFilterModel, GridLinkOperator } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";
import theme from "../../../theme/theme";
import CandidateType from "../../../utils/candidate";
import Typography from "../../Atoms/Typography";
import CustomTag from "../../Molecules/CustomTag";
import CustomTableHeader from "../CustomTableHeader";
import CustomTableFooter from "../CustomTableFooter";
import {
  candidatesTableList,
  headerNames,
  headerVals,
} from "../../../utils/constants";
import { getCandidates } from "../../../utils/service";

type CandidateTableProps = {
  navigate?: NavigateFunction;
};

const CandidateTable = (props: CandidateTableProps) => {
  // const navigate = props.navigate!;
  const navigate = useNavigate();
  const [pageSize, setPageSize] = React.useState<number>(10);
  const [candidatesList, setcandidatesList] = useState<CandidateType[]>([]);

  const handleNavigate = (id: any) => {
    if (id != null) {
      navigate("/candidateDetails/" + id);
    }
  };
  useEffect(() => {
    getCandidates().then((res) => setcandidatesList(res));
  }, []);

  return (
    <Box sx={{ height: "90vh", width: "77vw" }}>
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
        hideFooterPagination
        columns={[
          {
            field: "name",
            headerName: "NAME",
            width: 150,
            sortable: false,
            disableColumnMenu: true,
            renderHeader(params) {
              return (
                <Typography
                  variant="caption1"
                  color={theme.palette.text.secondary}
                  fontWeight="400"
                >
                  {params.field.toUpperCase()}
                </Typography>
              );
            },
            renderCell(params) {
              return (
                <Box
                  sx={{ cursor: "pointer" }}
                  onClick={() => {
                    handleNavigate(params.id);
                  }}
                >
                  <Typography
                    variant="body2"
                    fontWeight={400}
                    color={theme.palette.primary["500"]}
                  >
                    {params.value.toString()}
                  </Typography>
                </Box>
              );
            },
          },
          {
            field: headerVals[1],
            headerName: headerNames.adjudication,
            width: 220,
            sortable: false,
            disableColumnMenu: true,
            renderHeader(params) {
              return (
                <Typography
                  variant="caption1"
                  color={theme.palette.text.secondary}
                  fontWeight="400"
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
            field: headerVals[2],
            headerName: headerNames.status,
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
            field: headerVals[3],
            headerName: headerNames.location,
            width: 220,
            sortable: false,
            disableColumnMenu: true,
            renderHeader(params) {
              return (
                <Typography
                  variant="caption1"
                  color={theme.palette.text.secondary}
                  fontWeight="400"
                >
                  {params.field.toUpperCase()}
                </Typography>
              );
            },
            renderCell(params) {
              return (
                <Typography fontWeight={400} variant="body2">
                  {params.value}
                </Typography>
              );
            },
          },
          {
            field: headerVals[4],
            headerName: headerNames.date,
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
                  fontWeight="400"
                >
                  {params.field.toUpperCase()}
                </Typography>
              );
            },
            renderCell(params) {
              return (
                <Typography fontWeight={400} variant="body2">
                  {params.value}
                </Typography>
              );
            },
          },
        ]}
        rows={candidatesList}
      />
    </Box>
  );
};

export default CandidateTable;
