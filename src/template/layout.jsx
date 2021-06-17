import React from 'react';
import { PropTypes } from 'prop-types';
import Footer from '../components/Footer/footer';
import FooterNews from '../components/Footer/footer_news/footer_news';
import FooterInfo from '../components/Footer/site_information/site_information';
import SocialMedias from '../components/Footer/social_medias/social_medias';
import NavBar from '../components/Navbar/navbar';

const LayoutDefault = ({ children, isMainPage }) => (
  <React.Fragment key="layout">
    <NavBar isMainPage={isMainPage} />
    <main className="site-content">{children}</main>
    <Footer
      FooterNews={<FooterNews />}
      SiteInfo={<FooterInfo />}
      SocialMedias={<SocialMedias />}
    />
  </React.Fragment>
);

LayoutDefault.propTypes = {
  children: PropTypes.element.isRequired,
  isMainPage: PropTypes.bool,
};

LayoutDefault.defaultProps = {
  isMainPage: false,
};

export default LayoutDefault;
