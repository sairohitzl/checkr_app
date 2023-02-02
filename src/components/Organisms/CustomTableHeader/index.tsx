import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  ClickAwayListener,
  Grow,
  InputAdornment,
  Paper,
  Popper,
} from "@mui/material";

import { useGridApiContext, GridToolbarQuickFilter } from "@mui/x-data-grid";
import React, { useState } from "react";
import theme from "../../../theme/theme";
import MyIcon from "../../Atoms/MyIcon";
import Typography from "../../Atoms/Typography";
import IconButton from "../../Molecules/IconButton";

import FilterMenu from "../FilterMenu";

type CustomTableHeaderProps = {};

const CustomTableHeader = (props: CustomTableHeaderProps) => {
  const [filterval1, setFilterval1] = useState("");
  const [filterval2, setFilterval2] = useState("");
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);
  const apiRef = useGridApiContext();
  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return;
    }

    setOpen(false);
  };

  return (
    <Box
      sx={{
        padding: "12px 16px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Typography variant={"subtitle1"}>Candidates</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          columnGap: 1,
        }}
      >
        <GridToolbarQuickFilter
          placeholder="Search any candidate"
          sx={{
            border: "1px solid #E5E7ED",
            borderRadius: "4px",
            padding: "4px 8px",
          }}
          InputProps={{
            disableUnderline: true,
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <Button
          ref={anchorRef}
          id="composition-button"
          aria-controls={open ? "composition-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          startIcon={<MyIcon icon="filter" />}
          onClick={handleToggle}
          sx={{
            color: theme.palette.text.secondary,
            textTransform: "none",
            border: "1px solid #E5E7ED",
            padding: " 8px 16px",
            borderRadius: "4px",
          }}
        >
          <Typography>Filter</Typography>
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          placement="bottom-start"
          transition
          disablePortal
          sx={{
            zIndex: 1,
          }}
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom-start" ? "left top" : "left bottom",
              }}
            >
              <Paper elevation={2}>
                <ClickAwayListener onClickAway={handleClose}>
                  <FilterMenu
                    setFilter={apiRef.current.setFilterModel}
                    filterval1={filterval1}
                    setFilterval1={setFilterval1}
                    filterval2={filterval2}
                    setFilterval2={setFilterval2}
                  />
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
        <Box sx={{ border: "1px solid #E5E7ED", borderRadius: "4px" }}>
          <IconButton icon={"more"} variant={"secondary"} />
        </Box>
      </Box>
    </Box>
  );
};

export default CustomTableHeader;
