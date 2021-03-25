import React from 'react';
import resetPasswordStyle from './reset_password.style';

const ResetPassword = () =>
{
  const classes = resetPasswordStyle();

  return (
    <div className={classes.password_container}>
      <div id="password-body" hidden>
        <h3 id="password-reset-header" i18next-orgval-0="Reset Password">
          Reset Password
        </h3>
        <div id="reset-container">
          <div id="reset-container-text">
            <div
              id="reset-text"
              i18next-orgval-0=" Please enter the email address that is associated with your StockX account. "
            >
              Please enter the email address that is associated with your
              StockX account.
            </div>
            <form id="form-password" onSubmit="return false;">
              <div className="form-field-master">
                <div className="form-container">
                  <div className="form-view reset-form">
                    <div className="form-row" id="reset-form">
                      <input
                        id="email-reset"
                        name="email"
                        type="email"
                        required
                        autoComplete="true"
                        className="field"
                        placeholder=" "
                        aria-labelledby="email-reset-label"
                        placeholder-i18next-orgval=" "
                      />
                      <span
                        className="floating-label"
                        id="email-reset-label"
                        i18next-orgval-0="Email Address"
                      >
                        Email Address
                      </span>
                    </div>
                  </div>
                  <button
                    id="btn-reset"
                    className="button right-button button-black disabled"
                    disabled
                    type="button"
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
  );
};

export default ResetPassword;
