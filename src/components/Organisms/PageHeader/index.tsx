import { Box } from "@mui/material";
import React from "react";
import { NavigateFunction } from "react-router-dom";

import MyIcon from "../../Atoms/MyIcon";
import Typography from "../../Atoms/Typography";

export type PageHeaderProps = {
  title: string;
  actions?: Array<JSX.Element>;
  leading?: boolean;
  leadingClick?: string;
  navigate?: NavigateFunction;
};

const PageHeader = (props: PageHeaderProps) => {
  const { title, actions, leading, leadingClick, navigate } = props;
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {leading! && (
          <Box
            sx={{ paddingRight: "10px", cursor: "pointer" }}
            onClick={() => {
              navigate!(leadingClick!);
            }}
          >
            <MyIcon icon="backArrow" />
          </Box>
        )}
        <Box>
          {" "}
          <Typography variant="h6">{title}</Typography>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {actions?.map((item: JSX.Element) => (
          <Box sx={{ paddingLeft: "10px" }}>{item}</Box>
        ))}
      </Box>
    </Box>
  );
};

export default PageHeader;
