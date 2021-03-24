import React from 'react';
import {
  AppBar, Toolbar, List, IconButton, Container,
} from '@material-ui/core';
import Home from '@material-ui/icons/Home';
import navbarStyles from './navbar.style';
import CustomTypography from '../Typography/typography';

const navLinks = [
  { title: 'Browse', path: '/sneakers' },
  { title: 'News', path: '/news' },
  { title: 'About', path: '/about/how-it-works' },
  { title: 'Help', path: '/faq' },
  { title: 'Login', path: '/login' },
  { title: 'Sign up', path: '/signup' },
  { title: 'Sell', path: '/sell' },
];

const Navbar = () => {
  const classes = navbarStyles();

  return (
    <AppBar position="static" className={classes.navBg}>
      <Toolbar>
        <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
          <IconButton edge="start" color="inherit" aria-label="home">
            <Home fontSize="large" />
          </IconButton>
          <List component="nav" aria-labelledby="main navigation" className={classes.navDisplayFlex}>
            {navLinks.map(({ title, path }) => (
              <CustomTypography
                href={path}
                key={title}
                className={classes.tab}
                txtComponent="a"
              >
                {title}
              </CustomTypography>
            ))}
          </List>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
