import { TypographyProps as MuiTypographyProps } from "@mui/material";
import { Typography as MuiTypography } from "@mui/material";

interface TypographyProps extends MuiTypographyProps {
  children?: string;
}

const Typography = (props: TypographyProps) => {
  const { children, variant, align, color, gutterBottom, ...rest } = props;
  return (
    <MuiTypography
      variant={variant}
      align={align}
      color={color}
      gutterBottom={gutterBottom}
      fontFamily="Inter"
      {...rest}
    >
      {children}
    </MuiTypography>
  );
};

export default Typography;
