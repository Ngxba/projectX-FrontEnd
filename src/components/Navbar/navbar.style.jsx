import { makeStyles } from '@material-ui/core/styles';

const navbarStyles = makeStyles({
  navbarDisplayFlex: {
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'space-between',
  },

  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: 'white',
  },

  tab: {
    textDecoration: 'none',
    color: '#ffffff',
  },

  navBg: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
  },
});

export default navbarStyles;
