import { makeStyles } from '@material-ui/core/styles';

const buttonStyle = makeStyles({
  root: {
    textAlign: 'center',
  },
  'btn--large': {
    textRendering: 'optimizelegibility',
    lineHeight: '1.5',
    textDecoration: 'inherit',
    fontFamily: "'Open Sans', sans-serif",
    borderRadius: '4px',
    padding: '25px 30px 22px 30px',
    fontSize: '1.125rem',
    fontWeight: '600',
    letterSpacing: '0.079em',
  },
  'btn--medium': {
    boxShadow: 'none',
    overflow: 'visible',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    userSelect: 'none',
    textTransform: 'capitalize',
    borderRadius: '5px',
    fontSize: '20px',
    fontFamily: "'Bebas Neue', cursive",
    letterSpacing: '2px',
    padding: '11px 25px 5px',
    fontWeight: '500',
  },

  'btn--small': {
    textRendering: 'optimizelegibility',
    textDecoration: 'inherit',
    whiteSpace: 'nowrap',
    verticalAlign: 'middle',
    touchAction: 'manipulation',
    cursor: 'pointer',
    padding: '6px 12px',
    userSelect: 'none',
    borderRadius: '2px',
    letterSpacing: '1px',
    paddingTop: '9px',
    fontSize: '18px',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontFamily: "'Bebas Neue', cursive",
    maxWidth: '46x',
  },
});

export default buttonStyle;
