import { makeStyles } from '@material-ui/core/styles';

const typoStyles = makeStyles((theme) => ({
  root: {
    fontWeight: '500',
    fontSize: (props) => (props.fontSize ? props.fontSize : '16px'),
    backgroundColor: (props) => (props.backgroundColor ? props.backgroundColor : 'none'),
    color: (props) => (props.color ? props.color : theme.palette.text.primary),
    lineHeight: '1.3',
  },

  'text--default': {
    fontSize: '16px',
  },

  'text--medium': {
    // fontWeight: 'normal',
    fontFamily: theme.typography.fontFamilies.main,
  },

  'text--bold': {
    // fontWeight: 'bolder',
    fontFamily: theme.typography.fontFamilies.bold,
  },

  'text--light': {
    // fontWeight: 'lighter',
    fontFamily: theme.typography.fontFamilies.light,
  },

  'text--heading': {
    display: 'block',
    fontSize: '2.5rem',
    marginBottom: '0.75rem',
    padding: '0.5rem',
  },

  'text--category': {
    height: '38px',
    fontSize: '18px',
    marginLeft: 'initial',
    marginRight: 'initial',
    boxShadow: 'inset 0 -5px 0 0 transparent',
    marginTop: '0.75rem',
    textTransform: 'capitalize',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  'text--title': {
    fontSize: '18px',
    width: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    marginTop: '24px',
    marginBottom: '16px',
    WebkitBoxPack: 'justify',
  },

  'text--link': {
    fontSize: '16px',
    letterSpacing: '0px',
    color: '#08A05C',
    textDecoration: 'none! important',
    cursor: 'pointer',
  },

  'text--primary': {
    fontSize: '22px',
    lineHeight: '1.3',
  },

  'text--secondary': {
    fontSize: '14px',
    lineHeight: '1.3',
    color: 'rgba(0, 0, 0, 0.5)',
    textTransform: 'capitalize',
  },
}));

export default typoStyles;
