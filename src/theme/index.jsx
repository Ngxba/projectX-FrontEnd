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
    fontFamily: "RingsideWideSSm-Medium_Web, sans-serif",
    fontFamilies: {
      main: "RingsideWideSSm-Medium_Web, sans-serif",
      bold: "RingsideRegularSSm-Bold_Web, sans-serif",
      light: "RingsideRegularSSm-Book_Web, sans-serif",
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
        body: { boxSizing: "border-box" },
      },
    },
  },

  // colors
  ...palette,
});

export default CustomTheme;
