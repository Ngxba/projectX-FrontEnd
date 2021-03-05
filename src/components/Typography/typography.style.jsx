import { makeStyles } from '@material-ui/core/styles';

const typoStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: '400',
    // fontFamily: 'Averia Libre',s
    letterSpacing: '-1px',
  },

  styleHeadingTop: {
    display: 'block',
    fontSize: '3.5rem',
    marginBottom: '0.75rem',
    color: theme.colors.black,
  },

  styleHeadingBottom: {
    display: 'inline-block',
    backgroundColor: theme.colors.black,
    fontSize: '2.5rem',
    padding: '0.5rem',
    color: theme.colors.white,
  },
}));

export default typoStyles;
