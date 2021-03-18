import React from 'react';
import loginStyle from './login.style';

const LoginScreen = () =>
{
  const classes = loginStyle();

  return (
    <div
      id="site-body"
      className="page-container"
      i18next-orgval-1="
    "
      i18next-orgval-3="
    "
      i18next-orgval-5="
    "
      i18next-orgval-7="
"
      localized
      style={{}}
    >
      <div
        id="back-link"
        hidden
        i18next-orgval-1="
        "
        i18next-orgval-3="
        "
        i18next-orgval-5="
    "
        localized
      >
        <i className="fas fa-chevron-left" localized />
        <span className="back-text" i18next-orgval-0="Back to Log in / Sign Up" localized>Back to Log in / Sign Up</span>
      </div>
      <div className="page-inner-shadow" localized />
      <div
        className="component-page page-grey"
        id="component-page"
        i18next-orgval-1="
        "
        i18next-orgval-3="
        "
        i18next-orgval-5="
    "
        localized
      >
        <div
          id="login-container"
          i18next-orgval-1="
            "
          i18next-orgval-3="
            "
          i18next-orgval-5="
        "
          localized
        >
          <div
            i18next-orgval-1="
                "
            i18next-orgval-3="
            "
            localized
          >
            <div
              id="login-wrapper"
              className="access-wrap login-wrap"
              style={{
                marginBottom: '0px',
                position: 'relative',
              }}
              i18next-orgval-1="
                    "
              i18next-orgval-3="
                    "
              i18next-orgval-5="
                    "
              i18next-orgval-7="
                "
              localized
            >
              <div
                className="login-body"
                id="login-body"
                i18next-orgval-1="
                        "
                i18next-orgval-3="
                        "
                i18next-orgval-5="
                    "
                localized
              >
                <div
                  className="access-toggle"
                  id="access-toggle"
                  i18next-orgval-1="
                            "
                  i18next-orgval-3="
                            "
                  i18next-orgval-5="
                        "
                  localized
                >
                  <button
                    id="signup-toggle"
                    className="toggle-option option-active"
                    role="tab"
                    i18next-orgval-0="Sign Up"
                    localized
                  >
                    Sign Up
                  </button>
                  <button
                    id="login-toggle"
                    className="toggle-option"
                    role="tab"
                    i18next-orgval-0="Log In"
                    localized
                  >
                    Log In
                  </button>
                </div>
                <div
                  id="tab-container"
                  i18next-orgval-1="
                            "
                  i18next-orgval-3="
                            "
                  i18next-orgval-5="
                            "
                  i18next-orgval-7="
                            "
                  i18next-orgval-9="
                            "
                  i18next-orgval-11="
                            "
                  i18next-orgval-13="
                        "
                  localized
                >
                  <div
                    id="error-container"
                    className=" form-error-container alert-container"
                    hidden
                    i18next-orgval-1="
                                "
                    i18next-orgval-3="
                            "
                    localized
                  >
                    <div
                      className="error-body animated fadeIn"
                      i18next-orgval-1="
                                    "
                      i18next-orgval-3="
                                "
                      localized
                    >
                      <div id="error-message" className="message" i18next-orgval-0="k" localized />
                    </div>
                  </div>
                  {/* Register */}
                  <div
                    id="register"
                    i18next-orgval-1="
                                "
                    i18next-orgval-3="
                            "
                    localized
                  >
                    <div
                      className="account-create"
                      i18next-orgval-1="
                                    "
                      i18next-orgval-3="
                                    "
                      i18next-orgval-5="
                                "
                      localized
                    >
                      <form
                        id="form-register"
                        onSubmit="return false;"
                        i18next-orgval-1="
                                        "
                        i18next-orgval-3="
                                    "
                        localized
                      >
                        <div
                          className="form-field-master"
                          i18next-orgval-1="
                                            "
                          i18next-orgval-3="
                                        "
                          localized
                        >
                          <div
                            className="form-container"
                            i18next-orgval-1="
                                                "
                            i18next-orgval-3="
                                                "
                            i18next-orgval-5="
                                                "
                            i18next-orgval-7="
                                            "
                            localized
                          >
                            <div
                              className="form-view signup-form"
                              i18next-orgval-1="
                                                    "
                              i18next-orgval-3="
                                                    "
                              i18next-orgval-5="
                                                    "
                              i18next-orgval-7="
                                                    "
                              i18next-orgval-9="
                                                "
                              localized
                            >
                              <div
                                id="signup-form-names"
                                localized
                                i18next-orgval-2="
              "
                              >
                                <div
                                  className="form-row"
                                  i18next-orgval-1="
                  "
                                  i18next-orgval-3="
                  "
                                  i18next-orgval-5="
              "
                                  localized
                                >
                                  <input
                                    id="first-name-signup"
                                    name="first-name"
                                    type="text"
                                    required
                                    autoComplete="true"
                                    className="field"
                                    defaultValue
                                    placeholder=" "
                                    aria-labelledby="first-name-signup-label"
                                    placeholder-i18next-orgval=" "
                                    localized
                                  />
                                  <span
                                    className="floating-label"
                                    id="first-name-signup-label"
                                    i18next-orgval-0="First Name"
                                    localized
                                  >
                                    First Name
                                  </span>
                                </div>
                                <div
                                  className="form-row"
                                  i18next-orgval-1="
                  "
                                  i18next-orgval-3="
                  "
                                  i18next-orgval-5="
              "
                                  localized
                                >
                                  <input
                                    id="last-name-signup"
                                    name="last-name"
                                    type="text"
                                    required
                                    autoComplete="true"
                                    className="field"
                                    defaultValue
                                    placeholder=" "
                                    aria-labelledby="last-name-signup-label"
                                    placeholder-i18next-orgval=" "
                                    localized
                                  />
                                  <span
                                    className="floating-label"
                                    id="last-name-signup-label"
                                    i18next-orgval-0="Last Name"
                                    localized
                                  >
                                    Last Name
                                  </span>
                                </div>
                              </div>
                              <div
                                className="form-row"
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                        "
                                i18next-orgval-5="
                                                    "
                                localized
                              >
                                <input
                                  id="email-signup"
                                  name="email"
                                  type="email"
                                  required
                                  autoComplete="true"
                                  className="field"
                                  defaultValue
                                  placeholder=" "
                                  aria-labelledby="email-signup-label"
                                  placeholder-i18next-orgval=" "
                                  localized
                                />
                                <span
                                  className="floating-label"
                                  id="email-signup-label"
                                  i18next-orgval-0="Email Address"
                                  localized
                                >
                                  Email Address
                                </span>
                              </div>
                              <div
                                className="form-row"
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                    "
                                localized
                              >
                                <div
                                  className="password-input-row"
                                  i18next-orgval-1="
                                                            "
                                  i18next-orgval-3="
                                                            "
                                  i18next-orgval-5="
                                                            "
                                  i18next-orgval-7="
                                                        "
                                  localized
                                >
                                  <input
                                    id="password-signup"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="true"
                                    className="field"
                                    defaultValue
                                    placeholder=" "
                                    aria-labelledby="password-signup-label"
                                    placeholder-i18next-orgval=" "
                                    localized
                                  />
                                  <button
                                    id="signup-password-toggle"
                                    type="button"
                                    className="password-toggle far fa-eye-slash"
                                    localized
                                  />
                                  <span
                                    className="floating-label"
                                    id="password-signup-label"
                                    i18next-orgval-0="Password"
                                    localized
                                  >
                                    Password
                                  </span>
                                </div>
                              </div>
                              <p
                                className="password-text"
                                i18next-orgval-0="At least 8 characters, 1 uppercase letter, 1 number & 1 symbol"
                                localized
                              >
                                At least 8 characters, 1 uppercase letter, 1
                                number &amp; 1 symbol
                              </p>
                            </div>
                            <div
                              id="signup-px-captcha"
                              style={{ marginBottom: '10px' }}
                              i18next-orgval-1="
                                                  "
                              i18next-orgval-3="
                                                "
                              localized
                            >
                              <div id="px-captcha" localized />
                            </div>
                            <div
                              className="signup-bottom"
                              i18next-orgval-1="
                                                    "
                              i18next-orgval-3="
                                                    "
                              i18next-orgval-5="
                                                "
                              localized
                            >
                              <div
                                role="presentation"
                                className="terms-container"
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                    "
                                localized
                              >
                                <div
                                  className="form-link-wrapper-signup"
                                  i18next-orgval-1="
                                                            "
                                  i18next-orgval-3="
                                                        "
                                  localized
                                >
                                  <div
                                    className="form-link tspp"
                                    id="signup-terms"
                                    i18next-orgval-1="
                                                                "
                                    i18next-orgval-3="
                                                                "
                                    i18next-orgval-5="
                                                                "
                                    i18next-orgval-7="
                                                            "
                                    localized
                                  >
                                    <input
                                      className="styled-checkbox"
                                      type="checkbox"
                                      id="checkbox-terms-signup"
                                      defaultValue="terms-signup"
                                      localized
                                    />
                                    <label htmlFor="checkbox-terms-signup" localized />
                                    <div
                                      className="form-text"
                                      i18next-orgval-1="
                                                                  "
                                      i18next-orgval-3="
                                                                "
                                      localized
                                    >
                                      <span merge i18next-orgval="auth0_signup_terms" localized>
                                        By signing up, you agree to the
                                        <a
                                          className="terms"
                                          target="_blank"
                                          href="https://stockx.com/terms"
                                        >
                                          Terms of Service
                                        </a>
                                        {' '}
                                        and
                                        <a
                                          className="privacy"
                                          target="_blank"
                                          href="https://stockx.com/privacy"
                                        >
                                          Privacy Policy
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <button
                                id="btn-signup"
                                className="button right-button button-black disabled"
                                disabled
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                        "
                                i18next-orgval-5="
                                                    "
                                localized
                              >
                                <div
                                  id="signup-button-text"
                                  i18next-orgval-0="Sign Up"
                                  localized
                                >
                                  Sign Up
                                </div>
                                <div id="signup-button-spinner" localized>
                                  <i
                                    className="fas fa-circle-notch fa-spin fa-fw"
                                    localized
                                  />
                                </div>
                              </button>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  {/* Login */}
                  <div
                    id="login"
                    i18next-orgval-1="
                                "
                    i18next-orgval-3="
                            "
                    localized
                    hidden
                  >
                    <div
                      className="account-login"
                      i18next-orgval-1="
                                    "
                      i18next-orgval-3="
                                    "
                      i18next-orgval-5="
                                "
                      localized
                    >
                      <form
                        id="form-login"
                        onSubmit="return false;"
                        i18next-orgval-1="
                                        "
                        i18next-orgval-3="
                                    "
                        localized
                      >
                        <div
                          className="form-field-master"
                          i18next-orgval-1="
                                            "
                          i18next-orgval-3="
                                        "
                          localized
                        >
                          <div
                            className="form-container"
                            i18next-orgval-1="
                                                "
                            i18next-orgval-3="
                                                "
                            i18next-orgval-5="
                                                "
                            i18next-orgval-7="
                                            "
                            localized
                          >
                            <div
                              className="form-view login-form"
                              i18next-orgval-1="
                                                    "
                              i18next-orgval-3="
                                                    "
                              i18next-orgval-5="
                                                    "
                              i18next-orgval-7="
                                                "
                              localized
                            >
                              <div
                                className="form-row"
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                        "
                                i18next-orgval-5="
                                                    "
                                localized
                              >
                                <input
                                  id="email-login"
                                  name="email"
                                  type="email"
                                  required
                                  autoComplete="true"
                                  className="field"
                                  defaultValue
                                  placeholder=" "
                                  aria-labelledby="email-login-label"
                                  placeholder-i18next-orgval=" "
                                  localized
                                />
                                <span
                                  className="floating-label"
                                  id="email-login-label"
                                  i18next-orgval-0="Email Address"
                                  localized
                                >
                                  Email Address
                                </span>
                              </div>
                              <div
                                className="form-row"
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                    "
                                localized
                              >
                                <div
                                  className="password-input-row"
                                  i18next-orgval-1="
                                                            "
                                  i18next-orgval-3="
                                                            "
                                  i18next-orgval-5="
                                                            "
                                  i18next-orgval-7="
                                                        "
                                  localized
                                >
                                  <input
                                    id="password-login"
                                    name="password"
                                    type="password"
                                    required
                                    autoComplete="true"
                                    className="field"
                                    defaultValue
                                    placeholder=" "
                                    aria-labelledby="password-login-label"
                                    placeholder-i18next-orgval=" "
                                    localized
                                  />
                                  <button
                                    id="login-password-toggle"
                                    type="button"
                                    className="password-toggle far fa-eye-slash"
                                    localized
                                  />
                                  <span
                                    className="floating-label"
                                    id="password-login-label"
                                    i18next-orgval-0="Password"
                                    localized
                                  >
                                    Password
                                  </span>
                                </div>
                              </div>
                              <div
                                style={{
                                  display: 'flex',
                                  justifyContent: 'flex-end',
                                }}
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                    "
                                localized
                              >
                                <a
                                  href="#"
                                  id="btn-forgot-password"
                                  data-testid="signup-login-reset-password"
                                  className="form-link"
                                  i18next-orgval-0="Forgot Password?"
                                  localized
                                >
                                  Forgot
                                  Password?
                                </a>
                              </div>
                            </div>
                            <div
                              id="login-px-captcha"
                              style={{ marginBottom: '10px' }}
                              i18next-orgval-1="
                                                  "
                              i18next-orgval-3="
                                                "
                              localized
                            />
                            <div
                              className="login-bottom"
                              i18next-orgval-1="
                                                    "
                              i18next-orgval-3="
                                                    "
                              i18next-orgval-5="
                                                "
                              localized
                            >
                              <button
                                id="btn-login"
                                className="button right-button button-black disabled"
                                disabled
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                        "
                                i18next-orgval-5="
                                                    "
                                localized
                              >
                                <div id="login-button-text" i18next-orgval-0="Log In" localized>
                                  Log
                                  In
                                </div>
                                <div id="login-button-spinner" localized>
                                  <i
                                    className="fas fa-circle-notch fa-spin fa-fw"
                                    localized
                                  />
                                </div>
                              </button>
                              <div
                                role="presentation"
                                className="terms-container"
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                    "
                                localized
                              >
                                <div
                                  className="form-link-wrapper-login"
                                  i18next-orgval-1="
                                                            "
                                  i18next-orgval-3="
                                                        "
                                  localized
                                >
                                  <div
                                    className="form-link tspp"
                                    id="login-terms"
                                    i18next-orgval-1="
                                                              "
                                    i18next-orgval-3="
                                                            "
                                    localized
                                  >
                                    <div
                                      className="form-text"
                                      i18next-orgval-1="
                                                                "
                                      i18next-orgval-3="
                                                              "
                                      localized
                                    >
                                      <span merge i18next-orgval="auth0_login_terms" localized>
                                        By logging in, you agree to the
                                        <a
                                          className="terms"
                                          target="_blank"
                                          href="https://stockx.com/terms"
                                        >
                                          Terms of Service
                                        </a>
                                        {' '}
                                        and
                                        <a
                                          className="privacy"
                                          target="_blank"
                                          href="https://stockx.com/privacy"
                                        >
                                          Privacy Policy
                                        </a>
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Password Reset */}
              <div
                className="password-container"
                i18next-orgval-1="
                        "
                i18next-orgval-3="
                    "
                localized
              >
                <div
                  id="password-body"
                  hidden
                  i18next-orgval-1="
                            "
                  i18next-orgval-3="
                            "
                  i18next-orgval-5="
                        "
                  localized
                >
                  <h3 id="password-reset-header" i18next-orgval-0="Reset Password" localized>
                    Reset
                    Password
                  </h3>
                  <div
                    id="reset-container"
                    i18next-orgval-1="
                                "
                    i18next-orgval-3="
                            "
                    localized
                  >
                    <div
                      id="reset-container-text"
                      i18next-orgval-1="
                                    "
                      i18next-orgval-3="
                                    "
                      i18next-orgval-5="
                                "
                      localized
                    >
                      <div
                        id="reset-text"
                        i18next-orgval-0="
                                        Please enter the email address that is associated with your StockX account.
                                    "
                        localized
                      >
                        Please enter the email address that is associated with your StockX account.
                      </div>
                      <form
                        id="form-password"
                        onSubmit="return false;"
                        i18next-orgval-1="
                                        "
                        i18next-orgval-3="
                                    "
                        localized
                      >
                        <div
                          className="form-field-master"
                          i18next-orgval-1="
                                            "
                          i18next-orgval-3="
                                        "
                          localized
                        >
                          <div
                            className="form-container"
                            i18next-orgval-1="
                                                "
                            i18next-orgval-3="
                                                "
                            i18next-orgval-5="
                                            "
                            localized
                          >
                            <div
                              className="form-view reset-form"
                              i18next-orgval-1="
                                                    "
                              i18next-orgval-3="
                                                "
                              localized
                            >
                              <div
                                className="form-row"
                                id="reset-form"
                                i18next-orgval-1="
                                                        "
                                i18next-orgval-3="
                                                        "
                                i18next-orgval-5="
                                                    "
                                localized
                              >
                                <input
                                  id="email-reset"
                                  name="email"
                                  type="email"
                                  required
                                  autoComplete="true"
                                  className="field"
                                  defaultValue
                                  placeholder=" "
                                  aria-labelledby="email-reset-label"
                                  placeholder-i18next-orgval=" "
                                  localized
                                />
                                <span
                                  className="floating-label"
                                  id="email-reset-label"
                                  i18next-orgval-0="Email Address"
                                  localized
                                >
                                  Email Address
                                </span>
                              </div>
                            </div>
                            <button
                              id="btn-reset"
                              className="button right-button button-black disabled"
                              disabled
                              i18next-orgval-0="
                                                    Reset Password
                                                "
                              localized
                            >
                              Reset Password
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="captcha-container"
            i18next-orgval-1="
                "
            i18next-orgval-3="
            "
            localized
          >
            <div id="px-captcha" localized />
          </div>
        </div>
        <div
          id="gdpr-container"
          hidden
          i18next-orgval-1="
            "
          i18next-orgval-3="
            "
          i18next-orgval-5="
        "
          localized
        >
          <div
            id="gdpr"
            i18next-orgval-1="
                "
            i18next-orgval-3="
                "
            i18next-orgval-5="
                "
            i18next-orgval-7="
            "
            localized
          >
            <div
              id="gdpr-header"
              i18next-orgval-0="
                    Updates To Our Privacy Policy and Terms & Conditions
                "
              localized
            >
              Updates To Our Privacy Policy and Terms &amp; Conditions
            </div>
            <div
              id="gdpr-subheader"
              i18next-orgval-1="
                  "
              i18next-orgval-3="
                "
              localized
            >
              <div id="gdpr-subheader-links" i18next-orgval-2=" | " localized>
                <a
                  data-testid="signup-login-privacy"
                  href="#privacy-policy"
                  i18next-orgval-0="Privacy Policy"
                  localized
                >
                  Privacy Policy
                </a>
                {' '}
                |
                {' '}
                <a
                  data-testid="signup-login-terms"
                  href="#terms-conditions"
                  i18next-orgval-0="Terms & Conditions"
                  localized
                >
                  Terms &amp; Conditions
                </a>
              </div>
            </div>
            <div
              id="gdpr-body-container"
              i18next-orgval-1="
                    "
              i18next-orgval-3="
                    "
              i18next-orgval-5="
                    "
              i18next-orgval-7="
                    "
              i18next-orgval-9="
                    "
              i18next-orgval-11="
                    "
              i18next-orgval-13="
                "
              localized
            >
              <div
                id="privacy-header"
                className="gdpr-body-header"
                i18next-orgval-0="Privacy Policy"
                localized
              >
                Privacy Policy
              </div>
              <br localized />
              <div id="privacy-policy" className="gdpr-body-text" localized />
              <div
                id="terms-header"
                className="gdpr-body-header"
                i18next-orgval-0="Terms & Conditions"
                localized
              >
                Terms &amp; Conditions
              </div>
              <br localized />
              <div id="terms-conditions" className="gdpr-body-text" localized />
            </div>
          </div>
          <div
            id="gdpr-button-row"
            i18next-orgval-1="
                "
            i18next-orgval-3="
            "
            localized
          >
            <div
              className="button-row"
              i18next-orgval-1="
                    "
              i18next-orgval-3="
                    "
              i18next-orgval-5="
                "
              localized
            >
              <button
                id="btn-gdpr-reject"
                className="button right-button button-white"
                i18next-orgval-0="Decline"
                localized
              >
                Decline
              </button>
              <button
                id="btn-gdpr-accept"
                className="button right-button button-black"
                i18next-orgval-1="
                        "
                i18next-orgval-3="
                        "
                i18next-orgval-5="
                    "
                localized
              >
                <span
                  id="gdpr-button-text"
                  i18next-orgval-0="I Acknowledge"
                  localized
                >
                  I Acknowledge
                </span>
                <div id="gdpr-button-spinner" localized>
                  <i
                    className="fas fa-circle-notch fa-spin fa-fw"
                    localized
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginScreen;
