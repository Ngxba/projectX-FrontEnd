import { makeStyles } from '@material-ui/core/styles';

const socialMediaStyle = makeStyles({
  root: {
    cursor: 'default',
    margin: '0 auto',
    width: '970px',
  },

  container: {
    margin: '10px auto',
    display: 'flex',
    WebkitBoxPack: 'justify',
    justifyContent: 'center',
    WebkitBoxAlign: 'center',
    alignItems: 'center',
    minHeight: '65px',
    flexDirection: 'row',
  },

  'icons-container': {
    margin: '10px 0',
    display: 'flex',
    flexFlow: 'row nowrap',
    paddingTop: '0',
  },

  icon: {
    width: 'auto',
    padding: '0.5rem',
  },

  'icon--image': {
    borderStyle: 'none',
    display: 'block',
    verticalAlign: 'middle',
    maxWidth: '100%',
    height: '1.25rem',
  },

  'icon--youtube': {
    color: 'inherit',
    filter: 'brightness(0) invert(1)',
    width: '1.25rem',
  },

});

export default socialMediaStyle;
