import React from 'react';
import { PropTypes } from 'prop-types';
import infoStyle from './site_information.style';

const SiteInfo = (props) =>
{
  const { data } = props;

  const classes = infoStyle();

  return (
    <div className={classes.root}>
      <div className={classes.row}>
        <div className={classes.outer}>
          <div className={classes.container}>
            <div className={classes.element}>
              <a
                className={`${classes['first--element']} ${classes['element--a']}`}
                href="https://help.stockx.com/s/?language=en_US"
                target="_blank"
                rel="noreferrer"
              >
                Help
              </a>
            </div>
            <div className={classes.element}>
              <a className={classes['element--a']} href="/how-it-works">
                How It
                Works
              </a>
            </div>

            <div className={classes.element}>
              <a className={classes['element--a']} href="/reviews">Reviews</a>
            </div>
            <div className={classes.element}>
              <a className={classes['element--a']} href="/privacy">Privacy</a>
            </div>
            <div className={classes.element}>
              <a className={classes['element--a']} href="/terms">Terms</a>
            </div>
            <div className={classes.element}>
              <a className={classes['element--a']} href="/jobs">Jobs</a>
            </div>
            <div className={classes.element}>
              <a
                className={classes['element--a']}
                href="https://help.stockx.com/s/contactsupport"
                target="_blank"
                rel="noreferrer"
              >
                Contact
              </a>
            </div>
            <div className={classes.element}>
              <a className={classes['element--a']} href="/product-suggestion">
                Product
                Suggestion
              </a>
            </div>
            <div className={classes.element}>
              <a className={classes['element--a']} href="/press">Press</a>
            </div>
            <div className={classes.element}>
              <a
                className={classes['element--a']}
                href="/accessibility-statement"
              >
                Accessibility
                Statement
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes['copyright--container']}>
          <address className={classes.copyright}>©2021 ProjectX. All Rights Reserved.</address>
        </div>
      </div>
    </div>

  );
};

SiteInfo.propTypes = {
  data: PropTypes.arrayOf(),
};

export default SiteInfo;
