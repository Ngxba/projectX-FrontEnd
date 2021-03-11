import { makeStyles } from '@material-ui/core/styles';

const footerStyle = makeStyles({
  root: {
    WebkitTapHighlightColor: 'transparent',
    textSizeAdjust: '100%',
    WebkitFontSmoothing: 'antialiased',
    textRendering: 'optimizelegibility',
    '-chakraUiColorMode': 'light',
    fontFeatureSettings: '"kern"',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    color: 'rgb(26, 32, 44)',
    lineHeight: '1.5',
    fontSize: '100%',
    borderWidth: '0px',
    borderStyle: 'solid',
    boxSizing: 'border-box',
    borderColor: 'rgb(226, 232, 240)',
    overflowWrap: 'break-word',
    position: 'relative',
    zIndex: '2',
    background: '#001210',
    paddingTop: '1.25rem',

  },
  'custom--hr': {
    height: '1px',
    background: '#737876',
    margin: '0',
  },
});

export default footerStyle;
