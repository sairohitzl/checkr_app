import { createTheme } from "@mui/material";
declare module "@mui/material/styles" {
  interface PaletteColor {
    600: string;
    500: string;
    400: string;
    300: string;
    200: string;
    100: string;
  }

  interface CustomPalette {
    accent: {
      lightBlue: string;
      blue: string;
      lightGreen: string;
      green: string;
      lightYellow: string;
      yellow: string;
    };
    elevation: {
      color1: string;
      color2: string;
    };
    other: {
      white: string;
      stroke: string;
      icon1: string;
      icon2: string;
      secondary2: string;
      logo: string;
      emailbg: string;
      emailfg: string;
    };
  }

  interface CustomTypography {
    caption1: React.CSSProperties;
    caption2: React.CSSProperties;
  }

  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
  interface TypographyVariants extends CustomTypography {}
  interface TypographyVariantsOptions extends CustomTypography {}
}
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    caption1: true;
    caption2: true;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      "100": "#F7F7F9",
      "200": "#EFF2FF",
      "400": "#95AAFF",
      "500": "#224DFF",
      "600": "#1132B7",
    },
    text: {
      primary: "#2C2C2E",
      secondary: "#696A6E",
      disabled: "#FFFFFF",
    },
    grey: {
      "800": "#19181C",
      "700": "#727080",
      "600": "#413F4D",
      "500": "#E8E8E9",
      "400": "#FFFFFF",
      "100": "#262529",
      "200": "#3A3A3D",
      "300": "#28272B",
    },
    accent: {
      lightBlue: "#F2F4FC",
      blue: "#3E5FE2",
      lightGreen: "#F2FCFB",
      green: "#17A076",
      lightYellow: "#FAF8EB",
      yellow: "#A08817",
    },
    elevation: {
      color1: "#201F24",
      color2: "#2D2D30",
    },
    background: {
      default: "#040407",
    },
    other: {
      white: "#FFFFFF",
      stroke: "#E5E7ED",
      icon1: "#696A6E",
      icon2: "#3E414D",
      secondary2: "#818287",
      logo: "#2e0082",
      emailbg: "#FCE5EA",
      emailfg: "#994D5B",
    },
  },
  typography: {
    fontFamily: "Inter",
    h1: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: "1.875rem",
    },
    h2: {
      fontSize: "1.125rem",
      fontWeight: 500,
      lineHeight: "1.75rem",
    },
    body1: {
      fontSize: "0.875rem",
      fontWeight: 500,
      lineHeight: "1.25rem",
    },
    body2: {
      fontSize: "0.875rem",
      fontWeight: 400,
      lineHeight: "1.25rem",
    },
    subtitle1: {
      fontSize: "1rem",
      fontWeight: 500,
      lineHeight: "1.5rem",
    },
    caption1: {
      fontSize: "0.75rem",
      fontWeight: 500,
      lineHeight: "1.125rem",
      fontFamily: "Inter",
    },
    caption2: {
      fontSize: "0.75rem",
      fontWeight: 400,
      lineHeight: "1.125rem",
      fontFamily: "Inter",
    },
  },
});

export default theme;
