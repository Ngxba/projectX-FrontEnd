import { createMuiTheme } from '@material-ui/core/styles';
import palette from './color';
import {
  RingsideRegularSSmBoldWebb,
  RingsideRegularSSmBookWebb,
  RingsideWideSSmMediumWeb,
} from '../fonts';

const CustomTheme = createMuiTheme({
  typography: {
    button: {
      textTransform: 'none',
    },
    fontFamily: [
      'RingsideWideSSm-Medium_Web',
      'RingsideRegularSSm-Bold_Web',
      'RingsideRegularSSm-Book_Web',
      'sans-serif',
    ].join(','),
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          RingsideWideSSmMediumWeb,
          RingsideRegularSSmBoldWebb,
          RingsideRegularSSmBookWebb],
      },
    },
  },

  // colors
  ...palette,
});

export default CustomTheme;
