import { makeStyles } from '@material-ui/core/styles';

const loginStyle = makeStyles({
  root: {
    '& html': {
      WebkitLocale: '"en"',
      boxSizing: 'border-box',
      fontFamily: 'sans-serif',
      WebkitTextSizeAdjust: '100%',
      fontSize: '10px',
      WebkitTapHighlightColor: 'transparent',
      boxShadow: 'none!important',
      WebkitFontSmoothing: 'antialiased',
      height: '100%',
      scrollBehavior: 'smooth',
    },

    '& body': {
      margin: '0',
      fontFamily: 'proxima-nova,sans-serif',
      fontSize: '14px',
      lineHeight: '1.42857143',
      color: '#333',
      minHeight: '100%',
      backgroundColor: '#fff',
    },

    '& *, ::before, ::after': {
      WebkitBoxSizing: 'border-box',
      boxSizing: 'border-box',
    },

  },
});

export default loginStyle;
