import { makeStyles } from '@material-ui/core/styles';

const formContainerStyle = makeStyles({
  login_wrapper: {
    background: '#ffffff',

    '@media (min-width: 768px)': {
      background: 'none',
    },
  },

  '.access-wrap.login-wrap, .access-wrap.signup-wrap': {
    paddingTop: '40px',
  },

  access_wrap: {
    paddingTop: '0',
    minHeight: '100vh',

    '@media (min-width: 768px)': {
      paddingTop: '80px',
    },
  },

  login_wrap: {
    paddingTop: '0',
    minHeight: '100vh',

    '@media (min-width: 768px)': {
      paddingTop: '80px',
    },
  },

  signup_wrap: {
    paddingTop: '0',
    minHeight: '100vh',

    '@media (min-width: 768px)': { paddingTop: '80px' },
  },

  mobile_nav_bar: {
    '@media (min-width: 768px)': { height: 'auto' },
  },

  site_body: {
    width: '100%',
    background: '#ffffff',

    '@media (min-width: 768px)': { background: '#fafafa' },
  },

  login_body: {
    border: 'none',

    '@media (min-width: 768px)': {
      background: '#fff',
      border: 'solid 1px #e0e0e0',
      borderRadius: '4.5px',
    },
  },

  password_body: {
    '@media (min-width: 768px)': { background: '#fafafa' },
  },

  btn_reset: {
    '@media (min-width: 768px)': { marginTop: '5px' },
  },

  btn_gdpr_accept: {
    '@media (min-width: 768px)': { width: '125px' },
  },

  signup_password_toggle: {
    '@media (min-width: 768px)': { paddingTop: '5px' },
  },

  gdpr_container: {
    '@media (min-width: 768px)': { textAlign: 'center' },
  },

  gdpr: {
    '@media (min-width: 768px)': {
      width: '60%',
      margin: 'auto',
      marginBottom: '120px',
    },
  },

  gdpr_header: {
    '@media (min-width: 768px)': {
      fontFamily: '\'proxima-nova\', sans-serif',
      fontSize: '30px',
      fontWeight: '300',
      letterSpacing: '-0.31px',
      color: '#000000',
      marginTop: '30px',
    },
  },

  gdpr_subheader: {
    '@media (min-width: 768px)': {
      fontFamily: '\'proxima-nova\', sans-serif',
      fontSize: '12px',
      fontWeight: '500',
      color: '#969799',
      marginTop: '14px',
    },
  },

  gdpr_body_container: {
    '@media (min-width: 768px)': {
      width: '100%',
      borderRadius: '1.5px',
      border: 'solid 0.5px #eeeeee',
      backgroundColor: '#ffffff',
      padding: '40px',
      marginTop: '16px',
    },
  },

  gdpr_button_row: {
    '@media (min-width: 768px)': {
      paddingTop: '15px',
      height: '80px',
    },
  },

  page_container: {
    paddingTop: '91px',
    minHeight: '100vh',
    position: 'relative',
    overflowY: 'hidden',
    width: '100%',
    background: '#fafafa',
  },

  component_page: {
    alignItems: 'center',
    minHeight: '24em',
    justifyContent: 'center',
    paddingBottom: '0px',
  },

  page_grey: {
    background: '#fafafa',
  },

  login_container: {
    maxWidth: '100%',

    '@media (min-width: 768px)': {
      flex: 'none',
      maxWidth: '400px',
      margin: 'auto',
    },
  },

});

export default formContainerStyle;
