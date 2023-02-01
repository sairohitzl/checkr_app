import {
    Box,
    FormControl,
    InputLabel,
    Select,
    MenuItem,
    Pagination,
    Stack,
    SelectChangeEvent,
  } from "@mui/material";
  import {
    gridPageCountSelector,
    gridPageSelector,
    useGridApiContext,
    useGridSelector,
    gridPageSizeSelector,
  } from "@mui/x-data-grid";

  import React from "react";
import { Item } from "semantic-ui-react";
import theme from "../../../theme/theme";

type CustomTableFooterProps = {};

const CustomTableFooter = (props:CustomTableFooterProps) => {
    const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);
  const pageSize = useGridSelector(apiRef, gridPageSizeSelector);
  const handleChange = (event: SelectChangeEvent) => {
    apiRef.current.setPageSize(parseInt(event.target.value));

  };
  const maxElements = 25;
const currentlyFilled = Math.min(maxElements,pageSize * (page+1));


  return(
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        padding: "12px 16px",
        alignItems: "center",
      }}
    >   
    <Stack direction={"row"} columnGap={1} alignItems={"center"}>
    <Item>{`${currentlyFilled} out of ${maxElements} results`}</Item>
      <Item>
      <FormControl fullWidth size="small">
      <InputLabel id="demo-simple-select-label"></InputLabel>
      <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={pageSize.toString()}
              defaultValue="10"
              onChange={handleChange}
            >
                <MenuItem value={10}>10</MenuItem>
              <MenuItem value={20}>20</MenuItem>
              <MenuItem value={30}>30</MenuItem>
            </Select>
            </FormControl>
      </Item>
      <Item>per page</Item>
    </Stack>
    <Pagination
    color="standard"
    count={pageCount}
    page={page + 1}
    shape="rounded"
    onChange={(event, value) => apiRef.current.setPage(value - 1)}
    sx={{
        "& .MuiPaginationItem-root": {
          "&.Mui-selected": {
            background: theme.palette.primary["300"],
            color: theme.palette.primary["500"],
          },
        },
      }}
      />
    </Box>
  );

};

export default  CustomTableFooter