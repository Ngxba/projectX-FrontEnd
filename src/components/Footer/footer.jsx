import React from 'react';
import FooterNews from './footer_news/footer_news';
import SocialMedias from './social_medias/social_medias';
import SiteInfo from './site_information/site_information';
import footerStyle from './footer.style';
import data from './footer_news/data';

const Footer = () =>
{
  const classes = footerStyle();

  return (
    <div id="site-footer" data-testid="footer" className={classes.root}>
      <FooterNews newsData={data} />
      <div className={classes['custom--hr']} />
      <SocialMedias />
      <SiteInfo />
    </div>
  );
};
export default Footer;
