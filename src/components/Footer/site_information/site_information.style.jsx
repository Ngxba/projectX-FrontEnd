import { makeStyles } from '@material-ui/core/styles';

const infoStyle = makeStyles((theme) => ({
  root: {
    background: '#001210',
  },

  row: {
    margin: '0 auto',
    width: '100%',

    '@media screen and (min-width: 48em)': {
      width: '768px',
    },

    '@media screen and (min-width: 62em)': {
      width: '970px',
    },

    '@media screen and (min-width: 80em)': {
      width: '1140px',
    },
  },

  outer: {
    margin: '0 auto',
    padding: '1.25rem',
    display: 'flex',
    WebkitBoxPack: 'start',
    MsFlexPack: 'start',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
    WebkitFlexDirection: 'column',
    MsFlexDirection: 'column',
    flexDirection: 'column',

    '@media screen and (min-width: 48em)': {
      padding: '0',
    },

    '@media screen and (min-width: 62em)': {
      WebkitFlexDirection: 'row',
      MsFlexDirection: 'row',
      flexDirection: 'row',
    },
  },

  container: {
    display: 'flex',
    WebkitBoxPack: 'center',
    MsFlexPack: 'center',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
    WebkitBoxFlexWrap: 'wrap',
    WebkitFlexWrap: 'wrap',
    MsFlexWrap: 'wrap',
    flexWrap: 'wrap',

    '@media screen and (min-width: 48em)': {
      WebkitBoxPack: 'start',
      MsFlexPack: 'start',
      WebkitJustifyContent: 'center',
      justifyContent: 'center',
    },
  },

  element: {
    margin: '0',

    '@media screen and (min-width: 30em)': {
      margin: '0.75rem',
    },

    '@media screen and (min-width: 48em)': {
      margin: '0',
    },
  },

  'element--a': {
    color: '#737876',
    textTransform: 'uppercase',
    borderLeftColor: '#737876',
    borderLeftStyle: 'solid',
    borderLeftWidth: '0',
    padding: '0.75rem',
    display: 'inline-block',
    fontSize: '.625rem',
    textDecoration: 'none',
    cursor: 'pointer',

    '@media screen and (min-width: 30em)': {
      padding: '0.75rem',
    },
    '@media screen and (min-width: 48em)': {
      borderLeftWidth: '1px',
      padding: '0 5px',
      display: 'inline',
    },
    '@media screen and (min-width: 62em)': {
      padding: '0 8px',
      fontSize: '.75rem',
    },

    '& :hover, :focus, :active, :visited': {
      color: theme.palette.primary.main,
    },
  },

  'first--element': {
    border: '0',
  },

  'copyright--container': {
    display: 'flex',
    WebkitBoxPack: 'justify',
    justifyContent: 'center',
    height: '60px',
    flexDirection: 'row',
    WebkitBoxAlign: 'baseline',
    alignItems: 'baseline',
  },

  copyright: {
    marginBottom: '22px',
    fontStyle: 'normal',
    lineHeight: '1.42857143',
    color: '#737876',
    marginRight: '1rem',
    fontSize: '.75rem',
    paddingBottom: '0',
  },

}));

export default infoStyle;
