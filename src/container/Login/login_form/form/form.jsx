import React from 'react';
import formStyle from './form.style';

const Form = () =>
{
  const classes = formStyle();

  return (
    <div className={classes.login_body} id="login-body">
      <div className="access-toggle" id="access-toggle">
        <button
          id="signup-toggle"
          className="toggle-option"
          role="tab"
          type="button"
        >
          Sign Up
        </button>
        <button
          id="login-toggle"
          className="toggle-option option-active"
          role="tab"
          type="button"
        >
          Log In
        </button>
      </div>
      <div id="tab-container">
        <div
          id="error-container"
          className=" form-error-container alert-container"
          hidden
        >
          <div className="error-body animated fadeIn">
            <div id="error-message" className="message" />
          </div>
        </div>
        <div id="register" hidden>
          <div className="account-create">
            <form id="form-register" onSubmit="return false;">
              <div className="form-field-master">
                <div className="form-container">
                  <div className="form-view signup-form">
                    <div id="signup-form-names">
                      <div className="form-row">
                        <input
                          id="first-name-signup"
                          name="first-name"
                          type="text"
                          required
                          autoComplete="true"
                          className="field"
                          placeholder=" "
                          aria-labelledby="first-name-signup-label"
                          placeholder-i18next-orgval=" "
                        />
                        <span
                          className="floating-label"
                          id="first-name-signup-label"
                          i18next-orgval-0="First Name"
                        >
                          First Name
                        </span>
                      </div>
                      <div className="form-row">
                        <input
                          id="last-name-signup"
                          name="last-name"
                          type="text"
                          required
                          autoComplete="true"
                          className="field"
                          placeholder=" "
                          aria-labelledby="last-name-signup-label"
                          placeholder-i18next-orgval=" "
                        />
                        <span
                          className="floating-label"
                          id="last-name-signup-label"
                          i18next-orgval-0="Last Name"
                        >
                          Last Name
                        </span>
                      </div>
                    </div>
                    <div className="form-row">
                      <input
                        id="email-signup"
                        name="email"
                        type="email"
                        required
                        autoComplete="true"
                        className="field"
                        placeholder=" "
                        aria-labelledby="email-signup-label"
                      />
                      <span
                        className="floating-label"
                        id="email-signup-label"
                      >
                        Email Address
                      </span>
                    </div>
                    <div className="form-row">
                      <div className="password-input-row">
                        <input
                          id="password-signup"
                          name="password"
                          type="password"
                          required
                          autoComplete="true"
                          className="field"
                          placeholder=" "
                          aria-labelledby="password-signup-label"
                        />
                        <button
                          aria-label="signup password toggle"
                          id="signup-password-toggle"
                          type="button"
                          className="password-toggle far fa-eye-slash"
                        />
                        <span
                          className="floating-label"
                          id="password-signup-label"
                        >
                          Password
                        </span>
                      </div>
                    </div>
                    <p
                      className="password-text"
                    >
                      At least 8 characters, 1 uppercase letter, 1 number
                      &amp; 1 symbol
                    </p>
                  </div>
                  <div id="signup-px-captcha" style={{ marginBottom: 10 }} />
                  <div className="signup-bottom">
                    <div role="presentation" className="terms-container">
                      <div className="form-link-wrapper-signup">
                        <div className="form-link tspp" id="signup-terms">
                          <input
                            className="styled-checkbox"
                            type="checkbox"
                            id="checkbox-terms-signup"
                            defaultValue="terms-signup"
                          />
                          {/* eslint-disable-next-line max-len */}
                          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
                          <label htmlFor="checkbox-terms-signup" />
                          <div className="form-text">
                            <span>
                              By signing up, you agree to the
                              <a
                                className="terms"
                                target="_blank"
                                rel="noreferrer"
                                href="https://stockx.com/terms"
                              >
                                Terms of Service
                              </a>
                              and
                              <a
                                className="privacy"
                                target="_blank"
                                rel="noreferrer"
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
                      type="button"
                    >
                      <div id="signup-button-text">Sign Up</div>
                      <div id="signup-button-spinner">
                        <i className="fas fa-circle-notch fa-spin fa-fw" />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div id="login">
          <div className="account-login">
            <form id="form-login" onSubmit="return false;">
              <div className="form-field-master">
                <div className="form-container">
                  <div className="form-view login-form">
                    <div className="form-row">
                      <input
                        id="email-login"
                        name="email"
                        type="email"
                        required
                        autoComplete="true"
                        className="field"
                        placeholder=" "
                        aria-labelledby="email-login-label"
                        placeholder-i18next-orgval=" "
                      />
                      <span
                        className="floating-label"
                        id="email-login-label"
                        i18next-orgval-0="Email Address"
                      >
                        Email Address
                      </span>
                    </div>
                    <div className="form-row">
                      <div className="password-input-row">
                        <input
                          id="password-login"
                          name="password"
                          type="password"
                          required
                          autoComplete="true"
                          className="field"
                          placeholder=" "
                          aria-labelledby="password-login-label"
                        />
                        <button
                          id="login-password-toggle"
                          type="button"
                          className="password-toggle far fa-eye-slash"
                          aria-labelledby="login password toggle"
                        />
                        <span
                          className="floating-label"
                          id="password-login-label"
                          i18next-orgval-0="Password"
                        >
                          Password
                        </span>
                      </div>
                    </div>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                    }}
                    >
                      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                      <a
                        href="#"
                        id="btn-forgot-password"
                        data-testid="signup-login-reset-password"
                        className="form-link"
                        rel="noreferrer"
                      >
                        Forgot Password?
                      </a>
                    </div>
                  </div>
                  <div id="login-px-captcha" style={{ marginBottom: 10 }}>
                    <div id="px-captcha" />
                  </div>
                  <div className="login-bottom">
                    <button
                      id="btn-login"
                      className="button right-button button-black disabled"
                      disabled
                      type="button"
                    >
                      <div id="login-button-text">Log In</div>
                      <div id="login-button-spinner">
                        <i className="fas fa-circle-notch fa-spin fa-fw" />
                      </div>
                    </button>
                    <div role="presentation" className="terms-container">
                      <div className="form-link-wrapper-login">
                        <div className="form-link tspp" id="login-terms">
                          <div className="form-text">
                            <span merge i18next-orgval="auth0_login_terms">
                              By logging in, you agree to the
                              <a
                                className="terms"
                                target="_blank"
                                href="https://stockx.com/terms"
                                rel="noreferrer"
                              >
                                Terms of Service
                              </a>
                              and
                              <a
                                className="privacy"
                                target="_blank"
                                href="https://stockx.com/privacy"
                                rel="noreferrer"
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
  );
};

export default Form;
