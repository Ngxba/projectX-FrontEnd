import { makeStyles } from '@material-ui/core/styles';

const typoStyles = makeStyles((theme) => ({
  heading: {
    fontWeight: '400',
    letterSpacing: '-1px',
  },

  styleHeadingTop: {
    display: 'block',
    fontSize: '3.5rem',
    marginBottom: '0.75rem',
    color: theme.text.main,
  },

  styleHeadingBottom: {
    display: 'inline-block',
    backgroundColor: theme.text.main,
    fontSize: '2.5rem',
    padding: '0.5rem',
    color: theme.text.contrastText,
  },
}));

export default typoStyles;
