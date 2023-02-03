import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonElement, { ButtonProps } from "../../Atoms/Button";
import MyIcon from "../../Atoms/MyIcon";
import Typography from "../../Atoms/Typography";
import IconTextButton, {
  IconTextButtonProps,
} from "../../Molecules/IconTextButton";

export type PageHeaderProps = {
  title: string;
  actions?: Array<JSX.Element>;
  leading?: boolean;
  leadingClick?: string;
};

const PageHeader = (props: PageHeaderProps) => {
  const { title, actions, leading, leadingClick } = props;
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        {leading! && (
          <Box sx={{ paddingRight: "10px", cursor: "pointer" }}>
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
