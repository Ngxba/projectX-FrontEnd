import { createMuiTheme } from "@material-ui/core/styles";
import palette from "./color";
import {
  RingsideRegularSSmBoldWebb,
  RingsideRegularSSmBookWebb,
  RingsideWideSSmMediumWeb,
} from "../fonts";

const CustomTheme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
    fontFamily: "RingsideRegularSSm-Book_Web, sans-serif",
    fontFamilies: {
      main: "RingsideWideSSm-Medium_Web, sans-serif",
      bold: "RingsideRegularSSm-Bold_Web, sans-serif",
      light: "RingsideRegularSSm-Book_Web, sans-serif",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 1180,
      lg: 1280,
      xl: 1920,
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [
          RingsideWideSSmMediumWeb,
          RingsideRegularSSmBoldWebb,
          RingsideRegularSSmBookWebb,
        ],
        html: {
          borderWidth: "0px",
          borderStyle: "solid",
          boxSizing: "border-box",
          borderColor: "rgb(226, 232, 240)",
          overflowWrap: "break-word",
          WebkitTapHighlightColor: "transparent",
          boxShadow: "none!important",
          lineHeight: "1.5",
          textSizeAdjust: "100%",
          fontFamily: "system-ui, sans-serif",
          WebkitFontSmoothing: "antialiased",
          textRendering: "optimizelegibility",
          touchAction: "manipulation",
          fontSize: "100%",
          height: "100%",
          minHeight: "100%",
          "-chakraUiColorMode": "light",
        },

        body: {
          position: "relative",
          fontFeatureSettings: '"kern"',
          fontFamily: "RingsideRegularSSm-Book_Web, sans-serif",
          color: "rgb(26, 32, 44)",
          backgroundColor: "rgb(255, 255, 255)",
          transition: "background-color 0.2s ease 0s",
          padding: "0",
          margin: "0",
        },
      },
    },
  },

  // colors
  ...palette,
});

export default CustomTheme;
