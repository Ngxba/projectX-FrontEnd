import { createMuiTheme } from '@material-ui/core/styles';
import palette from './color';

const CustomTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitTapHighlightColor: 'transparent',
          textSizeAdjust: '100%',
          WebkitFontSmoothing: 'antialiased',
          textRendering: 'optimizelegibility',
          '-chakraUiColorMode': 'light',
          borderWidth: '0px',
          borderStyle: 'solid',
          boxSizing: 'border-box',
          borderColor: 'rgb(226, 232, 240)',
          overflowWrap: 'break-word',
          position: 'relative',
          fontFeatureSettings: '"kern"',
          fontFamily: 'RingsideRegular-Book, sans-serif',
          color: 'rgb(26, 32, 44)',
          background: 'rgb(255, 255, 255)',
          transition: 'background-color 0.2s ease 0s',
          lineHeight: '1.5',
          fontSize: '100%',
          height: '100%',
          minHeight: '100%',
          backgroundColor: 'rgb(255, 255, 255)',
          padding: '0',
          margin: '0',
        },
      },
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },

  // colors
  ...palette,
});

export default CustomTheme;
