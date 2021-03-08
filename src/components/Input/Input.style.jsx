import { makeStyles } from '@material-ui/core/styles';

const inputStyles = makeStyles(() => ({
  buttonStyle: {
    zIndex: '200',
    position: 'absolute',
    top: '10px',
    fontSize: '18px',
    left: '20px',
    color: '#010101',
  },

  allInput: {
    backgroundColor: '#fafafa',
  },

  inputText: {
    color: '#010101',
    paddingLeft: '50px',
    fontSize: '14px',
    height: '48px',
    fontWeight: '400',
    border: 'none',
  },
}));
export default inputStyles;
