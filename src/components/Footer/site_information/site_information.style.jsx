import { makeStyles } from '@material-ui/core/styles';

const infoStyle = makeStyles((theme) => ({
  root: {
    cursor: 'default',
  },
  row: {
    margin: '0 auto',
    width: '970px',
  },
  outer: {
    display: 'flex',
    WebkitBoxPack: 'start',
    justifyContent: 'center',
    padding: '0',
    flexDirection: 'row',
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    WebkitBoxPack: 'start',
    justifyContent: 'center',
  },
  element: {
    margin: '0',
  },
  'element--a': {
    backgroundColor: 'transparent',
    textDecoration: 'inherit',
    color: '#737876',
    textTransform: 'uppercase',
    borderLeftColor: '#737876',
    borderLeftStyle: 'solid',
    borderLeftWidth: '1px',
    display: 'inline',
    padding: '0 8px',
    fontSize: '.75rem',

    '&:hover': {
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
