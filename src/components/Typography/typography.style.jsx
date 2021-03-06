import { makeStyles } from '@material-ui/core/styles';
import CustomTheme from '../../Theme/CustomTheme';

const typoStyles = makeStyles({
  heading: {
    fontWeight: '400',
    letterSpacing: '-1px',
  },

  styleHeadingTop: {
    display: 'block',
    fontSize: '3.5rem',
    marginBottom: '0.75rem',
    color: CustomTheme.palette.text.main,
  },

  styleHeadingBottom: {
    display: 'inline-block',
    backgroundColor: CustomTheme.palette.text.main,
    fontSize: '2.5rem',
    padding: '0.5rem',
    color: CustomTheme.palette.text.contrastText,
  },
});

export default typoStyles;
