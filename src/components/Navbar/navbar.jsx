import React, { useEffect, useState } from 'react';
import { AppBar, List } from '@material-ui/core';
import navbarStyles from './navbar.style';
import CustomTypography from '../Typography/typography';

const navLinkHome = { title: 'Home', path: '/' };

const navLinks = [
  { title: 'News', path: '/news' },
  { title: 'About', path: '/about/how-it-works' },
  { title: 'Help', path: '/faq' },
  { title: 'Login', path: '/login' },
  { title: 'Sign up', path: '/signup' },
];

const Navbar = () => {
  const classes = navbarStyles();

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <AppBar position="fixed" className={`${scrolling && classes.visible} ${classes.navBg}`}>
      <CustomTypography
        href={navLinkHome.path}
        key={navLinkHome.title}
        className={classes.navbarBrand}
        fontSize="20px"
        txtComponent="a"
        txtType="text--bold"
      >
        <span className={classes.logoName}>ProjectX</span>
      </CustomTypography>
      <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
        {navLinks.map(({ title, path }, i) => (
          <CustomTypography
            href={path}
            key={title}
            className={`${classes.tab} ${i === navLinks.length - 1 && classes.lastComponent}`}
            txtComponent="a"
            txtType="text--medium"
          >
            {title}
          </CustomTypography>
        ))}
      </List>
    </AppBar>
  );
};

export default Navbar;
