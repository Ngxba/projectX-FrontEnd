import { createMuiTheme } from '@material-ui/core/styles';
import palette from './color';

const CustomTheme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          borderWidth: '0px',
          borderStyle: 'solid',
          boxSizing: 'border-box',
          borderColor: 'rgb(226, 232, 240)',
          overflowWrap: 'break-word',
          WebkitTapHighlightColor: 'transparent',
          boxShadow: 'none!important',
          lineHeight: '1.5',
          textSizeAdjust: '100%',
          fontFamily: 'system-ui, sans-serif',
          WebkitFontSmoothing: 'antialiased',
          textRendering: 'optimizelegibility',
          touchAction: 'manipulation',
          fontSize: '100%',
          height: '100%',
          minHeight: '100%',
          backgroundColor: 'rgb(255, 255, 255)',
          '-chakraUiColorMode': 'light',
        },

        body: {
          position: 'relative',
          fontFeatureSettings: '"kern"',
          fontFamily: '\'Open Sans\', sans-serif',
          color: 'rgb(26, 32, 44)',
          background: 'rgb(255, 255, 255)',
          transition: 'background-color 0.2s ease 0s',
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
