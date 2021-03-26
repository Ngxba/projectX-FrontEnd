import { makeStyles } from '@material-ui/core/styles';

const contentHeaderStyle = makeStyles({
  root: {
    fontFamily: 'RingsideWideSSm-Medium_Web',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#000',
    textAlign: 'center',
    backgroundImage: ({ bgImage }) => (`url("${bgImage}")`),
    backgroundPosition: 'bottom',
    height: '520px',
    marginTop: '0px',
    paddingTop: '111px',
  },

  'home--jumbo': {
    color: '#fff',
  },

  big: {
    lineHeight: '1.1',
    color: 'inherit',
    fontSize: 'inherit',
    fontWeight: 'inherit',
    paddingLeft: '10px',
    paddingRight: '10px',
    letterSpacing: '2px',
    margin: 'auto auto 20px',
  },

  'heading--top': {
    display: 'block',
    marginBottom: '0.75rem',
    letterSpacing: '-1px',
    // fontWeight: '400',
    color: '#000000',
    // fontSize: '3.5rem',
  },

  'heading--bot': {
    display: 'inline-block',
    backgroundColor: '#000000',
    // fontWeight: '400',
    letterSpacing: '-1px',
    padding: '0.5rem',
    // fontSize: '3.5rem',
  },

  'container--search': {
    width: '1170px',
    margin: 'auto',
    maxWidth: '980px',
    paddingLeft: '15px',
    paddingRight: '15px',

    '&::before': {
      display: 'table',
      content: '" "',
    },

    '&::after': {
      clear: 'both',
      display: 'table',
      content: '" "',
    },
  },

  'homepage--search': {
    lineHeight: '20px',
    height: '60px',
    margin: 'auto auto 15px',
  },

  'search--row': {
    display: 'flex',
    justifyContent: 'space-between',
    width: '640px',
    margin: 'auto',
  },

  'search--input': {
    flexGrow: '1',
    position: 'relative',
  },

  'search--box': {
    margin: '0px',
    overflow: 'visible',
    display: 'block',
    lineHeight: '1.42857143',
    width: '100%',
    padding: '6px 12px',
    backgroundColor: '#fff',
    backgroundImage: 'none',
    transition: 'border-color .15s ease-in-out,box-shadow .15s ease-in-out',
    borderRadius: '2px',
    boxShadow: 'none',
    outlineOffset: '-2px',
    appearance: 'none',
    fontFamily: 'RingsideRegularSSm-Book_Web,sans-serif',
    color: '#010101',
    paddingLeft: '60px',
    fontSize: '14px',
    height: '48px',
    fontWeight: '400',
    border: 'none',
    '&:focus': {
      outline: 'none',
    },
  },

  'svg--inline--fa': {
    display: 'inline-block',
    height: '1em',
    verticalAlign: '-0.125em',
    width: '1em',
    overflow: 'visible',
    zIndex: '200',
    position: 'absolute',
    top: '15px',
    fontSize: '18px',
    left: '20px',
    color: '#010101',

    '&path': {
      fill: 'currentcolor',
      d: 'path("M 505 442.7 L 405.3 343 c -4.5 -4.5 -10.6 -7 -17 -7 H 372 c 27.6 -35.3 44 -79.7 44 -128 C 416 93.1 322.9 0 208 0 S 0 93.1 0 208 s 93.1 208 208 208 c 48.3 0 92.7 -16.4 128 -44 v 16.3 c 0 6.4 2.5 12.5 7 17 l 99.7 99.7 c 9.4 9.4 24.6 9.4 33.9 0 l 28.3 -28.3 c 9.4 -9.4 9.4 -24.6 0.1 -34 Z M 208 336 c -70.7 0 -128 -57.2 -128 -128 c 0 -70.7 57.2 -128 128 -128 c 70.7 0 128 57.2 128 128 c 0 70.7 -57.2 128 -128 128 Z")',
    },
  },
});

export default contentHeaderStyle;
