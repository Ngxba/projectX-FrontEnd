import { makeStyles } from '@material-ui/core/styles';

const inputStyles = makeStyles(() => ({
  buttonStyle: {
    zIndex: '200',
    position: 'absolute',
    // top: '10px',
    fontSize: '18px',
    left: '10px',
    color: '#000',
    '&:disabled': {
      color: '#000',
    },
  },

  general: {
    maxWidth: ({ width }) => (width),
    margin: '0 auto',
    padding: '0 12px',
  },

  allInput: {
    backgroundColor: '#fafafa',
  },

  inputText: {
    color: '#010101',
    paddingLeft: '50px',
    fontSize: '14px',
    height: '40px',
    fontWeight: '400',
    border: 'none',
    margin: 8,
    width: '100%',
  },
  gray: {
    background: '#f6f6f6',
  },
  white: {
    background: 'white',
  },
}));

export default inputStyles;
