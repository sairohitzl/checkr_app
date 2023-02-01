import { Box, Divider, Stack } from "@mui/material";
import {
  GridFilterModel,
  GridLinkOperator,
  useGridApiContext,
} from "@mui/x-data-grid";
import { count } from "console";
import React, { useEffect, useState } from "react";
import { Item } from "semantic-ui-react";
import theme from "../../../theme/theme";
import CheckBox from "../../Atoms/Checkbox";
import Typography from "../../Atoms/Typography";

type FilterMenuProps = {
  setFilter: (
    model: GridFilterModel,
    reason?:
      | "restoreState"
      | "upsertFilterItem"
      | "upsertFilterItems"
      | "deleteFilterItem"
      | "changeLogicOperator"
      | undefined
  ) => void;
  filterval1: string;
  setFilterval1: React.Dispatch<React.SetStateAction<string>>;
  filterval2: string;
  setFilterval2: React.Dispatch<React.SetStateAction<string>>;
};

const FilterMenu = (props: FilterMenuProps) => {
  const [filterOptions1, setFilterOptions1] = useState([
    { text: "All Status", checked: false },
    { text: "Clear", checked: false },
    { text: "Consider", checked: false },
  ]);
  const [filterOptions2, setFilterOptions2] = useState([
    { text: "All", checked: false },
    { text: "Engage", checked: false },
    { text: "Adverse action", checked: false },
  ]);
  const [finalFilter, setFinalFilter] = useState<GridFilterModel>({
    items: [],
  });
  useEffect(() => {
    applyFilter();
  }, [finalFilter]);
  const handleChangeFilterVal1 = (id: number) => {
    filterOptions1.map((item) => {
      item.checked = false;
    });
    filterOptions1[id].checked = true;
    setFilterOptions1(filterOptions1);
    setFinalFilter({
      items: [
        {
          id: 1,
          columnField: "status",
          value:
            filterOptions1[id].text === "All Status"
              ? ""
              : filterOptions1[id].text,
          operatorValue: "contains",
        },
      ],
    });
  };
  const handleChangeFilterVal2 = (id: number) => {
    filterOptions2.map((item) => {
      item.checked = false;
    });
    filterOptions2[id].checked = true;
    setFilterOptions2(filterOptions2);
    setFinalFilter({
      items: [
        {
          id: 2,
          columnField: "adjudication",
          value:
            filterOptions2[id].text === "All" ? "" : filterOptions2[id].text,
          operatorValue: "contains",
        },
      ],
    });
  };
  const applyFilter = () => {
    props.setFilter(finalFilter);
  };

  return (
    <Box
      sx={{
        borderRadius: "6px",
        display: "flex",
        flexDirection: "column",
        background: theme.palette.other.white,
        zIndex: "7 !important",
      }}
    >
      <Box padding={"12px 16px"}>
        <Typography variant="body1" fontWeight={"bold"}>
          Filters
        </Typography>
      </Box>
      <Divider />
      <Stack padding={"16px"} rowGap={1}>
        <Typography
          variant="body1"
          fontWeight={"bold"}
          color={theme.palette.text.secondary}
        >
          Status
        </Typography>
        {filterOptions1.map((item, index) => (
          <Stack direction={"row"} columnGap={1}>
            <Item>
              <CheckBox
                // color={theme.palette.other.stroke}
                checked={item.checked}
                onChange={() => {
                  handleChangeFilterVal1(index);
                }}
              />
            </Item>
            <Item>
              <Typography variant="caption2">{item.text}</Typography>
            </Item>
          </Stack>
        ))}
      </Stack>
      <Stack padding={"16px"} rowGap={1}>
        <Typography
          variant="body1"
          fontWeight={"bold"}
          color={theme.palette.text.secondary}
        >
          Adjudication
        </Typography>
        {filterOptions2.map((item, index) => (
          <Stack direction={"row"} columnGap={1}>
            <Item>
              <CheckBox
                // color={theme.palette.other.stroke}
                checked={item.checked}
                onChange={() => handleChangeFilterVal2(index)}
              />
            </Item>
            <Item>
              <Typography variant="caption2">{item.text}</Typography>
            </Item>
          </Stack>
        ))}
      </Stack>
    </Box>
  );
};

export default FilterMenu;
