import { makeStyles } from '@material-ui/core/styles';

const navbarStyles = makeStyles({
  navbarBrand: {
    display: "flex",
    margin: "0",
    padding: "0",
    textAlign: "center",
    alignItems: "center",
    minWidth: "250px",
    height: "90px",
    textDecoration: "none",
  },

  logoName: {
    marginLeft: '3rem',
    marginRight: '2.5rem',
    display: 'block',
  },

  marginNone: {
    marginLeft: '35px!important',
  },

  colorX: {
    color: "rgb(8, 160, 92)",
  },

  sizeX: {
    fontSize: "30px",
  },

  navbarDisplayFlex: {
    boxShadow: 'none',
    display: 'flex',
    justifyContent: 'space-between',
  },

  navDisplayFlex: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 30px 0 0',
    listStyleType: 'disc',
    height: '90px',
  },

  linkText: {
    textDecoration: 'none',
    textTransform: 'uppercase',
    color: '#ffffff',
  },

  tab: {
    position: 'relative',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    color: '#000000',
    fontSize: '1rem',
    margin: '0 8px',
  },

  navBg: {
    backgroundColor: 'transparent',
    boxShadow: 'none',
    minHeight: '48px',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0',
  },

  visible: {
    backgroundColor: '#fff !important',
    transition: 'background-color 200ms linear',
    padding: 'none !important',
    borderBottom: '1px solid #E7E8E8',
  },

  lastComponent: {
    border: '1px solid black',
    borderRadius: '20px',
    padding: '6px',
  },
});

export default navbarStyles;
