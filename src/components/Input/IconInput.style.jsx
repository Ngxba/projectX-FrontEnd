import { makeStyles } from '@material-ui/core/styles';

const fakeStyle = makeStyles((theme) => ({
  formElement: {
    width: 'auto',
    position: 'relative',
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
  },
  formElementField: {
    display: 'block',
    width: '100%',
    position: 'relative',
  },
  customInput: {
    background: '#f6f6f6',
    zIndex: '1',
    borderRadius: '0 2px 2px 0',
    position: 'absolute',
    transition: '0.3s',
    padding: '10px',
    top: '0',
    right: '0',
    height: '100%',
    width: '0',
    border: 'none',
    outline: 'none',
    // "&:focus": {
    //   border: "none",
    // },
  },
  inputPaddingRight: {
    paddingRight: '30px !important',
  },
  inputOpen: {
    width: '220px !important',
  },
  btn: {
    zIndex: '2',
    right: '0',
    position: 'relative',
    transition: '0.3s!important',
    background: '#f6f6f6',
    color: '#000',

    border: '1px solid #f6f6f6',
    borderRadius: '2px 0 0 2px',
    '&:hover': {
      background: 'black',
      color: 'white',
    },
    cursor: 'pointer',
  },
  buttonFormOpen: {
    right: '220px',
    borderRadius: '2px 0 0 2px',
    '&:disabled': {
      backgroundColor: '#f6f6f6 !important',
      color: '#000',
    },
  },
  buttonExit: {
    transition: '0.3s',
    display: 'none',
    position: 'absolute',
    zIndex: '2',
    // bottom: '50%'
    right: '6px',
    '&:hover': {
      background: '#f6f6f6',
      color: theme.palette.primary.main,
    },
    border: 'none',
    bottom: '50%',
    transform: 'translateY(50%)',
    // width: '20px',
    // height: '20px',
  },
  dpInlineBlock: {
    display: 'inline-block',
    transition: '0.3s',
  },
}));

export default fakeStyle;
