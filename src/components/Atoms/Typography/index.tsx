import {
  Typography as MuiTypography,
  ThemeProvider,
  TypographyProps as MuiTypographyProps,
} from "@mui/material";
import theme from "../../../theme/theme";

interface TypographyProps extends MuiTypographyProps {
  children?: string;
}

const Typography = (props: TypographyProps) => {
  const { children, variant, align, color, gutterBottom, ...rest } = props;
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export default Typography;
