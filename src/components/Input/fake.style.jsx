import { makeStyles } from '@material-ui/styles';

const fakeStyle = makeStyles({
  formElement: {
    width: 'auto',
    position: 'relative',
  },
  formElementField: {
    display: 'block',
    width: '100%',
    position: 'relative',
    '& input': {
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
    },
  },
  inputPaddingRight: {
    paddingRight: '30px !important',
  },
  inputOpen: {
    width: '180px !important',
  },
  btn: {
    zIndex: '2',
    right: '0',
    position: 'relative',
    transition: '0.3s',
  },
  buttonFormOpen: {
    right: '180px',
    borderRadius: '2px 0 0 2px',
  },
  buttonExit: {
    transition: '0.3s',
    display: 'none',
    position: 'absolute',
    zIndex: '2',
    // bottom: '50%'
    right: '6px',
    // width: '20px',
    // height: '20px',
  },
  dpInlineBlock: {
    display: 'inline-block',
  },
});

export default fakeStyle;
