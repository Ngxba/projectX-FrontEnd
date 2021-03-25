import React from 'react';
import * as PropTypes from 'prop-types';
import formContainerStyle from './form_container.style';

const FormContainer = (props) =>
{
  const { form, resetPassword } = props;

  const classes = formContainerStyle();

  return (
    <div id="site-body" className={`${classes.page_container} ${classes.site_body} `}>

      {/* Show when Reset Password form is currently active */}
      <div id="back-link" hidden>
        <i className="fas fa-chevron-left" />
        <span className="back-text">Back to Log in / Sign Up</span>
      </div>

      <div className="page-inner-shadow" />
      <div className={`${classes.component_page} ${classes.page_grey} `} id="component-page">
        <div className={classes.login_container}>
          <div>
            <div
              id="login-wrapper"
              className={`${classes.access_wrap} ${classes.login_wrap} ${classes.login_wrapper}`}
              style={{
                marginBottom: 0,
                position: 'relative',
              }}
            >

              {/* Login/Register form */}
              {form}

              {/* Reset password form */}
              {resetPassword}

            </div>
          </div>
        </div>
        <div id="gdpr-container" hidden>
          <div id="gdpr">
            <div
              id="gdpr-header"
              i18next-orgval-0=" Updates To Our Privacy Policy and Terms & Conditions "
            >
              Updates To Our Privacy Policy and Terms &amp; Conditions
            </div>
            <div id="gdpr-subheader">
              <div id="gdpr-subheader-links" i18next-orgval-2=" | ">
                <a
                  data-testid="signup-login-privacy"
                  href="#privacy-policy"
                  i18next-orgval-0="Privacy Policy"
                >
                  Privacy Policy
                </a>
                |
                <a
                  data-testid="signup-login-terms"
                  href="#terms-conditions"
                  i18next-orgval-0="Terms & Conditions"
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
            <div id="gdpr-body-container">
              <div
                id="privacy-header"
                className="gdpr-body-header"
                i18next-orgval-0="Privacy Policy"
              >
                Privacy Policy
              </div>
              <br />
              <div id="privacy-policy" className="gdpr-body-text" />
              <div
                id="terms-header"
                className="gdpr-body-header"
                i18next-orgval-0="Terms & Conditions"
              >
                Terms &amp; Conditions
              </div>
              <br />
              <div id="terms-conditions" className="gdpr-body-text" />
            </div>
          </div>
          <div id="gdpr-button-row">
            <div className="button-row">
              <button
                id="btn-gdpr-reject"
                className="button right-button button-white"
                type="button"
              >
                Decline
              </button>
              <button
                id="btn-gdpr-accept"
                className="button right-button button-black"
                type="button"
              >
                <span id="gdpr-button-text">I Acknowledge</span>
                <div id="gdpr-button-spinner">
                  <i className="fas fa-circle-notch fa-spin fa-fw" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FormContainer.propTypes = {
  form: PropTypes.node.isRequired,
  resetPassword: PropTypes.node.isRequired,
};

export default FormContainer;
