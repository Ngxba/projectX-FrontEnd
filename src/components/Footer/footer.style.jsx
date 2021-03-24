import { makeStyles } from '@material-ui/core/styles';

const footerStyle = makeStyles({
  root: {
    position: 'relative',
    zIndex: '2',
    paddingTop: '0',
    background: '#001210',

    '@media screen and (min-width: 48em)': {
      paddingTop: '0',
    },
    '@media screen and (min-width: 62em)': {
      paddingTop: '1.25rem',
    },
  },
  'custom--hr': {
    height: '1px',
    background: '#737876',
    margin: '0',
  },
});

export default footerStyle;
