import { makeStyles } from '@material-ui/core/styles';

const productStyle = makeStyles(() => ({
  container: {
    paddingRight: '15px',
    paddingLeft: '15px',
    marginRight: 'auto',
    marginLeft: 'auto',

    '@media (min-width:768px)': {
      width: '750px',
    },

    '@media (min-width:992px)': {
      width: '970px',
    },

    '@media (min-width:1200px)': {
      width: '1170px',
    },

  },

  shadow: {
    height: '20px',
    background: 'linear-gradient(#e5e5e5,#f5f5f5,#fff,#fff)',
    backgroundColor: '#fff',

    '& @media (max-width:767px)': {
      background: '0 0',
      height: '0',
    },
  },

  page_container: {
    position: 'relative',
    minHeight: '100vh',

    '@media (min-width: 768px)': {
      paddingTop: '91px',
    },

    '@media (max-width: 767px)': {
      paddingTop: '44px',
    },
  },

  breadcrumbs_container: {
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
}));

export default productStyle;
