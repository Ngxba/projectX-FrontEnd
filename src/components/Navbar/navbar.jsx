import React, { useEffect, useState } from "react";
import { AppBar, List } from "@material-ui/core";
import PropTypes from "prop-types";
import navbarStyles from "./navbar.style";
import CustomTypography from "../Typography/typography";
import CustomInput from "../Input/Input";

const navLinkHome = { title: "Home", path: "/" };

const navLinks = [
  { title: "News", path: "/news" },
  { title: "About", path: "/about/how-it-works" },
  { title: "Help", path: "/faq" },
  { title: "Login", path: "/login" },
  { title: "Sign up", path: "/signup" },
];

const Navbar = (props) =>
{
  const classes = navbarStyles();
  const { isMainPage } = props;

  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () =>
  {
    if (window.scrollY > 100)
    {
      setScrolling(true);
    }
    else
    {
      setScrolling(false);
    }
  };

  useEffect(() =>
  {
    window.addEventListener('scroll', handleScroll);
  });

  return (
    <AppBar
      position={isMainPage ? "fixed" : "sticky"}
      className={`${(scrolling || !isMainPage) && classes.visible} ${
        classes.navBg
      }`}
    >
      <span
        className={`${classes.logoName} ${!isMainPage && classes.marginNone}`}
      >
        <CustomTypography
          href={navLinkHome.path}
          key={navLinkHome.title}
          className={classes.navbarBrand}
          color="black"
          fontSize="20px"
          txtType="text--bold"
        >
          ProjectX
        </CustomTypography>
      </span>
      <List
        component="nav"
        aria-labelledby="main navigation"
        className={classes.navDisplayFlex}
      >
        {!isMainPage && <CustomInput placeholder="Search..." variant="icon" />}
        {navLinks.map(({ title, path }, i) => (
          <CustomTypography
            href={path}
            key={title}
            className={`${classes.tab} ${
              i === navLinks.length - 1 && classes.lastComponent
            }`}
            txtType="text--light"
          >
            {title}
          </CustomTypography>
        ))}
      </List>
    </AppBar>
  );
};

Navbar.propTypes = {
  isMainPage: PropTypes.bool,
};

Navbar.defaultProps = {
  isMainPage: false,
};

export default Navbar;
