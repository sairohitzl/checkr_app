import { Button } from "@mui/material";
import theme from "../../../theme/theme";
import MyIcon from "../../Atoms/MyIcon";
import Typography from "../../Atoms/Typography";

export type IconTextButtonProps = {
  icon: string;
  label: string;
  variant: "primary" | "secondary" | "hover";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const IconTextButton = (props: IconTextButtonProps) => {
  const { icon, label, variant, onClick } = props;
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
      onClick={onClick}
      sx={{
        padding: "8px 16px",
        textTransform: "none",
        background: selectBackgroundColor(variant),
        border:
          variant === "secondary"
            ? `1px solid ${theme.palette.other.stroke}`
            : "none",
      }}
      startIcon={
        <MyIcon
          icon={icon}
          colour={
            variant === "secondary"
              ? theme.palette.other.icon1
              : theme.palette.other.white
          }
        />
      }
    >
      <Typography
        variant="body1"
        color={
          variant === "secondary"
            ? theme.palette.other.icon1
            : theme.palette.other.white
        }
      >
        {label}
      </Typography>
    </Button>
  );
};

export default IconTextButton;
