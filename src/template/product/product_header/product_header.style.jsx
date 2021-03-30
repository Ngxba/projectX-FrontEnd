import { makeStyles } from '@material-ui/core/styles';

const productHeaderStyle = makeStyles((theme) => ({
  routes_breadcrumbs_container: {
    margin: '1rem 0',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'default',

    '& @media (max-width:991px)': {
      width: '100%',
    },

    '& @media (max-width:767px)': {
      flexFlow: 'row wrap',
      justifyContent: 'center',
      margin: '30px 0',
    },

    '& @media (min-width:768px) and (max-width:768px)': {
      marginTop: '30px',
    },
  },

  info_container: {
    marginTop: '5px',
    color: '#999',
    display: 'inline',
  },

  condition: {
    color: theme.palette.primary.main,
  },

  info_breadcrumbs: {
    color: '#444',
    display: 'block',
    letterSpacing: '-.5px',
    marginTop: '5px',
  },

  separator: {
    fontWeight: '700',
    padding: '0 10px',
    margin: '0',
  },

  market_summary: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: '40px',
  },

  options: {
    paddingRight: '25px',
    borderRight: '1px solid #ccc',
    marginBottom: '20px',
    position: 'relative',
    letterSpacing: '-.5px',
  },
}));

export default productHeaderStyle;
