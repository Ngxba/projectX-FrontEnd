import { makeStyles } from '@material-ui/core/styles';

const loginFormStyle = makeStyles({
  general_responsive: {
    '@media (min-width: 768px)': {
      login_container: {
        flex: 'none',
        maxWidth: '400px',
        margin: 'auto',
      },
      login_wrapper: {
        background: 'none',
      },
      access_wrap_login_wrap: {
        paddingTop: '80px',
      },
      access_wrap_signup_wrap: {
        paddingTop: '80px',
      },
      mobile_nav_bar: {
        height: 'auto',
      },
      site_body: {
        background: '#fafafa',
      },
      login_body: {
        background: '#fff',
        border: 'solid 1px #e0e0e0',
        borderRadius: '4.5px',
      },
      password_body: {
        background: '#fafafa',
      },
      btn_reset: {
        marginTop: '5px',
      },
      btn_gdpr_accept: {
        width: '125px',
      },
      signup_password_toggle: {
        paddingTop: '5px',
      },
      gdpr_container: {
        textAlign: 'center',
      },
      gdpr: {
        width: '60%',
        margin: 'auto',
        marginBottom: '120px',
      },
      gdpr_header: {
        fontFamily: '\'proxima-nova\', sans-serif',
        fontSize: '30px',
        fontWeight: '300',
        letterSpacing: '-0.31px',
        color: '#000000',
        marginTop: '30px',
      },
      gdpr_subheader: {
        fontFamily: '\'proxima-nova\', sans-serif',
        fontSize: '12px',
        fontWeight: '500',
        color: '#969799',
        marginTop: '14px',
      },
      gdpr_body_container: {
        width: '100%',
        borderRadius: '1.5px',
        border: 'solid 0.5px #eeeeee',
        backgroundColor: '#ffffff',
        padding: '40px',
        marginTop: '16px',
      },
      gdpr_button_row: {
        paddingTop: '15px',
        height: '80px',
      },
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

  site_body: {
    width: '100%',
    background: '#ffffff',
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

  access_wrap_login_wrap: {
    paddingTop: '0',
    minHeight: '100vh',
  },

  access_wrap_signup_wrap: {
    paddingTop: '0',
    minHeight: '100vh',
  },
});

export default loginFormStyle;
