import React from 'react';
import { PropTypes } from 'prop-types';
import footerStyle from './footer.style';

const Footer = (props) =>
{
  const { FooterNews, SiteInfo, SocialMedias } = props;
  const classes = footerStyle();

  return (
    <div id="site-footer" data-testid="footer" className={classes.root}>

      {/* Props 'newsData' is optional */}
      {FooterNews}

      <div className={classes['custom--hr']} />

      {SocialMedias}

      {/* Props 'elements' is optional */}
      {SiteInfo}
    </div>
  );
};

Footer.propTypes = {
  FooterNews: PropTypes.element.isRequired,
  SiteInfo: PropTypes.element.isRequired,
  SocialMedias: PropTypes.element.isRequired,
};

export default Footer;
