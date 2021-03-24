import { makeStyles } from '@material-ui/core/styles';

const socialMediaStyle = makeStyles({
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
    display: 'flex',
    WebkitFlexDirection: 'column',
    MsFlexDirection: 'column',
    flexDirection: 'column',
    WebkitBoxPack: 'justify',
    WebkitJustifyContent: 'center',
    justifyContent: 'center',
    WebkitAlignItems: 'center',
    WebkitBoxAlign: 'center',
    MsFlexAlign: 'center',
    alignItems: 'center',
    minHeight: '65px',

    '@media screen and (min-width: 62em)': {
      WebkitFlexDirection: 'row',
      MsFlexDirection: 'row',
      flexDirection: 'row',
    },

  },

  'icons-container': {
    margin: '10px 0',
    display: 'flex',
    flexFlow: 'row nowrap',
    paddingTop: '0',
  },

  inner: {
    display: 'flex',
    WebkitBoxFlexFlow: 'row nowrap',
    WebkitFlexFlow: 'row nowrap',
    MsFlexFlow: 'row nowrap',
    flexFlow: 'row nowrap',
    paddingTop: '0.75rem',

    '@media screen and (min-width: 48em)': {
      paddingTop: '0',
    },
  },

  icon: {
    width: 'auto',
    padding: '0.5rem',
  },

  'icon--image': {
    height: '1rem',

    '@media screen and (min-width: 62em)': {
      height: '1.25rem',
    },
  },

  'icon--youtube': {
    WebkitFilter: 'brightness(0) invert(1)',
    filter: 'brightness(0) invert(1)',
    width: '1rem',

    '@media screen and (min-width: 62em)': {
      width: '1.25rem',
    },
  },

});

export default socialMediaStyle;
