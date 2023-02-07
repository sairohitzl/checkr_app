import React from "react";
import { Button } from "@mui/material";
import MyIcon from "../../Atoms/MyIcon";
import theme from "../../../theme/theme";
type Props = {
  icon: string;
  variant: "primary" | "secondary" | "hover";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const IconButton = (props: Props) => {
  const { icon, variant, onClick } = props;
  const selectBackgroundColor = (variant: string) => {
    if (variant === "primary") {
      return theme.palette.primary["500"];
    } else if (variant === "secondary") {
      return theme.palette.text.disabled;
    }
    return theme.palette.primary["600"];
  };

  return (
    <Button
      data-testid="iconbutton"
      onClick={onClick}
      style={{
        textTransform: "none",
        background: selectBackgroundColor(variant),
      }}
    >
      <MyIcon
        icon={icon}
        colour={
          variant == "secondary"
            ? theme.palette.text.secondary
            : theme.palette.text.disabled
        }
      />
    </Button>
  );
};

export default IconButton;
