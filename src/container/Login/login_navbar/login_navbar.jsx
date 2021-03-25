import React from 'react';
import loginFormStyle from './login_navbar.style';

const LoginNavbar = () =>
{
  const classes = loginFormStyle();

  return (
    <div className={classes.root} />
  );
};

export default LoginNavbar;
