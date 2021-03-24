import { makeStyles } from '@material-ui/core/styles';

const footerNewsStyle = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    width: '970px',
  },

  container: {
    background: '#001210',

    '@media screen and (min-width: 48em)': {
      background: 'none',
    },
  },

  'news--container': {
    // display: 'flex',
    // paddingRight: '0',
    // WebkitBoxPack: 'justify',
    // justifyContent: 'space-between',
    // paddingTop: '1rem',
    // paddingBottom: '1.25rem',
    // flexFlow: 'row nowrap',

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

    'screen and (min-width: 30em)': {
      WebkitFlexDirection: 'initial',
      MsFlexDirection: 'initial',
      flexDirection: 'initial',
      paddingRight: '0',
    },
    'screen and (min-width: 48em)': {
      WebkitBoxPack: 'justify',
      WebkitJustifyContent: 'space-between',
      justifyContent: 'space-between',
      paddingTop: '1rem',
      paddingBottom: '1.25rem',
    },
    'screen and (min-width: 62em)': {
      WebkitBoxFlexFlow: 'row nowrap',
      WebkitFlexFlow: 'row nowrap',
      MsFlexFlow: 'row nowrap',
      flexFlow: 'row nowrap',
    },
  },

  column: {
    // fontWeight: '600',
    // marginLeft: '0',
    // width: 'auto',
    // marginBottom: '0.75rem',
    // marginRight: '0.75rem',

    width: '80%',
    marginBottom: '1.5rem',
    marginLeft: '1rem',
    marginRight: '0',
    fontWeight: '600',

    'screen and (min-width: 30em)': {
      __expression__: 'screen and (min-width: 30em)',
      column: {
        width: '45%',
        marginLeft: '1.5rem',
      },
    },
    'screen and (min-width: 48em)': {
      __expression__: 'screen and (min-width: 48em)',
      column: {
        width: '33%',
        marginLeft: '0',
      },
    },
    'screen and (min-width: 62em)': {
      __expression__: 'screen and (min-width: 62em)',
      column: {
        width: 'auto',
        marginBottom: '0.75rem',
        marginRight: '0.75rem',
      },
    },
  },

  ul: {
    margin: '0px',
    padding: '0px',
    listStyle: 'none',
    fontSize: '.625rem',
  },

  'li--heading': {
    fontFamily: '"proxima-nova",sans-serif',
    fontSize: '.875rem',

    // a tag inside li--heading
    '& a': {
      color: '#FFFFFF',
    },
  },

  'li--a': {
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

  li: {
    paddingTop: '0.5rem',
    fontSize: '.75rem',
  },
}));

export default footerNewsStyle;
