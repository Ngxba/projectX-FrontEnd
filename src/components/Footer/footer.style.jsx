import { makeStyles } from '@material-ui/core/styles';

const footerStyle = makeStyles({
  root: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
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
