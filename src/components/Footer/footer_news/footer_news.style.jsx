import { makeStyles } from '@material-ui/core/styles';

const footerNewsStyle = makeStyles((theme) => ({
  root: {
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

  container: {
    background: '#001210',

    '@media screen and (min-width: 48em)': {
      background: 'none',
    },
  },

  'news--container': {
    display: 'flex',
    WebkitBoxFlexFlow: 'wrap',
    WebkitFlexFlow: 'wrap',
    MsFlexFlow: 'wrap',
    flexFlow: 'wrap',
    WebkitBoxPack: 'center',
    MsFlexPack: 'center',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
    WebkitFlexDirection: 'column',
    MsFlexDirection: 'column',
    flexDirection: 'column',
    paddingTop: '1.25rem',
    paddingBottom: '0.5rem',
    paddingRight: '0.75rem',

    '@media screen and (min-width: 30em)': {
      WebkitFlexDirection: 'initial',
      MsFlexDirection: 'initial',
      flexDirection: 'initial',
      paddingRight: '0',
    },
    '@media screen and (min-width: 48em)': {
      WebkitBoxPack: 'justify',
      WebkitJustifyContent: 'space-between',
      justifyContent: 'space-between',
      paddingTop: '1rem',
      paddingBottom: '1.25rem',
    },
    '@media screen and (min-width: 62em)': {
      WebkitBoxFlexFlow: 'row nowrap',
      WebkitFlexFlow: 'row nowrap',
      MsFlexFlow: 'row nowrap',
      flexFlow: 'row nowrap',
    },
  },

  column: {
    width: '80%',
    marginBottom: '1.5rem',
    marginLeft: '1rem',
    marginRight: '0',
    // fontWeight: '600',

    '@media screen and (min-width: 30em)': {
      width: '45%',
      marginLeft: '1.5rem',
    },
    '@media screen and (min-width: 48em)': {
      width: '33%',
      marginLeft: '0',
    },
    '@media screen and (min-width: 62em)': {
      width: 'auto',
      marginBottom: '0.75rem',
      marginRight: '0.75rem',
    },
  },

  ul: {
    margin: '0px',
    padding: '0px',
    listStyle: 'none',
    fontSize: '.625rem',

    '@media screen and (min-width: 80em)': {
      fontSize: '.75rem',
    },
  },

  'li--heading': {
    fontSize: '.875rem',

    '& a': {
      color: '#FFFFFF',
    },
    '& a:hover': {
      color: '#FFFFFF',
    },
  },

  'li--a': {
    display: 'inline-block',
    letterSpacing: '0.5px',
    padding: '0.75rem',
    backgroundColor: 'transparent',
    textDecoration: 'inherit',

    '@media screen and (min-width: 48em)': {
      padding: '0',
    },
  },

  li: {
    paddingTop: '0.5rem',
    fontSize: '.75rem',

    '& a': {
      color: '#737876',
    },

    '& a:hover': {
      color: theme.palette.primary.main,
    },

    '& a:focus': {
      color: theme.palette.primary.main,
    },
  },
}));

export default footerNewsStyle;
