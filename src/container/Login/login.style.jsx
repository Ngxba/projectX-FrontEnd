import { makeStyles } from '@material-ui/core/styles';

const loginStyle = makeStyles({
  root: {
  },
  html: {
    scrollBehavior: 'smooth',
  },
  overlay: {
    display: 'block',
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '2',
    background: '#fafafa',
  },
  spinner_container: {
    position: 'relative',
    top: '50%',
    width: '100px',
    margin: 'auto',
    transform: 'translateY(-50%)',
  },
  mobile_nav_bar: {
    height: '50px',
  },
  stockx_logo: {
    height: '26px',
  },
  stockx_logo_wrapper: {
    padding: '10px',
  },
  login_container: {
    maxWidth: '100%',
  },
  access_wrap_login_wrap: {
    paddingTop: '0',
    minHeight: '100vh',
  },
  access_wrap_signup_wrap: {
    paddingTop: '0',
    minHeight: '100vh',
  },
  access_wrap__access_toggle: {
    margin: '6px 16px 0px 16px',
    height: '50px',
  },
  navbar_brand_logo_dark: {
    lineHeight: '50px',
    height: '50px',
  },
  social_error_message: {
    bottom: '250px',
    width: '90%',
    top: 'auto',
    position: 'absolute',
    textAlign: 'center',
    color: 'red',
  },
  site_body: {
    margin: 'auto',
  },
  overlay_localized__languageLoaded: {
    display: 'none',
  },
  login_body: {
    border: 'none',
  },
  login_wrapper: {
    background: '#ffffff',
  },
  reset_container: {
    height: '250px',
    border: 'solid 0.5px #e0e0e0',
    backgroundColor: '#ffffff',
    padding: '16px',
  },
  password_body: {
    background: '#ffffff',
    width: '500px',
    height: '300px',
  },
  password_reset_header: {
    fontFamily: "'proxima-nova', sans-serif",
    fontSize: '32px',
    fontWeight: '100',
    color: '#010101',
    display: 'block',
    marginBottom: '20px',
    textAlign: 'center',
  },
  reset_container_text: {
    margin: 'auto',
    width: '90%',
  },
  rest_text: {
    padding: '0 0 20px 0',
    width: '100%',
  },
  back_link: {
    margin: '30px',
    cursor: 'pointer',
  },
  btn_reset: {
    width: '100%',
  },
  back_text: {
    marginLeft: '10px',
  },
  captcha_container: {
    margin: '10px 0',
  },
  password_container: {
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  password_reset_container: {
    display: 'flex',
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '385px',
    height: '250px',
    marginTop: '12px',
    border: 'solid 0.5px #e0e0e0',
    backgroundColor: '#ffffff',
  },
  reset_text: {
    padding: '20px 0px',
    width: '85%',
    margin: 'auto',
    fontFamily: "'proxima-nova', sans-serif",
    fontSize: '15px',
    fontStyle: 'normal',
    fontStretch: 'normal',
    textAlign: 'center',
    color: '#010101',
  },
  email_text: {
    marginTop: '10px',
    marginLeft: '18px',
    fontFamily: "'proxima-nova', sans-serif",
    fontSize: '10px',
    fontWeight: '500',
    fontStyle: 'normal',
    fontStretch: 'normal',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#010101',
  },
  site_header_nav__navbar_brand: {
    margin: 'auto',
  },
  site_header_nav: {
    minHeight: '40px',
  },
  navbar: {
    marginBottom: '0px',
  },
  component_page: {
    paddingBottom: '0px',
  },
  social_container: {
    width: '100%',
    display: 'flex',
    flexFlow: 'column wrap',
    justifyContent: 'space-between',
  },
  fa_stack: {
    fontSize: '14px',
  },
  social_button_text: {
    marginLeft: '-4px',
    letterSpacing: '0',
    display: 'inline-block',
    height: '2em',
    lineHeight: '2em',
    position: 'relative',
    verticalAlign: 'middle',
    textTransform: 'none',
  },
  fa_facebook_f: {
    color: '#3b5998',
  },
  fa_twitter: {
    color: '#1da1f2',
  },
  fa_apple: {
    color: '#000000',
  },
  fa_google: {
    background: 'linear-gradient(to bottom left,transparent 49%,#fbbc05 50%) 0 25%/48% 40%,\n            linear-gradient(to top    left,transparent 49%,#fbbc05 50%) 0 75%/48% 40%,\n            linear-gradient(-40deg ,transparent 53%,#ea4335 54%),\n            linear-gradient( 45deg ,transparent 46%,#4285f4 48%),\n            #34a853',
    backgroundRepeat: 'no-repeat',
    WebkitBackgroundClip: 'text',
    backgroundClip: 'text',
    color: 'transparent',
    WebkitTextFillColor: 'transparent',
  },
  btn: {
    height: '50px',
    padding: '4px',
    margin: '4px 2px',
    minWidth: '50px',
    width: '99%',
  },
  btn_facebook_i: {
    padding: 'unset',
  },
  btn_twitter_i: {
    padding: 'unset',
  },
  btn_apple_i: {
    padding: 'unset',
  },
  btn_google_i: {
    padding: 'unset',
  },
  apple_btn: {
    backgroundColor: '#FFF',
    color: '#0F0F0F',
    border: 'solid #0F0F0F 1px',
    fontFamily: 'proxima-nova,sans-serif',
    fontWeight: '600',
    fontSize: '16px',
  },
  facebook_btn: {
    backgroundColor: '#FFF',
    color: '#0F0F0F',
    border: 'solid #0F0F0F 1px',
    fontFamily: 'proxima-nova,sans-serif',
    fontWeight: '600',
    fontSize: '16px',
  },
  twitter_btn: {
    backgroundColor: '#FFF',
    color: '#0F0F0F',
    border: 'solid #0F0F0F 1px',
    fontFamily: 'proxima-nova,sans-serif',
    fontWeight: '600',
    fontSize: '16px',
  },
  google_btn: {
    backgroundColor: '#FFF',
    color: '#0F0F0F',
    border: 'solid #0F0F0F 1px',
    fontFamily: 'proxima-nova,sans-serif',
    fontWeight: '600',
    fontSize: '16px',
  },
  apple_button_text: {
    marginLeft: '-10px',
  },
  google_button_text: {
    marginLeft: '-10px',
  },
  twitter_button_text: {
    marginLeft: '-10px',
  },
  facebook_button_text: {
    marginLeft: '-10px',
  },
  i_fa_circle_notch: {
    color: 'rgba(221, 221, 221, 0.6)',
    fontSize: '20px',
  },
  i_fa_circle_notch_overlay: {
    color: 'rgba(221, 221, 221, 0.6)',
    fontSize: '80px',
    zIndex: '3',
  },
  hr_with_logo__center_text: {
    color: '#949494',
    fontFamily: "'proxima-nova', sans-serif",
    fontWeight: '500',
    fontSize: '12px',
    letterSpacing: '0.5px',
  },
  hr_with_logo_email_option: {
    background: '#fff',
  },
  form_error_container: {
    background: '#fff3f3',
    border: '2px solid #ff6060',
    borderRadius: '5px',
    fontFamily: "'proxima-nova', sans-serif",
    fontWeight: '500',
    fontSize: '12px',
  },
  error_message: {
    wordBreak: 'break-word',
  },
  tab_container: {
    padding: '16px',
  },
  account_create__signup_form: {
    background: '#fff',
  },
  account_login__login_form: {
    background: '#fff',
  },
  account_create__signup_bottom: {
    background: '#fff',
  },
  account_login__login_bottom: {
    background: '#fff',
  },
  toggle_option_option_active: {
    border: '2px solid transparent !important',
    borderBottom: '2px solid #010101 !important',
    color: '#010101 !important',
  },
  toggle_option_active: {
    border: '2px solid transparent !important',
    borderBottom: '2px solid #cecece !important',
  },
  access_wrap__access_toggle__toggle_option: {
    border: '2px solid transparent',
    borderBottom: '2px solid #e0e0e0',
    fontFamily: "'proxima-nova', sans-serif",
    color: '#616161',
    fontWeight: '600',
    fontSize: '14px',
    padding: '14px',
  },
  form: {
    marginTop: '8px',
  },
  form_link_a: {
    color: '#0F0F0F',
    fontWeight: 'bold',
  },
  btn_forgot_password: {
    color: '#0F0F0F',
    float: 'right',
    margin: '0 0 24px 0',
    fontSize: '12px',
  },
  label: {
    marginBottom: '0px',
    fontSize: '12px',
  },
  access_wrap: {
    paddingBottom: '0px',
  },
  button_right_button_button_black_disabled: {
    background: '#c7c7c7',
  },
  component_page_mobile: {
    paddingBottom: '0px',
  },
  social_signup_button: {
    display: 'none',
    fontSize: '14px',
    fontFamily: "'proxima-nova', sans-serif",
    fontWeight: '500',
    padding: '12px',
    margin: '0px',
  },
  social_login_button: {
    display: 'none',
    fontSize: '14px',
    fontFamily: "'proxima-nova', sans-serif",
    fontWeight: '500',
    padding: '12px',
    margin: '0px',
  },
  social_signup_button_active: {
    display: 'inline-block',
  },
  social_login_button_active: {
    display: 'inline-block',
  },
  field: {
    height: '48px',
    margin: '0px 6px',
    border: '0px',
    width: '97%',
    padding: '16px 10px 5px',
  },
  form_link_tspp: {
    fontFamily: "'proxima-nova', sans-serif",
    fontSize: '12px',
    lineHeight: '1.33',
    fontWeight: '500',
    display: 'flex',
    flexDirection: 'row',
    marginBottom: '12px',
    padding: '0px',
    color: '#949494',
  },
  terms: {
    display: 'inline-block',
  },
  privacy: {
    display: 'inline-block',
  },
  login_terms_span: {
    textAlign: 'center',
  },
  form_link_wrapper_signup: {
    textAlign: 'left',
    color: '#010101',
    margin: '0px 0px 24px 0px !important',
  },
  form_link_wrapper_login: {
    color: '#010101',
    margin: '0px !important',
  },
  button_button_black: {
    background: '#0F0F0F',
    color: '#fff',
    border: 'none',
  },
  button_row: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '348px',
    margin: 'auto',
  },
  btn_signup: {
    fontSize: '14px',
    letterSpacing: '0.5px',
    height: '50px',
    padding: '0px',
    fontFamily: "'proxima-nova', sans-serif",
    fontWeight: '600',
  },
  btn_login: {
    fontSize: '14px',
    letterSpacing: '0.5px',
    height: '50px',
    padding: '0px',
    fontFamily: "'proxima-nova', sans-serif",
    fontWeight: '600',
  },
  btn_gdpr_accept: {
    fontSize: '14px',
    padding: '0 15px',
    height: '50px',
    fontFamily: "'proxima-nova', sans-serif",
    fontWeight: '600',
  },
  btn_gdpr_reject: {
    fontSize: '14px',
    padding: '0 15px',
    height: '50px',
    fontFamily: "'proxima-nova', sans-serif",
    fontWeight: '600',
  },
  input_focus____floating_label: {
    top: '8px',
    bottom: '10px',
    left: '16px',
    fontSize: '10px',
    opacity: '1',
  },
  input_not__focus__not__placeholder_shown_____floating_label: {
    top: '8px',
    bottom: '10px',
    left: '16px',
    fontSize: '10px',
    opacity: '1',
  },
  div_input_focus____floating_label: {
    top: '8px',
    bottom: '10px',
    left: '16px',
    fontSize: '10px',
    opacity: '1',
  },
  div_input_not__focus__not__placeholder_shown_____floating_label: {
    top: '8px',
    bottom: '10px',
    left: '16px',
    fontSize: '10px',
    opacity: '1',
  },
  floating_label: {
    position: 'absolute',
    pointerEvents: 'none',
    left: '16px',
    top: '15px',
    transition: '0.2s ease all',
    color: '#949494',
    fontSize: '16px',
  },
  styled_checkbox: {
    position: 'absolute',
    opacity: '0',
  },
  styled_checkbox___label: {
    position: 'relative',
    cursor: 'pointer',
    padding: '0',
  },
  styled_checkbox___label_before: {
    content: "''",
    marginRight: '10px',
    display: 'inline-block',
    verticalAlign: 'text-top',
    width: '16px',
    height: '16px',
    background: 'white',
    borderRadius: '2px',
    border: 'solid 1px #e0e0e0',
  },
  styled_checkbox_hover___label_before: {
    background: '#f5f5f5',
    borderRadius: '2px',
    border: 'solid 1px #0F0F0F',
  },
  styled_checkbox_checked___label_before: {
    background: '#ffffff',
    borderRadius: '2px',
    border: 'solid 1px #0F0F0F',
  },
  styled_checkbox_checked___label_after: {
    content: "''",
    position: 'absolute',
    left: '3px',
    top: '7px',
    background: '#0F0F0F',
    width: '2px',
    height: '2px',
    boxShadow: '2px 0 0 #0F0F0F, 4px 0 0 #0F0F0F, 4px -2px 0 #0F0F0F, 4px -4px 0 #0F0F0F, 4px -6px 0 #0F0F0F, 4px -8px 0 #0F0F0F',
    WebkitTransform: 'rotate(45deg)',
    transform: 'rotate(45deg)',
  },
  input: {
    fontFamily: "'proxima-nova', sans-serif",
    fontSize: '16px',
    fontWeight: '500',
    transformOrigin: 'left',
  },
  password_toggle: {
    backgroundColor: 'Transparent',
    backgroundRepeat: 'no-repeat',
    border: 'none',
    cursor: 'pointer',
    overflow: 'hidden',
    outline: 'none',
    float: 'right',
    color: '#949494',
    paddingRight: '16px',
  },
  login_terms: {
    justifyContent: 'center',
    marginTop: '8px',
  },
  password_input_row: {
    display: 'flex',
    flexDirection: 'row',
  },
  form_row: {
    borderRadius: '2px',
    border: '1px solid #e5e7ea',
    marginBottom: '8px',
    position: 'relative',
    height: '50px',
  },
  form_row_focus_within: {
    border: '1px solid #000000',
  },
  password_login: {
    flexGrow: '2',
    border: 'none',
    margin: '0px 0px 0px 6px',
  },
  password_signup: {
    flexGrow: '2',
    border: 'none',
    margin: '0px 0px 0px 6px',
  },
  password_login_focus: {
    outline: 'none',
  },
  password_signup_focus: {
    outline: 'none',
  },
  password_text: {
    fontFamily: "'proxima-nova', sans-serif",
    fontSize: '12px',
    fontWeight: '500',
    color: '#010101',
    margin: '0 0 16px 0',
  },
  signup_button_spinner: {
    display: 'none',
  },
  login_button_spinner: {
    display: 'none',
  },
  gdpr_button_spinner: {
    display: 'none',
  },
  twitter_button_spinner: {
    position: 'relative',
  },
  facebook_button_spinner: {
    position: 'relative',
  },
  apple_button_spinner: {
    position: 'relative',
  },
  google_button_spinner: {
    position: 'relative',
  },
  button: {
    padding: '17px 18px',
  },
  page_container: {
    background: '#fafafa',
    width: '100%',
  },
  gdpr: {
    marginBottom: '80px',
  },
  gdpr_container: {
    width: '100%',
    textAlign: 'left',
  },
  gdpr_body_header: {
    fontSize: '16px',
    fontWeight: '500',
  },
  gdpr_body_text: {
    fontSize: '12px',
    fontWeight: '500',
    color: '#969799',
  },
  gdpr_header: {
    fontFamily: "'proxima-nova', sans-serif",
    fontSize: '30px',
    fontWeight: '300',
    letterSpacing: '-0.31px',
    color: '#010101',
    padding: '20px 20px 0 20px',
  },
  gdpr_subheader: {
    fontFamily: "'proxima-nova', sans-serif",
    fontSize: '12px',
    fontWeight: '500',
    color: '#969799',
    marginTop: '14px',
    padding: '0 20px',
  },
  gdpr_subheader_links___a: {
    fontWeight: 'bold',
    color: '#009e55',
  },
  gdpr_subheader_links: {
    marginTop: '16px',
  },
  gdpr_body_container: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '20px',
    marginTop: '16px',
    textAlign: 'left',
  },
  gdpr_button_row: {
    width: '100%',
    height: '100px',
    paddingTop: '24px',
    position: 'fixed',
    bottom: '0px',
    background: '#ffffff',
    boxShadow: 'inset 0 0.5px 0 0 #e5e7ea',
  },
  button_white: {
    background: '#ffffff',
    border: 'solid 0.5px #e5e7ea',
  },
  '@media (max-width: 400px)': {
    __expression__: '(max-width: 400px)',
    btn_android_specific__social_button_text: {
      marginLeft: '-10px',
    },
  },
  '@media (min-width: 768px)': {
    __expression__: '(min-width: 768px)',
    login_container: {
      flex: 'none',
      maxWidth: '400px',
      margin: 'auto',
    },
    login_wrapper: {
      background: 'none',
    },
    stockx_logo_wrapper: {
      padding: '27px',
    },
    site_header_nav__navbar_brand_img: {
      height: '60px',
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
    btn_facebook: {
      padding: '0px',
    },
    btn_twitter: {
      padding: '0px',
    },
    btn_apple: {
      padding: '0px',
    },
    btn_google: {
      padding: '0px',
    },
    social_error_message: {
      fontSize: '16px',
      top: '30px',
      width: '100%',
      color: 'red',
      bottom: 'auto',
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
    social_login_button: {
      padding: '17px 12px',
    },
    social_login_button_active: {
      padding: '17px 12px',
    },
    social_signup_button: {
      padding: '17px 12px',
    },
    social_signup_button_active: {
      padding: '17px 12px',
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
      fontFamily: "'proxima-nova', sans-serif",
      fontSize: '30px',
      fontWeight: '300',
      letterSpacing: '-0.31px',
      color: '#000000',
      marginTop: '30px',
    },
    gdpr_subheader: {
      fontFamily: "'proxima-nova', sans-serif",
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
});

export default loginStyle;
