import { makeStyles } from '@material-ui/core/styles';

const footerNewsStyle = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    width: '970px',
  },

  container: {
    background: 'none',
  },

  'news--container': {
    // display: 'flex',
    paddingRight: '0',
    // WebkitBoxPack: 'justify',
    // justifyContent: 'space-between',
    paddingTop: '1rem',
    paddingBottom: '1.25rem',
    // flexFlow: 'row nowrap',
  },

  column: {
    fontWeight: '600',
    marginLeft: '0',
    width: 'auto',
    marginBottom: '0.75rem',
    marginRight: '0.75rem',
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
    fontWeight: '600',
    listStyle: 'none',
    fontSize: '.75rem',
    backgroundColor: 'transparent',
    textDecoration: 'inherit',
    display: 'inline-block',
    padding: '0',
    color: '#737876',
  },

  hover: {
    '&:hover':
      {
        color: theme.palette.primary.main,
      },
  },

  li: {
    paddingTop: '0.5rem',
    fontSize: '.75rem',
  },

}));

export default footerNewsStyle;
